import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

// Dados dos artigos - DATAS ATUALIZADAS PARA 2025
const artigos = [
  {
    slug: "contrato-pj-vs-clt",
    titulo: "Contrato PJ vs CLT: Análise Completa para 2025",
    descricao: "Guia definitivo com as últimas mudanças legislativas para ajudar sua empresa a escolher o melhor tipo de contratação.",
    imagem: "/images/artigos/contrato-pj-clt.jpg",
    data: "25 de Agosto, 2025",
    categoria: "Contratos de Trabalho",
    tempoLeitura: "12 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "5-erros-contratos-trabalho", 
    titulo: "7 Erros Fatais em Contratos de Trabalho que Podem Custar Milhares",
    descricao: "Análise detalhada dos erros mais comuns e caros em contratos trabalhistas com base em jurisprudência recente.",
    imagem: "/images/artigos/erros-contratos-trabalho.jpg",
    data: "2 de Setembro, 2025",
    categoria: "Contratos de Trabalho",
    tempoLeitura: "15 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-social-passo-a-passo",
    titulo: "Contrato Social 2025: Guia Completo para Abrir sua Empresa com Segurança", 
    descricao: "Passo a passo atualizado com as novas exigências legais e estratégias para proteger sócios e negócios.",
    imagem: "/images/artigos/contrato-social.jpg",
    data: "15 de Setembro, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "18 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-locacao-10-clausulas",
    titulo: "Contrato de Locação 2025: 15 Cláusulas Essenciais para Proteger seu Patrimônio",
    descricao: "Guia completo com as cláusulas obrigatórias e estratégicas para locações residenciais e comerciais.",
    imagem: "/images/artigos/contrato-locacao.jpg",
    data: "25 de Setembro, 2025",
    categoria: "Locação e Imóveis", 
    tempoLeitura: "20 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "lgpd-na-pratica",
    titulo: "LGPD 2025: Implementação Prática para Empresas de Todos os Portes",
    descricao: "Guia passo a passo para adequação completa à Lei Geral de Proteção de Dados com foco em resultados práticos.",
    imagem: "/images/artigos/lgpd.jpg",
    data: "5 de Outubro, 2025", 
    categoria: "Dicas Jurídicas",
    tempoLeitura: "25 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-internet-riscos",
    titulo: "Contratos da Internet: Os 12 Riscos Ocultos que Podem Destruir seu Negócio",
    descricao: "Análise técnica dos perigos escondidos em modelos genéricos e estratégias para proteção jurídica eficaz.",
    imagem: "/images/artigos/contrato-internet.jpg",
    data: "15 de Outubro, 2025",
    categoria: "Perguntas Frequentes",
    tempoLeitura: "22 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
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
