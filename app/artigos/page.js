import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

// Dados dos 13 artigos - UM PARA CADA MODELO DE CONTRATO
const artigos = [
  {
    slug: "contrato-prestacao-servicos",
    titulo: "Contrato de Prestação de Serviços: Guia Definitivo 2025",
    descricao: "Aprenda a elaborar um contrato de prestação de serviços que proteja seu negócio contra inadimplência e descumprimento.",
    imagem: "/images/artigos/contrato-prestacao-servicos.jpg",
    data: "18 de Agosto, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "16 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-trabalho-pj", 
    titulo: "Contrato de Trabalho PJ: Como Evitar Vínculo Empregatício em 2025",
    descricao: "Estratégias comprovadas para contratar profissionais PJ com segurança jurídica total.",
    imagem: "/images/artigos/contrato-trabalho-pj.jpg",
    data: "22 de Agosto, 2025",
    categoria: "Contratos de Trabalho",
    tempoLeitura: "18 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "termo-confidencialidade-nda",
    titulo: "NDA (Termo de Confidencialidade): Proteção Máxima de Segredos", 
    descricao: "Como usar um NDA para proteger suas ideias, fórmulas e informações estratégicas.",
    imagem: "/images/artigos/termo-confidencialidade.jpg",
    data: "26 de Agosto, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "14 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-parceria-comercial",
    titulo: "Contrato de Parceria Comercial: Estruturando Sociedades de Sucesso",
    descricao: "Modelos para formalizar parcerias empresariais com divisão clara de lucros e responsabilidades.",
    imagem: "/images/artigos/contrato-parceria-comercial.jpg",
    data: "30 de Agosto, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "20 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-desenvolvimento-software",
    titulo: "Contrato de Desenvolvimento de Software: Proteção Integral em 2025",
    descricao: "Cláusulas essenciais para contratos de TI, apps e sistemas com foco em propriedade intelectual.",
    imagem: "/images/artigos/contrato-desenvolvimento-software.jpg",
    data: "3 de Setembro, 2025",
    categoria: "Contratos de Tecnologia",
    tempoLeitura: "22 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "pacote-completo-contratos",
    titulo: "Pacote Completo de Contratos: Economia Inteligente para Empresas",
    descricao: "Por que adquirir múltiplos contratos pode ser a melhor decisão estratégica para seu negócio.",
    imagem: "/images/artigos/pacote-completo.jpg",
    data: "7 de Setembro, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "12 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-locacao-residencial",
    titulo: "Contrato de Locação Residencial: Guia Completo do Locador e Locatário",
    descricao: "Tudo sobre aluguel de imóveis: garantias, reajustes, direitos e deveres atualizados para 2025.",
    imagem: "/images/artigos/contrato-locacao-residencial.jpg",
    data: "12 de Setembro, 2025",
    categoria: "Locação e Imóveis", 
    tempoLeitura: "24 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-compra-venda",
    titulo: "Contrato de Compra e Venda: Segurança em Transações Comerciais",
    descricao: "Modelos para venda de produtos, serviços e imóveis com garantias e prazos bem definidos.",
    imagem: "/images/artigos/contrato-compra-venda.jpg",
    data: "17 de Setembro, 2025",
    categoria: "Contratos Comerciais",
    tempoLeitura: "16 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-consultoria",
    titulo: "Contrato de Consultoria: Estruturando Serviços de Assessoria",
    descricao: "Como formalizar serviços de consultoria com definição clara de escopo, metas e honorários.",
    imagem: "/images/artigos/contrato-consultoria.jpg",
    data: "22 de Setembro, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "18 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-franquia",
    titulo: "Contrato de Franquia: Expandindo Negócios com Segurança Jurídica",
    descricao: "Elementos essenciais para franqueadores e franqueados em operações de franchising.",
    imagem: "/images/artigos/contrato-franquia.jpg",
    data: "27 de Setembro, 2025",
    categoria: "Contratos Empresariais",
    tempoLeitura: "26 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-servicos-digitais",
    titulo: "Contrato de Prestação de Serviços Digitais: Jurisdição e LGPD",
    descricao: "Adaptações necessárias para contratos de marketing digital, TI e serviços online.",
    imagem: "/images/artigos/contrato-servicos-digitais.jpg",
    data: "2 de Outubro, 2025",
    categoria: "Contratos de Tecnologia",
    tempoLeitura: "20 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-comodato",
    titulo: "Contrato de Comodato: Empréstimo Gratuito com Proteção Jurídica",
    descricao: "Como formalizar empréstimos de bens sem custo, preservando direitos do proprietário.",
    imagem: "/images/artigos/contrato-comodato.jpg",
    data: "7 de Outubro, 2025",
    categoria: "Contratos Diversos",
    tempoLeitura: "14 min de leitura",
    autor: "Dr. Reginaldo Oliveira"
  },
  {
    slug: "contrato-representacao-comercial",
    titulo: "Contrato de Representação Comercial: Comissões e Exclusividade",
    descricao: "Modelos para representantes comerciais com regras claras de atuação e remuneração.",
    imagem: "/images/artigos/contrato-representacao-comercial.jpg",
    data: "12 de Outubro, 2025",
    categoria: "Contratos Comerciais",
    tempoLeitura: "18 min de leitura",
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
            Aprenda com Dr. Reginaldo Oliveira sobre contratos, leis e melhores práticas para proteger seu negócio.
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
