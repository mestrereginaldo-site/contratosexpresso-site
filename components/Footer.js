export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo e descrição */}
          <div className="flex justify-center items-center mb-6">
            <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">ContratosExpresso</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Soluções jurídicas especializadas em contratos.
          </p>

          {/* Links do Footer */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a 
              href="/politica-de-privacidade" 
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Política de Privacidade
            </a>
            
            <span className="text-gray-600">•</span>
            
            <a 
              href="/termos-de-uso" 
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Termos de Uso
            </a>
            
            <span className="text-gray-600">•</span>
            
            <a 
              href="/artigos" 
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Artigos
            </a>
          </div>

          {/* Informações de copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              © {currentYear} ContratosExpresso. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Desenvolvido por advogados especialistas • OAB/SC 57.879
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
