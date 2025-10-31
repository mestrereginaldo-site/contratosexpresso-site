'use client'
import { useParams } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CheckoutForm from '../../../components/CheckoutForm'

// Dados dos contratos (em um caso real, viria de um banco de dados)
const contratosData = {
  'prestacao-servicos': {
    id: 1,
    nome: "Contrato de Prestação de Serviços",
    preco: 97,
    descricao: "Ideal para freelancers e empresas que contratam serviços pontuais",
    beneficios: [
      "Proteção contra inadimplência",
      "Cláusulas de confidencialidade", 
      "Definição de prazos e entregas",
      "Multas por descumprimento",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'trabalho-pj': {
    id: 2,
    nome: "Contrato de Trabalho PJ",
    preco: 97,
    descricao: "Para contratar profissionais como Pessoa Jurídica com segurança",
    beneficios: [
      "Evite vínculo empregatício",
      "Definição clara de atividades",
      "Proteção para ambas as partes",
      "Atualizado conforme legislação",
      "Download instantâneo", 
      "Suporte por email"
    ]
  },
  'termo-confidencialidade': {
    id: 3,
    nome: "Termo de Confidencialidade (NDA)",
    preco: 67,
    descricao: "Proteja suas ideias e informações comerciais",
    beneficios: [
      "Sigilo absoluto de informações",
      "Penalidades por violação",
      "Validade personalizável",
      "Aplicável a funcionários e parceiros",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'parceria-comercial': {
    id: 4,
    nome: "Contrato de Parceria Comercial", 
    preco: 147,
    descricao: "Para formalizar sociedade entre empresas ou profissionais",
    beneficios: [
      "Definição de contribuições",
      "Distribuição de lucros e perdas",
      "Regras de saída da sociedade", 
      "Solução de conflitos",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'desenvolvimento-software': {
    id: 5,
    nome: "Contrato de Desenvolvimento de Software",
    preco: 197,
    descricao: "Específico para projetos de tecnologia e desenvolvimento", 
    beneficios: [
      "Definição de escopo e entregas",
      "Cláusulas de propriedade intelectual",
      "Prazos e milestones",
      "Suporte pós-entrega",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'pacote-completo': {
    id: 6,
    nome: "Pacote Completo (5 Contratos)",
    preco: 297,
    descricao: "Todos os contratos essenciais com desconto especial",
    beneficios: [
      "5 modelos diferentes",
      "Economia de R$ 200", 
      "Personalização individual",
      "Suporte prioritário",
      "Download instantâneo",
      "Suporte ilimitado por 30 dias"
    ]
  }
}

export default function ContratoPage() {
  const params = useParams()
  const slug = params.slug
  const contrato = contratosData[slug]

  if (!contrato) {
    return (
      <main>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contrato não encontrado</h1>
            <a href="/contratos" className="text-blue-600 hover:text-blue-800">
              ← Voltar para contratos
            </a>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      
      <section className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações do Contrato */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
                <div className="mb-6">
                  <a href="/contratos" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    ← Voltar para todos os contratos
                  </a>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {contrato.nome}
                </h1>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {contrato.descricao}
                </p>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    R$ {contrato.preco}
                  </div>
                  <div className="text-gray-500">uma vez • Download instantâneo</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {contrato.beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="text-yellow-800 font-medium">Sem contrato adequado, você pode perder até R$ 50.000 em um processo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário de Checkout */}
            <div>
              <CheckoutForm contrato={contrato} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
