import React, { useState } from 'react';
import { CreditCard, DollarSign, RefreshCcw, Settings } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const AdminPayments: React.FC = () => {
  const [accessToken, setAccessToken] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [isTestMode, setIsTestMode] = useState(true);
  
  const handleSaveSettings = () => {
    // Implementar integração com backend para salvar as credenciais
    console.log('Salvando configurações do Mercado Pago...');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Configurações de Pagamento</h1>
            <p className="text-gray-600">Gerencie suas integrações de pagamento</p>
          </div>
        </div>

        {/* Mercado Pago Settings */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <img 
                src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo.png" 
                alt="Mercado Pago" 
                className="h-8 mr-4"
              />
              <h2 className="text-xl font-semibold">Mercado Pago</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Input
                  label="Access Token"
                  type="password"
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                  placeholder="TEST-0000000000000000-000000-00000000000000000000000000000000-000000000"
                  fullWidth
                  leftIcon={<CreditCard size={18} />}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Encontre seu Access Token no painel do Mercado Pago
                </p>
              </div>

              <div>
                <Input
                  label="Public Key"
                  type="password"
                  value={publicKey}
                  onChange={(e) => setPublicKey(e.target.value)}
                  placeholder="TEST-00000000-0000-0000-0000-000000000000"
                  fullWidth
                  leftIcon={<Settings size={18} />}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Encontre sua Public Key no painel do Mercado Pago
                </p>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="testMode"
                  checked={isTestMode}
                  onChange={(e) => setIsTestMode(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="testMode" className="ml-2 block text-sm text-gray-900">
                  Modo de Teste
                </label>
              </div>

              <div>
                <Button
                  variant="primary"
                  onClick={handleSaveSettings}
                  leftIcon={<RefreshCcw size={18} />}
                >
                  Salvar Configurações
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Total Recebido (30 dias)</h3>
            <p className="text-2xl font-bold">R$ 25.430,00</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Transações (30 dias)</h3>
            <p className="text-2xl font-bold">342</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <RefreshCcw className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Taxa de Conversão</h3>
            <p className="text-2xl font-bold">2.4%</p>
          </div>
        </div>

        {/* Documentation */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Documentação</h2>
          </div>
          <div className="p-6">
            <div className="prose max-w-none">
              <h3>Como configurar o Mercado Pago</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Acesse sua conta do Mercado Pago</li>
                <li>Vá para a seção de Desenvolvedor</li>
                <li>Gere suas credenciais de produção</li>
                <li>Cole as credenciais nos campos acima</li>
                <li>Salve as configurações</li>
              </ol>

              <div className="mt-6">
                <h3>Links Úteis</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a 
                      href="https://www.mercadopago.com.br/developers/pt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Portal do Desenvolvedor
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.mercadopago.com.br/developers/pt/docs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Documentação
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-test/test-cards" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Cartões de Teste
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayments;