import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onChange,
  min = 1,
  max = 99
}) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };
  
  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onChange(value);
    }
  };
  
  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        aria-label="Diminuir quantidade"
      >
        <Minus size={16} />
      </button>
      
      <input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        className="w-12 text-center border-none focus:outline-none focus:ring-0"
        min={min}
        max={max}
      />
      
      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        aria-label="Aumentar quantidade"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;