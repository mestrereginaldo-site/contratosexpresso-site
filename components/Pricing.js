import Link from 'next/link'

export default function Pricing() {
  return (
    <section id="planos" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos que Cabem no Seu Bolso
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a opção ideal para suas necessidades. Comece hoje e proteja seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plano Básico */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Básico</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 97</span>
                <span className="text-gray-600 ml-2">/ mês</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5 modelos de contratos essenciais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Download ilimitado dos contratos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Atualizações gratuitas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suporte por email</span>
                </li>
              </ul>

              <Link 
                href="/assinatura?plano=basico"
                className="block w-full bg-blue-600 text-white text-center py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Assinar Plano Básico
              </Link>
            </div>
          </div>

          {/* Plano Profissional - MAIS POPULAR */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-600 overflow-hidden relative transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-600 text-white text-center py-3">
              <span className="font-bold text-lg">🏆 MAIS POPULAR</span>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Profissional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 197</span>
                <span className="text-gray-600 ml-2">/ mês</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Todos os 12 modelos de contratos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Download ilimitado</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Atualizações gratuitas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consultoria 15min/mês</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suporte prioritário</span>
                </li>
              </ul>

              <Link 
                href="/assinatura?plano=profissional"
                className="block w-full bg-blue-600 text-white text-center py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
              >
                Assinar Plano Profissional
              </Link>
            </div>
          </div>

          {/* Plano Empresarial */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Empresarial</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 497</span>
                <span className="text-gray-600 ml-2">/ mês</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Todos os modelos de contratos + novos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Download ilimitado para múltiplos usuários</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Atualizações gratuitas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consultoria 1h/mês</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suporte prioritário 24/7</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalização de contratos</span>
                </li>
              </ul>

              <Link 
                href="/assinatura?plano=empresarial"
                className="block w-full bg-blue-600 text-white text-center py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Assinar Plano Empresarial
              </Link>
            </div>
          </div>
        </div>

        {/* Texto de garantia */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            ✅ <strong>Garantia de 7 dias</strong> ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  )
}
