import Header from '../../components/Header'
import Footer from '../../components/Footer'

const steps = [
  {
    number: '1',
    title: 'Escolha o Contrato',
    description: 'Navegue pela nossa biblioteca e selecione o modelo de contrato que atende suas necessidades.',
    icon: '📝'
  },
  {
    number: '2',
    title: 'Personalize com IA',
    description: 'Preencha um formulário simples e nossa IA personaliza o contrato automaticamente.',
    icon: '🤖'
  },
  {
    number: '3',
    title: 'Revise e Ajuste',
    description: 'Revise o contrato gerado e faça ajustes manuais se necessário.',
    icon: '👀'
  },
  {
    number: '4',
    title: 'Download Instantâneo',
    description: 'Faça o download do contrato em Word e PDF. Pronto para usar!',
    icon: '💾'
  }
]

export default function ComoFunciona() {
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Como Funciona
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Em 4 passos simples, você tem um contrato jurídico personalizado e pronto para usar.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais e empresas que já usam nossos contratos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contratos"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Ver Contratos
            </a>
            <a 
              href="/contato"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Fazer uma Pergunta
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
