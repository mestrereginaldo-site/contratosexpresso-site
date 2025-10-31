'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContratoLocacaoResidencial() {
  const [etapa, setEtapa] = useState('detalhes');
  const [metodoPagamento, setMetodoPagamento] = useState('pix');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: ''
  });

  const contrato = {
    titulo: 'Contrato de Locação Residencial',
    descricao: 'Para alugar imóveis residenciais com segurança jurídica',
    precoOriginal: 87,
    caracteristicas: [
      'Cláusulas de garantia (fiador, caução, seguro)',
      'Reajuste conforme IGPM',
      'Multas por atraso e danos',
      'Direitos e deveres de locador/locatário',
      'Download instantâneo',
      'Suporte por email'
    ]
  };

  const descontoPix = 0.05; // 5% de desconto
  const precoPix = contrato.precoOriginal * (1 - descontoPix);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de pagamento aqui
    alert('Redirecionando para o gateway de pagamento...');
  };

  if (etapa === 'checkout') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/contratos" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
            ← Voltar para todos os contratos
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Finalizar Compra</h1>
            <p className="text-gray-600 mb-6">{contrato.titulo}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulário */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Seus Dados</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CPF *
                      </label>
                      <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="termos"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="termos" className="text-sm text-gray-600">
                      Concordo com os Termos de Uso e Política de Privacidade. Estou ciente de que receberei o contrato por email após a confirmação do pagamento.
                    </label>
                  </div>
                </form>
              </div>

              {/* Resumo do Pedido */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>{contrato.titulo}</span>
                    <span>R$ {contrato.precoOriginal}</span>
                  </div>
                  {metodoPagamento === 'pix' && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto PIX (5%)</span>
                      <span>- R$ {(contrato.precoOriginal * descontoPix).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R$ {metodoPagamento === 'pix' ? precoPix.toFixed(2) : contrato.precoOriginal}</span>
                  </div>
                </div>

                <h3 className="font-semibold mb-3">Método de Pagamento</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setMetodoPagamento('pix')}
                    className={`w-full text-left p-4 border rounded-lg ${
                      metodoPagamento === 'pix' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">PIX</div>
                    <div className="text-sm text-green-600">5% OFF</div>
                    <div className="text-sm text-gray-600">Pagamento instantâneo</div>
                  </button>

                  <button
                    onClick={() => setMetodoPagamento('cartao')}
                    className={`w-full text-left p-4 border rounded-lg ${
                      metodoPagamento === 'cartao' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">Cartão de Crédito</div>
                    <div className="text-sm text-gray-600">Até 12x sem juros</div>
                  </button>

                  <button
                    onClick={() => setMetodoPagamento('boleto')}
                    className={`w-full text-left p-4 border rounded-lg ${
                      metodoPagamento === 'boleto' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">Boleto Bancário</div>
                    <div className="text-sm text-gray-600">Pagamento em 1-2 dias úteis</div>
                  </button>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg mt-6"
                >
                  {metodoPagamento === 'pix' ? `COMPRAR COM PIX - R$ ${precoPix.toFixed(2)}` : 
                   metodoPagamento === 'cartao' ? `PAGAR COM CARTÃO - R$ ${contrato.precoOriginal}` :
                   `GERAR BOLETO - R$ ${contrato.precoOriginal}`}
                </button>

                <div className="text-center mt-4 text-sm text-gray-600">
                  <p>Pagamento 100% seguro</p>
                  <p>Download disponível imediatamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Página de detalhes do contrato
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/contratos" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Voltar para todos os contratos
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{contrato.titulo}</h1>
          <p className="text-xl text-gray-600 mb-8">{contrato.descricao}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">R$ {contrato.precoOriginal}</span>
                <span className="text-gray-500 ml-2">uma vez • Download instantâneo</span>
              </div>

              <ul className="space-y-3 mb-8">
                {contrato.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{caracteristica}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-semibold">
                  Sem contrato adequado, você pode perder até R$ 50.000 em um processo
                </p>
              </div>
            </div>

            <div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Método de Pagamento</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                    <div>
                      <div className="font-semibold">PIX</div>
                      <div className="text-sm text-green-600">5% OFF</div>
                    </div>
                    <div className="text-sm text-gray-600">Pagamento instantâneo</div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                    <div className="font-semibold">Cartão de Crédito</div>
                    <div className="text-sm text-gray-600">Até 12x sem juros</div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                    <div className="font-semibold">Boleto Bancário</div>
                    <div className="text-sm text-gray-600">Pagamento em 1-2 dias úteis</div>
                  </div>
                </div>

                <button
                  onClick={() => setEtapa('checkout')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg mt-6"
                >
                  Comprar Agora - R$ {contrato.precoOriginal}
                </button>

                <div className="text-center mt-4 text-sm text-gray-600">
                  <p>Pagamento 100% seguro</p>
                  <p>Download disponível imediatamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
