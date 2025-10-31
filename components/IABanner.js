export default function IABanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🤔 IA vs Advogado Especialista
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            <strong>IA é ótima para rascunhos, mas perigosa para documentos jurídicos.</strong><br/>
            Nossos contratos são criados por humanos especialistas, testados na prática.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-yellow-300 mb-3">⚠️ IA Generativa</h3>
              <ul className="text-left space-y-2 text-sm">
                <li>• Não conhece jurisprudência brasileira</li>
                <li>• Pode incluir cláusulas inválidas</li>
                <li>• Sem responsabilidade legal</li>
                <li>• Desatualizada com leis recentes</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-green-300 mb-3">✅ Nossos Contratos</h3>
              <ul className="text-left space-y-2 text-sm">
                <li>• Criados por advogado especialista</li>
                <li>• Atualizados conforme legislação</li>
                <li>• Testados na prática</li>
                <li>• Suporte e garantia incluídos</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-6 text-sm opacity-90">
            <strong>Segurança jurídica não é lugar para experimentos.</strong> Invista em contratos testados.
          </p>
        </div>
      </div>
    </section>
  )
}
