'use client'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Dados dos contratos (mesmo da página anterior)
const contratosData = {
  'prestacao-servicos': {
    id: 1,
    nome: "Contrato de Prestação de Serviços",
    preco: 97,
    descricao: "Ideal para freelancers e empresas que contratam serviços pontuais",
  },
  'trabalho-pj': {
    id: 2, 
    nome: "Contrato de Trabalho PJ",
    preco: 97,
    descricao: "Para contratar profissionais como Pessoa Jurídica com segurança",
  },
  'termo-confidencialidade': {
    id: 3,
    nome: "Termo de Confidencialidade (NDA)", 
    preco: 67,
    descricao: "Proteja suas ideias e informações comerciais",
  },
  'parceria-comercial': {
    id: 4,
    nome: "Contrato de Parceria Comercial",
    preco: 147,
    descricao: "Para formalizar sociedade entre empresas ou profissionais", 
  },
  'desenvolvimento-software': {
    id: 5,
    nome: "Contrato de Desenvolvimento de Software",
    preco: 197,
    descricao: "Específico para projetos de tecnologia e desenvolvimento",
  },
  'pacote-completo': {
    id: 6,
    nome: "Pacote Completo (5 Contratos)",
    preco: 297,
    descricao: "Todos os contratos essenciais com desconto especial",
  }
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const contratoSlug = searchParams.get('contrato')
  const [contrato, setContrato] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular busca do contrato
    if (contratoSlug && contratosData[contratoSlug]) {
      setContrato(contratosData[contratoSlug])
    }
    setLoading(false)
  }, [contratoSlug])

  const handleRealPayment = () => {
    // Aqui integraríamos com Mercado Pago na versão real
    // Por enquanto, vamos simular um redirecionamento
    alert('🎉 PARABÉNS! Compra simulada com sucesso!\n\nEm uma versão real, você seria redirecionado para o Mercado Pago.')
    
    // Simular sucesso após 2 segundos
    setTimeout(() => {
      window.location.href = '/obrigado'
    }, 2000)
  }

  if (loading) {
    return (
      <main>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <div className="text-xl font-semibold text-gray-900">Carregando...</div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!contrato) {
    return (
      <main>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contrato não encontrado</h1>
            <a href="/contratos" className="text-blue-600 hover:text-blue-800 text-lg">
              ← Voltar para todos os contratos
            </a>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      
      <section className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Finalizar Compra</h1>
              <p className="text-gray-600">Último passo para adquirir seu contrato profissional</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Resumo do Pedido */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Resumo do Pedido</h2>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{contrato.nome}</h3>
                      <p className="text-gray-600 text-sm mt-1">{contrato.descricao}</p>
                    </div>
                    <span className="text-lg font-bold text-blue-600">R$ {contrato.preco}</span>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>R$ {contrato.preco}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Desconto PIX</span>
                      <span>-R$ {(contrato.preco * 0.05).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-lg">R$ {(contrato.preco * 0.95).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Benefícios Incluídos */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">✅ O que você recebe:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Contrato profissional em Word e PDF
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Instruções de preenchimento
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Suporte por email por 30 dias
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Atualizações gratuitas
                    </li>
                  </ul>
                </div>
              </div>

              {/* Área de Pagamento */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Pagamento com PIX</h2>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">R$ {(contrato.preco * 0.95).toFixed(2)}</div>
                    <div className="text-green-700 font-semibold">5% de desconto no PIX</div>
                    <div className="text-sm text-green-600 mt-1">Economize R$ {(contrato.preco * 0.05).toFixed(2)}</div>
                  </div>
                </div>

                {/* QR Code Simulado */}
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 mb-6 text-center">
                  <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">[QR CODE PIX]</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Escaneie o QR Code com seu app bancário
                  </p>
                  <button
                    onClick={handleRealPayment}
                    className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors font-semibold"
                  >
                    Já efetuei o pagamento PIX
                  </button>
                </div>

                {/* Informações de Pagamento Alternativo */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div className="text-sm text-yellow-800">
                      <strong>Importante:</strong> Esta é uma demonstração. Em produção, integraríamos com Mercado Pago para pagamentos reais.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
