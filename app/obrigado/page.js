import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function ObrigadoPage() {
  return (
    <main>
      <Header />
      
      <section className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            {/* Ícone de Sucesso */}
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🎉 Parabéns!
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Seu contrato foi adquirido com <strong>sucesso</strong>!
            </p>

            <div className="bg-white/20 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Próximos Passos</h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
                  <h3 className="font-semibold mb-2">Verifique seu Email</h3>
                  <p className="text-blue-100 text-sm">Enviamos o contrato para seu email em até 2 minutos</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
                  <h3 className="font-semibold mb-2">Personalize</h3>
                  <p className="text-blue-100 text-sm">Preencha os dados específicos do seu negócio</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
                  <h3 className="font-semibold mb-2">Use com Segurança</h3>
                  <p className="text-blue-100 text-sm">Assine e implemente com tranquilidade</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              <Link 
                href="/contratos"
                className="block w-full bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors text-lg"
              >
                📄 Ver Mais Contratos
              </Link>
              
              <Link 
                href="/"
                className="block w-full bg-white/20 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/30 transition-colors"
              >
                🏠 Voltar para Home
              </Link>
            </div>

            <div className="mt-8 text-blue-200 text-sm">
              ⚡ Em caso de dúvidas, entre em contato: contato@contratosexpresso.com
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
