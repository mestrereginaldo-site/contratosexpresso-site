import Link from 'next/link';

export const metadata = {
  title: 'Modelos de Contratos Prontos - Download Imediato | Contratos Expresso',
  description: 'Contratos jurídicos prontos para usar desenvolvidos por advogados. Contrato de Prestação de Serviços, Trabalho PJ, NDA, Parceria e mais. Baixe em 5 minutos.',
}

export default function ContratosPage() {
  const contratos = [
    {
      id: 1,
      slug: 'contrato-prestacao-servicos',
      nome: 'Contrato de Prestação de Serviços',
      descricao: 'Ideal para freelancers e empresas que contratam serviços pontuais',
      preco: 97,
      destaque: 'MAIS VENDIDO',
      caracteristicas: [
        'Proteção contra inadimplência',
        'Cláusulas de confidencialidade',
        'Definição de prazos e entregas',
        'Multas por descumprimento'
      ]
    },
    {
      id: 2,
      slug: 'contrato-trabalho-pj',
      nome: 'Contrato de Trabalho PJ',
      descricao: 'Para contratar profissionais como Pessoa Jurídica com segurança',
      preco: 97,
      destaque: 'MAIS VENDIDO',
      caracteristicas: [
        'Evite vínculo empregatício',
        'Definição clara de atividades',
        'Proteção para ambas as partes',
        'Atualizado conforme legislação'
      ]
    },
    {
      id: 3,
      slug: 'termo-confidencialidade-nda',
      nome: 'Termo de Confidencialidade (NDA)',
      descricao: 'Proteja suas ideias e informações comerciais',
      preco: 67,
      destaque: '',
      caracteristicas: [
        'Sigilo absoluto de informações',
        'Penalidades por violação',
        'Validade personalizável',
        'Aplicável a funcionários e parceiros'
      ]
    },
    {
      id: 4,
      slug: 'contrato-parceria-comercial',
      nome: 'Contrato de Parceria Comercial',
      descricao: 'Para formalizar sociedade entre empresas ou profissionais',
      preco: 147,
      destaque: '',
      caracteristicas: [
        'Definição de contribuições',
        'Distribuição de lucros e perdas', 
        'Regras de saída da sociedade',
        'Solução de conflitos'
      ]
    },
    {
      id: 5,
      slug: 'contrato-desenvolvimento-software',
      nome: 'Contrato de Desenvolvimento de Software',
      descricao: 'Específico para projetos de tecnologia e desenvolvimento',
      preco: 197,
      destaque: '',
      caracteristicas: [
        'Definição de escopo e entregas',
        'Cláusulas de propriedade intelectual',
        'Prazos e milestones',
        'Suporte pós-entrega'
      ]
    },
    {
      id: 6,
      slug: 'pacote-completo-contratos',
      nome: 'Pacote Completo (5 Contratos)',
      descricao: 'Todos os contratos essenciais com desconto especial',
      preco: 297,
      destaque: 'MAIS VENDIDO',
      caracteristicas: [
        '5 modelos diferentes',
        'Economia de R$ 200',
        'Personalização individual',
        'Suporte prioritário'
      ]
    },
    // NOVOS CONTRATOS (MANTENDO MESMO ESTILO)
    {
      id: 7,
      slug: 'contrato-locacao-residencial',
      nome: 'Contrato de Locação Residencial',
      descricao: 'Para alugar imóveis residenciais com segurança jurídica',
      preco: 87,
      destaque: '',
      caracteristicas: [
        'Cláusulas de garantia (fiador, caução, seguro)',
        'Reajuste conforme IGPM',
        'Multas por atraso e danos',
        'Direitos e deveres de locador/locatário'
      ]
    },
    {
      id: 8,
      slug: 'contrato-compra-venda',
      nome: 'Contrato de Compra e Venda',
      descricao: 'Para transações comerciais de produtos, serviços ou imóveis',
      preco: 77,
      destaque: '',
      caracteristicas: [
        'Especificação detalhada do bem',
        'Condições de pagamento flexíveis',
        'Prazos de entrega e responsabilidades',
        'Garantias e assistência técnica'
      ]
    },
    {
      id: 9,
      slug: 'contrato-consultoria',
      nome: 'Contrato de Consultoria',
      descricao: 'Ideal para consultores e empresas de consultoria especializada',
      preco: 117,
      destaque: '',
      caracteristicas: [
        'Escopo de serviços bem definido',
        'Confidencialidade de informações',
        'Metodologia e prazos de entrega',
        'Pagamento por resultados ou horas'
      ]
    },
    {
      id: 10,
      slug: 'contrato-franquia',
      nome: 'Contrato de Franquia',
      descricao: 'Para estabelecer negócios em modelo de franquia com segurança',
      preco: 197,
      destaque: '',
      caracteristicas: [
        'Direitos de uso da marca e know-how',
        'Taxas de franquia e royalties',
        'Suporte técnico ao franqueado',
        'Área de atuação e exclusividade'
      ]
    },
    {
      id: 11,
      slug: 'contrato-prestacao-servicos-digitais',
      nome: 'Contrato de Prestação de Serviços Digitais',
      descricao: 'Específico para serviços online, marketing digital e TI',
      preco: 107,
      destaque: '',
      caracteristicas: [
        'Jurisdição e foro digital',
        'Proteção de dados (LGPD)',
        'Metas e KPIs mensuráveis',
        'Pagamentos via plataformas digitais'
      ]
    },
    {
      id: 12,
      slug: 'contrato-comodato',
      nome: 'Contrato de Comodato',
      descricao: 'Para empréstimo gratuito de bens móveis ou imóveis',
      preco: 57,
      destaque: '',
      caracteristicas: [
        'Empréstimo gratuito de bens',
        'Prazos e condições de uso',
        'Responsabilidade por conservação',
        'Devolução em mesmo estado'
      ]
    },
    {
      id: 13,
      slug: 'contrato-representacao-comercial',
      nome: 'Contrato de Representação Comercial',
      descricao: 'Para representantes comerciais e agentes autônomos',
      preco: 137,
      destaque: '',
      caracteristicas: [
        'Comissões e percentuais de venda',
        'Área de atuação exclusiva',
        'Despesas e reembolsos',
        'Exclusividade e não-concorrência'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Modelos de Contratos Prontos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contratos jurídicos desenvolvidos por advogados especialistas. 
            Baixe, personalize e use em menos de 5 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {contratos.map((contrato) => (
            <div 
              key={contrato.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* DESTAQUE AMARELO - RESTAURADO */}
              {contrato.destaque && (
                <div className="bg-yellow-500 text-white text-center py-2 px-4">
                  <span className="font-semibold">{contrato.destaque}</span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {contrato.nome}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {contrato.descricao}
                </p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    R$ {contrato.preco}
                  </span>
                  <span className="text-gray-500 ml-2">uma vez</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {contrato.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/contratos/${contrato.slug}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Comprar Agora - R$ {contrato.preco}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
