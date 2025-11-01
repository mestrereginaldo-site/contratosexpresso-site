import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

// Dados dos 13 artigos - ATUALIZADO COM OS NOVOS SLUGS
const artigos = [
  {
    slug: "contrato-prestacao-servicos",
    titulo: "Contrato de Prestação de Serviços 2025: Análise Jurídica Completa",
    descricao: "Análise técnica aprofundada sobre contratos de prestação de serviços com mais de 50 cláusulas essenciais e jurisprudência atualizada.",
    imagem: "/images/artigos/contrato-prestacao-servicos.jpg",
    data: "18 de Agosto, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "45 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-trabalho-pj",
    titulo: "Contrato de Trabalho PJ 2025: Guia Completo para Evitar Vínculo Empregatício",
    descricao: "Análise detalhada com jurisprudência atualizada do TST e estratégias comprovadas para contratação PJ segura.",
    imagem: "/images/artigos/contrato-trabalho-pj.jpg",
    data: "22 de Agosto, 2025",
    categoria: "Contratos de Trabalho",
    tempoLeitura: "38 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "termo-confidencialidade-nda",
    titulo: "Termo de Confidencialidade (NDA) 2025: Proteção Avançada de Segredos",
    descricao: "Guia completo sobre NDAs com análise de mais de 100 cláusulas e estratégias de proteção em ambientes digitais.",
    imagem: "/images/artigos/termo-confidencialidade.jpg",
    data: "26 de Agosto, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "42 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-parceria-comercial",
    titulo: "Contrato de Parceria Comercial 2025: Estruturando Sociedades Estratégicas",
    descricao: "Guia completo para formalização de parcerias empresariais com análise de casos reais e mecanismos de governança.",
    imagem: "/images/artigos/contrato-parceria-comercial.jpg",
    data: "30 de Agosto, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "40 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-desenvolvimento-software",
    titulo: "Contrato de Desenvolvimento de Software 2025: Proteção Integral de IP",
    descricao: "Análise técnica completa com foco em proteção de propriedade intelectual e gestão de riscos tecnológicos.",
    imagem: "/images/artigos/contrato-desenvolvimento-software.jpg",
    data: "3 de Setembro, 2025",
    categoria: "Contratos de Tecnologia",
    tempoLeitura: "48 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "pacote-completo-contratos",
    titulo: "Pacote Completo de Contratos 2025: Estratégia Inteligente",
    descricao: "Análise estratégica sobre aquisição de múltiplos contratos como ferramenta de gestão de riscos e otimização de custos.",
    imagem: "/images/artigos/pacote-completo.jpg",
    data: "7 de Setembro, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "35 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-locacao-residencial",
    titulo: "Contrato de Locação Residencial 2025: Guia Completo",
    descricao: "Análise detalhada da Lei do Inquilinato 2025 e estratégias para proteger patrimônio e direitos em relações locatícias.",
    imagem: "/images/artigos/contrato-locacao-residencial.jpg",
    data: "12 de Setembro, 2025",
    categoria: "Locação e Imóveis",
    tempoLeitura: "50 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-compra-venda",
    titulo: "Contrato de Compra e Venda 2025: Proteção Integral",
    descricao: "Guia completo para transações comerciais com foco em due diligence, garantias contratuais e proteção contra inadimplemento.",
    imagem: "/images/artigos/contrato-compra-venda.jpg",
    data: "17 de Setembro, 2025",
    categoria: "Contratos Comerciais",
    tempoLeitura: "44 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-consultoria",
    titulo: "Contrato de Consultoria 2025: Estruturando Serviços",
    descricao: "Análise completa sobre contratos de consultoria com foco em definição de escopo e proteção de propriedade intelectual.",
    imagem: "/images/artigos/contrato-consultoria.jpg",
    data: "22 de Setembro, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "39 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-franquia",
    titulo: "Contrato de Franquia 2025: Expansão Segura",
    descricao: "Guia completo para franchising com análise de jurisprudência internacional e proteção de propriedade intelectual.",
    imagem: "/images/artigos/contrato-franquia.jpg",
    data: "27 de Setembro, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "52 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-servicos-digitais",
    titulo: "Contrato de Serviços Digitais 2025: Jurisdição Internacional",
    descricao: "Análise técnica sobre contratos digitais com foco em compliance internacional, cybersecurity e proteção de dados.",
    imagem: "/images/artigos/contrato-servicos-digitais.jpg",
    data: "2 de Outubro, 2025",
    categoria: "Contratos de Tecnologia",
    tempoLeitura: "46 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-comodato",
    titulo: "Contrato de Comodato 2025: Empréstimo Gratuito com Proteção",
    descricao: "Guia completo para empréstimos gratuitos com análise de responsabilidades e proteção do patrimônio.",
    imagem: "/images/artigos/contrato-comodato.jpg",
    data: "7 de Outubro, 2025",
    categoria: "Contratos Diversos",
    tempoLeitura: "36 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-representacao-comercial",
    titulo: "Contrato de Representação Comercial 2025: Estruturando Relações",
    descricao: "Análise completa sobre contratos de representação com foco em comissões, exclusividade e proteção de clientela.",
    imagem: "/images/artigos/contrato-representacao-comercial.jpg",
    data: "12 de Outubro, 2025",
    categoria: "Contratos Comerciais",
    tempoLeitura: "41 min de leitura",
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
            Conteúdo técnico especializado desenvolvido por Dr. Reginaldo Oliveira para proteger seu negócio com conhecimento jurídico atualizado.
          </p>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
