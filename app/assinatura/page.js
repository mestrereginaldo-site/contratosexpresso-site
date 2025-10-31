'use client'
import { useSearchParams } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

const planos = {
  basico: {
    nome: 'Plano Básico',
    preco: 97,
    descricao: 'Perfeito para profissionais autônomos e pequenos negócios',
    beneficios: [
      '5 modelos de contratos essenciais',
      'Download ilimitado dos contratos',
      'Atualizações gratuitas',
      'Suporte por email'
    ],
    contratosInclusos: [
      'Contrato de Prestação de Serviços',
      'Contrato de Trabalho PJ', 
      'Termo de Confidencialidade (NDA)',
      'Contrato de Parceria Comercial',
      'Contrato de Locação Residencial'
    ]
  },
  profissional: {
    nome: 'Plano Profissional',
    preco: 197,
    descricao: 'Ideal para consultores e empresas em crescimento',
    beneficios: [
      'Todos os 12 modelos de contratos',
      'Download ilimitado',
      'Atualizações gratuitas',
      'Consultoria 15min/mês',
      'Suporte prioritário'
    ],
    contratosInclusos: [
      'Contrato de Prestação de Serviços',
      'Contrato de Trabalho PJ',
      'Termo de Confidencialidade (NDA)',
      'Contrato de Parceria Comercial',
      'Contrato de Desenvolvimento de Software',
      'Contrato de Locação Residencial',
      'Contrato de Compra e Venda de Imóvel',
      'Contrato de Consultoria Empresarial',
      'Contrato de Prestação de Serviços Digitais',
      'Contrato de Comodato',
      'Contrato de Representação Comercial',
      'Pacote Completo de Documentação'
    ]
  },
  empresarial: {
    nome: 'Plano Empresarial', 
    preco: 497,
    descricao: 'Solução completa para empresas',
    beneficios: [
      'Todos os modelos de contratos + novos lançamentos',
      'Download ilimitado para múltiplos usuários',
      'Atualizações gratuitas',
      'Consultoria 1h/mês',
      'Suporte prioritário 24/7',
      'Personalização de contratos'
    ],
    contratosInclusos: [
      'Todos os 12 contratos profissionais',
      'Novos contratos mensalmente',
      'Contratos setoriais específicos',
      'Modelos personalizados sob demanda'
    ]
  }
}

export default function Assinatura() {
  const searchParams = useSearchParams()
  const planoKey = searchParams.get('plano') || 'profissional'
  const plano = planos[planoKey] || planos.profissional

  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            🎉 {plano.nome}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            {plano.descricao}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Card de Assinatura */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl border-2 border-blue-200 p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <span className="text-2xl font-bold">🎯</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {plano.nome}
                </h2>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-blue-600">R$ {plano.preco}</span>
                  <span className="text-gray-600 ml-2 text-lg">/mês</span>
                </div>
                <p className="text-gray-600">
                  Cancelamento a qualquer momento • 7 dias de garantia
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Benefícios Incluídos:</h3>
                <ul className="space-y-3">
                  {plano.beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg mb-4">
                🚀 Assinar {plano.nome} - R$ {plano.preco}/mês
              </button>
              
              <p className="text-center text-sm text-gray-600">
                Pagamento 100% seguro • Sem taxas ocultas
              </p>
            </div>

            {/* Detalhes do Plano */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contratos Incluídos
              </h3>
              
              <div className="grid gap-4 mb-8">
                {plano.contratosInclusos.map((contrato, index) => (
                  <div key={index} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{contrato}</span>
                  </div>
                ))}
              </div>

              {/* Comparação de Planos */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Comparar Planos</h4>
                <div className="space-y-3">
                  {Object.entries(planos).map(([key, plan]) => (
                    <Link 
                      key={key}
                      href={`/assinatura?plano=${key}`}
                      className={`block border rounded-lg p-4 transition-all ${
                        planoKey === key 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-semibold text-gray-900">{plan.nome}</h5>
                          <p className="text-gray-600 text-sm">R$ {plan.preco}/mês</p>
                        </div>
                        {planoKey === key && (
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                            Selecionado
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Garantia */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">✅</span>
                  <h4 className="font-bold text-green-900">Garantia de 7 Dias</h4>
                </div>
                <p className="text-green-800 text-sm">
                  Teste qualquer plano por 7 dias. Se não atender suas expectativas, devolvemos 100% do valor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
