import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Sobre() {
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Sobre o Contratos Expresso
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Conheça nossa missão de democratizar o acesso a documentos jurídicos de qualidade.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Nossa Missão</h2>
            <p>
              O Contratos Expresso nasceu da necessidade de oferecer <strong>documentos jurídicos acessíveis</strong> 
              para pequenas empresas, empreendedores e profissionais autônomos. Acreditamos que a 
              <strong> segurança jurídica não deve ser um luxo</strong>, mas um direito de todos.
            </p>

            <h2>Por Que Escolher o Contratos Expresso?</h2>
            <ul>
              <li>
                <strong>Expertise Jurídica:</strong> Nossos contratos são desenvolvidos 
                por advogados especialistas com mais de 10 anos de experiência.
              </li>
              <li>
                <strong>Atualização Constante:</strong> Mantemos todos os documentos 
                atualizados com as últimas mudanças na legislação brasileira.
              </li>
              <li>
                <strong>Praticidade:</strong> Modelos prontos para usar, com 
                personalização rápida através de IA.
              </li>
              <li>
                <strong>Economia:</strong> Evite custos altos com assessoria jurídica 
                tradicional para documentos padrão.
              </li>
            </ul>

            <h2>Nossa Equipe</h2>
            <p>
              Contamos com uma equipe de <strong>advogados especializados</strong> em diferentes áreas 
              do direito, garantindo que cada contrato seja tecnicamente sólido e 
              adequado à realidade do mercado brasileiro.
            </p>

            <div className="bg-blue-50 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📈 Mais de 1.000 Contratos Emitidos
              </h3>
              <p>
                Já ajudamos centenas de profissionais e empresas a formalizar seus 
                negócios com segurança e confiança.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
