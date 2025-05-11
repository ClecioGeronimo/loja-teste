import React, { useState } from 'react';
import { Search, Download, Mail } from 'lucide-react';
import { customers } from '../../data/products';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { format } from 'date-fns';

const AdminCustomers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Customers</h1>
            <p className="text-gray-600">Manage your customer base</p>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              leftIcon={<Mail size={18} />}
            >
              Email All
            </Button>
            <Button 
              variant="outline" 
              leftIcon={<Download size={18} />}
            >
              Export
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Input
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<Search size={18} />}
          />
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-sm text-gray-500">
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Join Date</th>
                  <th className="px-6 py-4">Orders</th>
                  <th className="px-6 py-4">Total Spent</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-4">
                          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                            {customer.name.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{customer.name}</div>
                          <div className="text-sm text-gray-500">{customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {format(new Date(customer.joinDate), 'MMM dd, yyyy')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{customer.orders}</div>
                      <div className="text-sm text-gray-500">orders</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {formatPrice(customer.totalSpent)}
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;