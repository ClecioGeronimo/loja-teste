import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminDashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminOrders from './pages/admin/Orders';
import AdminCustomers from './pages/admin/Customers';
import AdminPayments from './pages/admin/Payments';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { WishlistProvider } from './context/WishlistContext';
import { useUser } from './context/UserContext';

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isAdmin } = useUser();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useUser();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:categoryId" element={<ProductsPage />} />
                  <Route path="/product/:productId" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route 
                    path="/account" 
                    element={
                      <PrivateRoute>
                        <AccountPage />
                      </PrivateRoute>
                    } 
                  />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                  
                  {/* Admin Routes */}
                  <Route 
                    path="/admin" 
                    element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    } 
                  />
                  <Route 
                    path="/admin/products" 
                    element={
                      <AdminRoute>
                        <AdminProducts />
                      </AdminRoute>
                    } 
                  />
                  <Route 
                    path="/admin/orders" 
                    element={
                      <AdminRoute>
                        <AdminOrders />
                      </AdminRoute>
                    } 
                  />
                  <Route 
                    path="/admin/customers" 
                    element={
                      <AdminRoute>
                        <AdminCustomers />
                      </AdminRoute>
                    } 
                  />
                  <Route 
                    path="/admin/payments" 
                    element={
                      <AdminRoute>
                        <AdminPayments />
                      </AdminRoute>
                    } 
                  />
                  
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;