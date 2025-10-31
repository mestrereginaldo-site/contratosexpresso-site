import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

const contratos = [
  {
    id: 1,
    nome: "Contrato de Prestação de Serviços",
    preco: 97,
    descricao: "Ideal para freelancers e empresas que contratam serviços pontuais",
    beneficios: [
      "Proteção contra inadimplência",
      "Cláusulas de confidencialidade", 
      "Definição de prazos e entregas",
      "Multas por descumprimento"
    ],
    popular: true,
    slug: "prestacao-servicos"
  },
  {
    id: 2,
    nome: "Contrato de Trabalho PJ",
    preco: 97,
    descricao: "Para contratar profissionais como Pessoa Jurídica com segurança",
    beneficios: [
      "Evite vínculo empregatício",
      "Definição clara de atividades",
      "Proteção para ambas as partes",
      "Atualizado conforme legislação"
    ],
    popular: true,
    slug: "trabalho-pj"
  },
  {
    id: 3,
    nome: "Termo de Confidencialidade (NDA)",
    preco: 67,
    descricao: "Proteja suas ideias e informações comerciais",
    beneficios: [
      "Sigilo absoluto de informações",
      "Penalidades por violação",
      "Validade personalizável",
      "Aplicável a funcionários e parceiros"
    ],
    popular: false,
    slug: "termo-confidencialidade"
  },
  {
    id: 4,
    nome: "Contrato de Parceria Comercial",
    preco: 147,
    descricao: "Para formalizar sociedade entre empresas ou profissionais",
    beneficios: [
      "Definição de contribuições",
      "Distribuição de lucros e perdas",
      "Regras de saída da sociedade",
      "Solução de conflitos"
    ],
    popular: false,
    slug: "parceria-comercial"
  },
  {
    id: 5,
    nome: "Contrato de Desenvolvimento de Software",
    preco: 197,
    descricao: "Específico para projetos de tecnologia e desenvolvimento",
    beneficios: [
      "Definição de escopo e entregas",
      "Cláusulas de propriedade intelectual",
      "Prazos e milestones",
      "Suporte pós-entrega"
    ],
    popular: false,
    slug: "desenvolvimento-software"
  },
  {
    id: 6,
    nome: "Pacote Completo (5 Contratos)",
    preco: 297,
    descricao: "Todos os contratos essenciais com desconto especial",
    beneficios: [
      "5 modelos diferentes",
      "Economia de R$ 200",
      "Personalização individual",
      "Suporte prioritário"
    ],
    popular: true,
    slug: "pacote-completo"
  }
]

export default function Contratos() {
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Modelos de Contratos Prontos
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Desenvolvidos por advogado especialista. Personalize em minutos e evite problemas jurídicos caros.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {contratos.map((contrato) => (
              <div key={contrato.id} className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-all flex flex-col">
                {contrato.popular && (
                  <div className="bg-yellow-400 text-blue-900 text-center py-2 font-bold text-sm">
                    MAIS VENDIDO
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                    {contrato.nome}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">
                    {contrato.descricao}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-2xl md:text-3xl font-bold text-blue-600">R$ {contrato.preco}</span>
                    <span className="text-gray-500 ml-2 text-sm">uma vez</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {contrato.beneficios.map((beneficio, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {beneficio}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4">
                    <Link 
                      href={`/contratos/${contrato.slug}`}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm text-center block"
                    >
                      Comprar Agora - R$ {contrato.preco}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
