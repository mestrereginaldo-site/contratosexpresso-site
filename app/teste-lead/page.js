import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LeadMagnetCTA from '../../components/LeadMagnet/LeadMagnetCTA'

export default function TesteLead() {
  return (
    <main>
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Página de Teste do Lead Magnet</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Artigo de Exemplo</h2>
            <p className="text-gray-700 mb-4">
              Este é um artigo de exemplo para testar o componente de lead magnet.
              Aqui você teria o conteúdo completo do artigo...
            </p>
            <p className="text-gray-700">
              E no final do artigo, o componente de lead magnet aparece automaticamente.
            </p>
          </div>

          {/* AQUI É ONDE O COMPONENTE APARECE */}
          <LeadMagnetCTA />
        </div>
      </div>

      <Footer />
    </main>
  )
}
