'use client'
import { useState } from 'react'

export default function CheckoutForm({ contrato }) {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [telefone, setTelefone] = useState('')
  const [loading, setLoading] = useState(false)
  const [metodoPagamento, setMetodoPagamento] = useState('pix')
  const [erro, setErro] = useState('')

  // Calcular desconto Pix (5%)
  const precoOriginal = contrato.preco
  const descontoPix = metodoPagamento === 'pix'
  const precoComDesconto = descontoPix ? precoOriginal * 0.95 : precoOriginal
  const valorDesconto = precoOriginal - precoComDesconto

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErro('')

    try {
      // SIMULAÇÃO - Em produção, isso se conectaria ao Mercado Pago
      console.log('Processando pagamento...', {
        contrato: contrato.nome,
        email,
        nome,
        valor: precoComDesconto,
        metodo: metodoPagamento
      })

      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Redirecionar para página de obrigado
      window.location.href = '/obrigado'

    } catch (error) {
      console.error('Erro:', error)
      setErro('Erro ao processar pagamento. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Finalizar Compra
      </h2>

      {/* Resumo do Pedido */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Resumo do Pedido</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">{contrato.nome}</span>
          <span className="text-gray-900 font-semibold">R$ {precoOriginal}</span>
        </div>
        
        {descontoPix && (
          <div className="flex justify-between items-center mb-2 text-green-600">
            <span>Desconto Pagamento PIX (5%)</span>
            <span>- R$ {valorDesconto.toFixed(2)}</span>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-2 mt-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="text-xl font-bold text-blue-600">
              R$ {precoComDesconto.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Método de Pagamento */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Método de Pagamento</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setMetodoPagamento('pix')}
            className={`p-4 border-2 rounded-lg text-center transition-colors ${
              metodoPagamento === 'pix'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="font-semibold">PIX</div>
            <div className="text-sm text-green-600">5% de desconto</div>
          </button>
          
          <button
            type="button"
            onClick={() => setMetodoPagamento('cartao')}
            className={`p-4 border-2 rounded-lg text-center transition-colors ${
              metodoPagamento === 'cartao'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="font-semibold">Cartão</div>
            <div className="text-sm text-gray-600">Crédito ou Débito</div>
          </button>
        </div>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
              Empresa (opcional)
            </label>
            <input
              type="text"
              id="empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nome da sua empresa"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone (opcional)
            </label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        {erro && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{erro}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
              Processando...
            </div>
          ) : (
            `Comprar Agora - R$ ${precoComDesconto.toFixed(2)}`
          )}
        </button>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div className="text-sm text-yellow-800">
              <strong>Modo de demonstração:</strong> Em produção, esta página integraria com Mercado Pago para pagamentos reais.
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
