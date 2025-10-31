'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CheckoutForm({ contrato }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: ''
  })

  const [paymentMethod, setPaymentMethod] = useState('pix')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validar formulário
    if (!formData.nome || !formData.email || !formData.cpf || !formData.telefone) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    // Redirecionar para página de checkout REAL
    router.push(`/checkout?contrato=${contrato.slug}&nome=${encodeURIComponent(formData.nome)}&email=${encodeURIComponent(formData.email)}`)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value)
  }

  const calcularPreco = () => {
    return paymentMethod === 'pix' ? contrato.preco * 0.95 : contrato.preco
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Finalizar Compra</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="seu@email.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CPF *
            </label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="000.000.000-00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefone *
            </label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        {/* Resumo do Pedido */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Resumo do Pedido</h3>
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600">{contrato.nome}</span>
            <span className="font-semibold">R$ {contrato.preco}</span>
          </div>
          {paymentMethod === 'pix' && (
            <div className="flex justify-between items-center mb-2 text-sm">
              <span className="text-green-600">Desconto PIX (5%)</span>
              <span className="text-green-600">-R$ {(contrato.preco * 0.05).toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-2">
            <span className="font-semibold text-gray-900 text-lg">Total</span>
            <span className="text-2xl font-bold text-blue-600">R$ {calcularPreco().toFixed(2)}</span>
          </div>
        </div>

        {/* Métodos de Pagamento */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Método de Pagamento</h3>
          <div className="space-y-3">
            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
              <input 
                type="radio" 
                name="payment" 
                value="pix" 
                className="text-blue-600 focus:ring-blue-500" 
                onChange={handlePaymentChange}
                checked={paymentMethod === 'pix'}
              />
              <div className="ml-3 flex-1">
                <span className="font-medium block">PIX</span>
                <span className="text-sm text-gray-600">Pagamento instantâneo</span>
              </div>
              <span className="ml-auto text-green-600 font-semibold bg-green-100 px-2 py-1 rounded text-sm">5% OFF</span>
            </label>
            
            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                className="text-blue-600 focus:ring-blue-500" 
                onChange={handlePaymentChange}
                checked={paymentMethod === 'card'}
              />
              <div className="ml-3 flex-1">
                <span className="font-medium block">Cartão de Crédito</span>
                <span className="text-sm text-gray-600">Até 12x sem juros</span>
              </div>
            </label>
            
            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
              <input 
                type="radio" 
                name="payment" 
                value="boleto" 
                className="text-blue-600 focus:ring-blue-500" 
                onChange={handlePaymentChange}
                checked={paymentMethod === 'boleto'}
              />
              <div className="ml-3 flex-1">
                <span className="font-medium block">Boleto Bancário</span>
                <span className="text-sm text-gray-600">Pagamento em 1-2 dias úteis</span>
              </div>
            </label>
          </div>
        </div>

        {/* Termos e Condições */}
        <div className="bg-blue-50 rounded-lg p-4">
          <label className="flex items-start">
            <input 
              type="checkbox" 
              required 
              className="text-blue-600 focus:ring-blue-500 mt-1 mr-3" 
            />
            <span className="text-sm text-gray-700">
              Concordo com os <a href="#" className="text-blue-600 hover:text-blue-800 underline">Termos de Uso</a> e <a href="#" className="text-blue-600 hover:text-blue-800 underline">Política de Privacidade</a>. Estou ciente de que receberei o contrato por email após a confirmação do pagamento.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
        >
          {paymentMethod === 'pix' ? (
            <>
              COMPRAR COM PIX - R$ {calcularPreco().toFixed(2)}
              <div className="text-sm font-normal opacity-90">Economize R$ {(contrato.preco * 0.05).toFixed(2)}</div>
            </>
          ) : (
            `COMPRAR AGORA - R$ ${calcularPreco().toFixed(2)}`
          )}
        </button>

        <div className="text-center text-sm text-gray-500 space-y-1">
          <div className="flex items-center justify-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Pagamento 100% seguro
          </div>
          <div className="flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Download disponível imediatamente
          </div>
        </div>
      </form>
    </div>
  )
}
