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
  },
  'contrato-social': {
    id: 7,
    nome: "Contrato Social",
    preco: 247,
    descricao: "Para formalizar a abertura da sua empresa com segurança jurídica",
    beneficios: [
      "Modelo personalizável",
      "Inclusão de cláusulas necessárias",
      "Orientação sobre enquadramento",
      "Atualizado conforme a legislação",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-locacao': {
    id: 8,
    nome: "Contrato de Locação",
    preco: 87,
    descricao: "Para alugar imóveis residenciais ou comerciais",
    beneficios: [
      "Proteção para locador e locatário",
      "Cláusulas de manutenção",
      "Definição de reajustes",
      "Multas e penalidades",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-compra-venda': {
    id: 9,
    nome: "Contrato de Compra e Venda",
    preco: 127,
    descricao: "Para transações de compra e venda de bens móveis ou imóveis",
    beneficios: [
      "Segurança na transação",
      "Definição de condições de pagamento",
      "Cláusulas de entrega",
      "Garantias e responsabilidades",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-trabalho-clt': {
    id: 10,
    nome: "Contrato de Trabalho CLT",
    preco: 107,
    descricao: "Para contratação de funcionários regidos pela CLT",
    beneficios: [
      "Conforme legislação trabalhista",
      "Cláusulas de experiência",
      "Definição de salário e benefícios",
      "Jornada de trabalho",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-consultoria': {
    id: 11,
    nome: "Contrato de Consultoria",
    preco: 117,
    descricao: "Ideal para consultores e especialistas que prestam serviços de assessoria",
    beneficios: [
      "Definição do escopo da consultoria",
      "Cláusulas de não concorrência",
      "Confidencialidade das informações",
      "Forma de pagamento e honorários",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-franquia': {
    id: 12,
    nome: "Contrato de Franquia",
    preco: 347,
    descricao: "Para estabelecer relações de franquia entre franqueador e franqueado",
    beneficios: [
      "Direitos e obrigações das partes",
      "Uso da marca e know-how",
      "Taxas e royalties",
      "Território de atuação",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-licenciamento': {
    id: 13,
    nome: "Contrato de Licenciamento",
    preco: 187,
    descricao: "Para licenciar o uso de marcas, patentes e propriedade intelectual",
    beneficios: [
      "Direitos de uso da propriedade intelectual",
      "Remuneração e royalties",
      "Prazo e território",
      "Exclusividade ou não exclusividade",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-doacao': {
    id: 14,
    nome: "Contrato de Doação",
    preco: 77,
    descricao: "Para formalizar doações de bens móveis ou imóveis",
    beneficios: [
      "Formalização da doação",
      "Cláusulas de irrevogabilidade",
      "Aceitação do donatário",
      "Isenção de responsabilidade",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-comodato': {
    id: 15,
    nome: "Contrato de Comodato",
    preco: 67,
    descricao: "Para empréstimo gratuito de bens móveis ou imóveis",
    beneficios: [
      "Empréstimo gratuito de bens",
      "Obrigações do comodatário",
      "Prazo de devolução",
      "Responsabilidade por conservação",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-transporte': {
    id: 16,
    nome: "Contrato de Transporte",
    preco: 137,
    descricao: "Para contratar serviços de transporte de cargas ou pessoas",
    beneficios: [
      "Definição do objeto do transporte",
      "Responsabilidade do transportador",
      "Prazo e local de entrega",
      "Valor e forma de pagamento",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-seguro': {
    id: 17,
    nome: "Contrato de Seguro",
    preco: 157,
    descricao: "Para estabelecer relações entre seguradoras e segurados",
    beneficios: [
      "Coberturas e riscos",
      "Prêmios e indenizações",
      "Exclusões de cobertura",
      "Prazo e vigência",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-construcao': {
    id: 18,
    nome: "Contrato de Construção Civil",
    preco: 227,
    descricao: "Para obras e serviços de engenharia e construção",
    beneficios: [
      "Escopo da obra e especificações",
      "Prazo de execução",
      "Forma de pagamento",
      "Garantias e responsabilidades",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-manutencao': {
    id: 19,
    nome: "Contrato de Manutenção",
    preco: 97,
    descricao: "Para serviços de manutenção preventiva e corretiva",
    beneficios: [
      "Escopo dos serviços de manutenção",
      "Periodicidade e frequência",
      "Valor e forma de pagamento",
      "Prazo de resposta para emergências",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'contrato-publicidade': {
    id: 20,
    nome: "Contrato de Publicidade",
    preco: 167,
    descricao: "Para contratação de serviços de publicidade e propaganda",
    beneficios: [
      "Definição da campanha publicitária",
      "Mídias e veículos",
      "Valores e comissões",
      "Prazo de veiculação",
      "Download instantâneo",
      "Suporte por email"
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
