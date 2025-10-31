export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Contratos Jurídicos
            <span className="block text-yellow-300">Prontos em 5 Minutos</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Modelos de <strong>contratos prontos</strong> desenvolvidos por advogados. 
            Personalize com IA e <strong>evite custos altos</strong> com assessoria tradicional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#planos"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors font-bold text-lg"
            >
              📝 Ver Modelos de Contratos
            </a>
            <a 
              href="/contratos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              🤖 Personalizar com IA
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-blue-600"></div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-blue-600"></div>
                <div className="w-8 h-8 bg-red-400 rounded-full border-2 border-blue-600"></div>
              </div>
              <span>+500 contratos vendidos</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-300 text-2xl mr-2">★★★★★</span>
              <span>4.9/5 - Avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
