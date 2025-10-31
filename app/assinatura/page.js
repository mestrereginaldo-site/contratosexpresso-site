import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Assinatura() {
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            🎉 Assinatura Pacote Essencial
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Acesso completo a todos os nossos modelos de contrato + benefícios exclusivos
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* Card de Assinatura */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl border-2 border-blue-200 p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <span className="text-2xl font-bold">🎯</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Pacote Essencial
                </h2>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-blue-600">R$ 197</span>
                  <span className="text-gray-600 ml-2 text-lg">/mês</span>
                </div>
                <p className="text-gray-600">
                  Cancelamento a qualquer momento
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">10 modelos de contratos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Todos os recursos do plano avulso</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consultoria 15min por mês</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Revisão de 1 contrato por mês</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Acesso vitalício aos contratos baixados</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suporte prioritário</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg mb-4">
                🚀 Começar Assinatura - R$ 197/mês
              </button>
              
              <p className="text-center text-sm text-gray-600">
                Pagamento seguro • 7 dias de garantia • Cancelamento fácil
              </p>
            </div>

            {/* Benefícios Adicionais */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Por que assinar o Pacote Essencial?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <span className="text-green-600 text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Economia Imediata</h4>
                    <p className="text-gray-600 text-sm">
                      Se você precisa de mais de 2 contratos, a assinatura já vale a pena no primeiro mês.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-blue-600 text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Consultoria Inclusa</h4>
                    <p className="text-gray-600 text-sm">
                      15 minutos de consultoria com especialista todo mês para tirar dúvidas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <span className="text-purple-600 text-xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Revisão de Contratos</h4>
                    <p className="text-gray-600 text-sm">
                      Nossa equipe revisa 1 contrato por mês que você já preencheu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <span className="text-yellow-600 text-xl">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Crescimento do Negócio</h4>
                    <p className="text-gray-600 text-sm">
                      Conforme seu negócio cresce, você tem todos os contratos necessários disponíveis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Garantia */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">✅</span>
                  <h4 className="font-bold text-green-900">Garantia de Satisfação</h4>
                </div>
                <p className="text-green-800 text-sm">
                  Teste o Pacote Essencial por 7 dias. Se não atender suas expectativas, devolvemos 100% do valor.
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
