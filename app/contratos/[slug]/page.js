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
  // NOVOS CONTRATOS ADICIONADOS A PARTIR DAQUI
  'locacao-residencial': {
    id: 7,
    nome: "Contrato de Locação Residencial",
    preco: 87,
    descricao: "Para alugar imóveis residenciais com segurança jurídica",
    beneficios: [
      "Cláusulas de garantia (fiador, caução, seguro)",
      "Reajuste conforme IGPM", 
      "Multas por atraso e danos",
      "Direitos e deveres de locador/locatário",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'compra-venda': {
    id: 8,
    nome: "Contrato de Compra e Venda",
    preco: 77,
    descricao: "Para transações comerciais de produtos, serviços ou imóveis",
    beneficios: [
      "Especificação detalhada do bem",
      "Condições de pagamento flexíveis",
      "Prazos de entrega e responsabilidades", 
      "Garantias e assistência técnica",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'consultoria': {
    id: 9,
    nome: "Contrato de Consultoria",
    preco: 117,
    descricao: "Ideal para consultores e empresas de consultoria especializada",
    beneficios: [
      "Escopo de serviços bem definido",
      "Confidencialidade de informações",
      "Metodologia e prazos de entrega",
      "Pagamento por resultados ou horas",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'franquia': {
    id: 10,
    nome: "Contrato de Franquia", 
    preco: 197,
    descricao: "Para estabelecer negócios em modelo de franquia com segurança",
    beneficios: [
      "Direitos de uso da marca e know-how",
      "Taxas de franquia e royalties",
      "Suporte técnico ao franqueado",
      "Área de atuação e exclusividade",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'prestacao-servicos-digitais': {
    id: 11,
    nome: "Contrato de Prestação de Serviços Digitais",
    preco: 107,
    descricao: "Específico para serviços online, marketing digital e TI", 
    beneficios: [
      "Jurisdição e foro digital",
      "Proteção de dados (LGPD)",
      "Metas e KPIs mensuráveis",
      "Pagamentos via plataformas digitais",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'comodato': {
    id: 12,
    nome: "Contrato de Comodato",
    preco: 57,
    descricao: "Para empréstimo gratuito de bens móveis ou imóveis",
    beneficios: [
      "Empréstimo gratuito de bens",
      "Prazos e condições de uso",
      "Responsabilidade por conservação", 
      "Devolução em mesmo estado",
      "Download instantâneo",
      "Suporte por email"
    ]
  },
  'representacao-comercial': {
    id: 13,
    nome: "Contrato de Representação Comercial",
    preco: 137,
    descricao: "Para representantes comerciais e agentes autônomos",
    beneficios: [
      "Comissões e percentuais de venda",
      "Área de atuação exclusiva",
      "Despesas e reembolsos",
      "Exclusividade e não-concorrência",
      "Download instantâneo", 
      "Suporte por email"
    ]
  }
}

export default function ContratoPage() {
  const params = useParams()
  const slug = params.slug
  const contrato = contratosData[slug]

  // DEBUG: Adicione isto temporariamente para verificar
  console.log('Slug recebido:', slug)
  console.log('Contrato encontrado:', contrato)
  console.log('Todos os slugs disponíveis:', Object.keys(contratosData))

  if (!contrato) {
    return (
      <main>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contrato não encontrado</h1>
            <p className="text-gray-600 mb-2">Slug: {slug}</p>
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
            {/* Formulário de Checkout */}
<div>
  {/* 🚨 AVISO URGENTE - COLE ISSO ANTES DO FORMULÁRIO 🚨 */}
  <div style={{
    background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
    border: '2px solid #f39c12',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '25px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(243, 156, 18, 0.1)'
  }}>
    <div style={{
      background: 'white',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px'
    }}>
      <p style={{
        color: '#d35400',
        margin: '0 0 10px 0',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        ⚠️ PASSO IMPORTANTE APÓS O PAGAMENTO
      </p>
      <p style={{ color: '#856404', margin: 0, fontSize: '16px' }}>
        1. Anote seu número do pedido<br />
        2. Envie um WhatsApp para nosso suporte<br />
        3. Informe seu nome e email<br />
        4. Receba seu contrato em até 24h
      </p>
    </div>
    
    <a 
      href="https://wa.me/5571986482241?text=Olá! Acabei de comprar um contrato. Meu nome é: [SEU NOME] e email: [SEU EMAIL]"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        background: '#25D366',
        color: 'white',
        padding: '12px 25px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px',
        border: '2px solid white',
        boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)',
        transition: 'all 0.3s'
      }}
      onMouseOver="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 15px rgba(37, 211, 102, 0.4)';"
      onMouseOut="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 10px rgba(37, 211, 102, 0.3)';"
    >
      📱 Enviar WhatsApp Agora
    </a>
    
    <p style={{ color: '#7d6608', margin: '15px 0 0 0', fontSize: '14px' }}>
      <strong>WhatsApp:</strong> (71) 98648-2241<br />
      <strong>Horário:</strong> Segunda a Sexta, 9h às 18h
    </p>
  </div>

  <CheckoutForm contrato={contrato} />
</div>
      </section>

      <Footer />
    </main>
  )
}
