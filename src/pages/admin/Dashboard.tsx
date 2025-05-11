import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Package, 
  Users, 
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { analytics } from '../../data/products';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { format } from 'date-fns';

const AdminDashboard: React.FC = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to your admin dashboard</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <span className={`text-sm font-medium ${analytics.revenue.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {analytics.revenue.growth >= 0 ? (
                  <ArrowUpRight className="inline w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="inline w-4 h-4 mr-1" />
                )}
                {Math.abs(analytics.revenue.growth)}%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Total Revenue</h3>
            <p className="text-2xl font-bold">{formatCurrency(analytics.revenue.total)}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <span className={`text-sm font-medium ${analytics.orders.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {analytics.orders.growth >= 0 ? (
                  <ArrowUpRight className="inline w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="inline w-4 h-4 mr-1" />
                )}
                {Math.abs(analytics.orders.growth)}%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Total Orders</h3>
            <p className="text-2xl font-bold">{analytics.orders.total}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Products</h3>
            <p className="text-2xl font-bold">48</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Customers</h3>
            <p className="text-2xl font-bold">156</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6">Revenue Overview</h3>
            <div className="h-80">
              <ResponsiveLine
                data={[
                  {
                    id: 'revenue',
                    color: 'hsl(210, 70%, 50%)',
                    data: analytics.revenue.daily.map(d => ({
                      x: format(new Date(d.date), 'MMM dd'),
                      y: d.value
                    }))
                  }
                ]}
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
                curve="cardinal"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: value => formatCurrency(value as number)
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                enableGridX={false}
                colors={['#3B82F6']}
                theme={{
                  axis: {
                    ticks: {
                      text: {
                        fontSize: 12,
                        fill: '#6B7280'
                      }
                    }
                  },
                  grid: {
                    line: {
                      stroke: '#E5E7EB'
                    }
                  }
                }}
              />
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6">Sales by Category</h3>
            <div className="h-80">
              <ResponsivePie
                data={analytics.topCategories.map(category => ({
                  id: category.name,
                  label: category.name,
                  value: category.revenue
                }))}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'nivo' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
              />
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Top Products</h3>
              <Link to="/admin/products" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500">
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Sales</th>
                    <th className="pb-4">Revenue</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {analytics.topProducts.map((product, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-4">{product.name}</td>
                      <td className="py-4">{product.sales}</td>
                      <td className="py-4">{formatCurrency(product.revenue)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <Link to="/admin/orders" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500">
                    <th className="pb-4">Order ID</th>
                    <th className="pb-4">Customer</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Total</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[...Array(5)].map((_, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-4">ORD-{String(index + 1).padStart(4, '0')}</td>
                      <td className="py-4">Customer {index + 1}</td>
                      <td className="py-4">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                      <td className="py-4">{formatCurrency(Math.random() * 1000)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;