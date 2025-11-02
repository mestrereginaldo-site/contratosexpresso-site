import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function TermosUso() {
  return (
    <main>
      <Header />
      
      <section className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Termos de Uso
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o site ContratosExpresso, você concorda com estes termos de uso.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Serviços Oferecidos</h2>
              <p>
                Oferecemos modelos de contratos jurídicos, artigos especializados e consultoria jurídica. 
                Nossos serviços são fornecidos "como estão" e não substituem consultoria jurídica personalizada.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Limitação de Responsabilidade</h2>
              <p>
                Não nos responsabilizamos por decisões tomadas com base em informações deste site. 
                Recomendamos consultoria jurídica personalizada para casos específicos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo do site é propriedade do ContratosExpresso e está protegido por direitos autorais.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-yellow-900 mb-2">⚠️ Aviso Importante</h3>
                <p className="text-yellow-800">
                  Os modelos de contrato fornecidos são genéricos e podem necessitar de adaptações 
                  para sua situação específica. Recomendamos consultoria jurídica profissional.
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
