import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Camera, LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const AccountPage: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // Simulação de atualização
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess('Perfil atualizado com sucesso!');
      setIsEditing(false);
    } catch (err) {
      setError('Erro ao atualizar perfil. Tente novamente.');
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Minha Conta</h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Cabeçalho do Perfil */}
            <div className="p-6 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center">
                <div className="relative">
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                      <User size={32} className="text-gray-400" />
                    </div>
                  )}
                  <button 
                    className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50"
                    aria-label="Alterar foto"
                  >
                    <Camera size={16} className="text-gray-600" />
                  </button>
                </div>
                
                <div className="ml-6">
                  <h2 className="text-xl font-semibold">{user?.name}</h2>
                  <p className="text-gray-600">{user?.email}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Membro desde {new Date().toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Formulário */}
            <form onSubmit={handleSubmit} className="p-6">
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                  {success}
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Informações Pessoais</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <Input
                      label="Nome Completo"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      leftIcon={<User size={18} />}
                      fullWidth
                    />
                    
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      leftIcon={<Mail size={18} />}
                      fullWidth
                    />
                  </div>
                </div>
                
                {isEditing && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">Alterar Senha</h3>
                    <div className="grid grid-cols-1 gap-6">
                      <Input
                        label="Senha Atual"
                        name="currentPassword"
                        type="password"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        leftIcon={<Lock size={18} />}
                        fullWidth
                      />
                      
                      <Input
                        label="Nova Senha"
                        name="newPassword"
                        type="password"
                        value={formData.newPassword}
                        onChange={handleChange}
                        leftIcon={<Lock size={18} />}
                        fullWidth
                      />
                      
                      <Input
                        label="Confirmar Nova Senha"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        leftIcon={<Lock size={18} />}
                        fullWidth
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleLogout}
                    leftIcon={<LogOut size={18} />}
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    Sair da Conta
                  </Button>
                  
                  <div className="flex space-x-4">
                    {isEditing ? (
                      <>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsEditing(false)}
                        >
                          Cancelar
                        </Button>
                        <Button
                          type="submit"
                          variant="primary"
                        >
                          Salvar Alterações
                        </Button>
                      </>
                    ) : (
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => setIsEditing(true)}
                      >
                        Editar Perfil
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          {/* Seções Adicionais */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Meus Pedidos</h3>
              <p className="text-gray-600 mb-4">
                Visualize e acompanhe seus pedidos recentes
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/orders')}
                fullWidth
              >
                Ver Pedidos
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Lista de Desejos</h3>
              <p className="text-gray-600 mb-4">
                Acesse seus produtos salvos na lista de desejos
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/wishlist')}
                fullWidth
              >
                Ver Lista de Desejos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;