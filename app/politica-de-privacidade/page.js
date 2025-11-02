import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function PoliticaPrivacidade() {
  return (
    <main>
      <Header />
      
      <section className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Política de Privacidade
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Coleta de Informações</h2>
              <p>
                Coletamos informações que você nos fornece diretamente, como nome, endereço de e-mail 
                e informações de contato quando você preenche formulários em nosso site.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Uso das Informações</h2>
              <p>
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Fornecer os serviços solicitados</li>
                <li>Enviar comunicações importantes</li>
                <li>Melhorar nossa plataforma</li>
                <li>Entrar em contato para suporte</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Dúvidas?</h3>
                <p className="text-blue-800">
                  Entre em contato conosco através do email:{' '}
                  <a href="mailto:contato@contratosexpresso.com.br" className="text-blue-600 hover:text-blue-800 font-medium">
                    contato@contratosexpresso.com.br
                  </a>
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
