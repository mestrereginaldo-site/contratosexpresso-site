import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

// Dados dos artigos - vamos começar com 6 artigos fundamentais
const artigos = [
  {
    slug: "contrato-pj-vs-clt",
    titulo: "Contrato PJ vs CLT: Qual a Melhor Escolha em 2024?",
    descricao: "Guia completo para entender as diferenças e escolher o melhor tipo de contratação para sua empresa.",
    imagem: "/images/artigos/contrato-pj-clt.jpg",
    data: "15 de Janeiro, 2024",
    categoria: "Contratos de Trabalho",
    tempoLeitura: "5 min de leitura"
  },
  {
    slug: "5-erros-contratos-trabalho", 
    titulo: "5 Erros Fatais em Contratos de Trabalho que Custam Caro",
    descricao: "Evite esses erros comuns que podem levar a processos trabalhistas e prejuízos financeiros.",
    imagem: "/images/artigos/erros-contratos-trabalho.jpg",
    data: "12 de Janeiro, 2024",
    categoria: "Contratos de Trabalho",
    tempoLeitura: "4 min de leitura"
  },
  {
    slug: "contrato-social-passo-a-passo",
    titulo: "Contrato Social: Passo a Passo para Abrir sua Empresa", 
    descricao: "Aprenda como elaborar um contrato social correto e evite problemas futuros na sua empresa.",
    imagem: "/images/artigos/contrato-social.jpg",
    data: "10 de Janeiro, 2024",
    categoria: "Contratos Empresariais",
    tempoLeitura: "6 min de leitura"
  },
  {
    slug: "contrato-locacao-10-clausulas",
    titulo: "Contrato de Locação: 10 Cláusulas que Você Precisa Incluir",
    descricao: "Proteja seu imóvel e evite problemas com inquilinos com essas cláusulas essenciais.",
    imagem: "/images/artigos/contrato-locacao.jpg",
    data: "8 de Janeiro, 2024",
    categoria: "Locação e Imóveis", 
    tempoLeitura: "5 min de leitura"
  },
  {
    slug: "lgpd-na-pratica",
    titulo: "LGPD na Prática: O que Sua Empresa Precisa Fazer",
    descricao: "Descubra como adaptar sua empresa à Lei Geral de Proteção de Dados de forma simples e eficaz.",
    imagem: "/images/artigos/lgpd.jpg",
    data: "5 de Janeiro, 2024", 
    categoria: "Dicas Jurídicas",
    tempoLeitura: "4 min de leitura"
  },
  {
    slug: "contrato-internet-riscos",
    titulo: "Posso Usar Contrato da Internet? Riscos e Alternativas",
    descricao: "Entenda os perigos de usar contratos baixados da internet e como se proteger.",
    imagem: "/images/artigos/contrato-internet.jpg",
    data: "3 de Janeiro, 2024",
    categoria: "Perguntas Frequentes",
    tempoLeitura: "3 min de leitura"
  }
]

export default function Artigos() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Artigos e Conteúdo Jurídico
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Aprenda com especialistas sobre contratos, leis e melhores práticas para proteger seu negócio.
          </p>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col">
                {/* Imagem do Artigo */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                      {artigo.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 text-sm font-medium">
                      {artigo.categoria}
                    </span>
                    <span className="text-gray-500 text-sm">{artigo.tempoLeitura}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {artigo.titulo}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {artigo.descricao}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-gray-500 text-sm">{artigo.data}</span>
                    <Link 
                      href={`/artigos/${artigo.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Ler artigo →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
