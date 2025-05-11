/*
  # Create products table with optimizations for large catalogs

  1. New Tables
    - `products` table optimized for large datasets
    - Added indexes for efficient querying
    - Added partitioning for better performance
  
  2. Changes
    - Added B-tree indexes for common search fields
    - Added GiST index for full-text search
    - Added table partitioning by category
  
  3. Security
    - Enable RLS
    - Add policies for access control
*/

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  discounted_price decimal(10,2),
  category_id uuid NOT NULL,
  images text[] NOT NULL DEFAULT '{}',
  in_stock boolean DEFAULT true,
  featured boolean DEFAULT false,
  rating numeric(3,2) DEFAULT 0,
  reviews_count integer DEFAULT 0,
  specifications jsonb DEFAULT '{}',
  search_vector tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('portuguese', coalesce(name, '')), 'A') ||
    setweight(to_tsvector('portuguese', coalesce(description, '')), 'B')
  ) STORED,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
) PARTITION BY LIST (category_id);

-- Create partitions for each category
CREATE TABLE products_laptops PARTITION OF products 
  FOR VALUES IN ('laptops-partition-id');
CREATE TABLE products_components PARTITION OF products 
  FOR VALUES IN ('components-partition-id');
CREATE TABLE products_peripherals PARTITION OF products 
  FOR VALUES IN ('peripherals-partition-id');
CREATE TABLE products_networking PARTITION OF products 
  FOR VALUES IN ('networking-partition-id');

-- Create indexes
CREATE INDEX products_category_id_idx ON products(category_id);
CREATE INDEX products_price_idx ON products(price);
CREATE INDEX products_name_idx ON products(name);
CREATE INDEX products_created_at_idx ON products(created_at);
CREATE INDEX products_search_idx ON products USING GiST (search_vector);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Enable read access for all users"
  ON products FOR SELECT
  USING (true);

CREATE POLICY "Enable write access for admins only"
  ON products FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();