import Link from 'next/link';

export const metadata = {
  title: 'Modelos de Contratos Prontos - Download Imediato | Contratos Expresso',
  description: 'Contratos jurídicos prontos para usar desenvolvidos por advogados. Contrato de Prestação de Serviços, Trabalho PJ, NDA, Parceria e mais. Baixe em 5 minutos.',
  keywords: 'contratos prontos, modelo contrato, contrato prestação serviços, contrato trabalho PJ, NDA, contrato parceria, contrato desenvolvimento software, contrato locação, contrato compra venda, contrato consultoria, contrato franquia, contrato comodato, contrato representação comercial',
}

export default function ContratosPage() {
  const contratos = [
    // CONTRATOS ORIGINAIS (6)
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
      preco: 127,
      destaque: '',
      caracteristicas: [
        'Definição clara de responsabilidades',
        'Divisão de lucros e prejuízos',
        'Cláusulas de saída da sociedade',
        'Proteção legal para todos os sócios'
      ]
    },
    {
      id: 5,
      slug: 'contrato-desenvolvimento-software',
      nome: 'Contrato de Desenvolvimento de Software',
      descricao: 'Específico para projetos de tecnologia e desenvolvimento',
      preco: 147,
      destaque: 'MAIS VENDIDO',
      caracteristicas: [
        'Especificações técnicas detalhadas',
        'Prazos de entrega e milestones',
        'Cláusulas de propriedade intelectual',
        'Suporte e manutenção pós-entrega'
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
        '5 contratos profissionais',
        'Economize R$ 238',
        'Atualizações gratuitas por 1 ano',
        'Suporte jurídico prioritário'
      ]
    },

    // NOVOS CONTRATOS BASEADOS EM PESQUISA DE MERCADO (6)
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Modelos de Contratos Prontos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contratos jurídicos desenvolvidos por advogados especialistas. 
            Baixe, personalize e use em menos de 5 minutos.
          </p>
        </div>

        {/* Grid de Contratos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {contratos.map((contrato) => (
            <div 
              key={contrato.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Destaque */}
              {contrato.destaque && (
                <div className="bg-blue-600 text-white text-center py-1 px-3">
                  <span className="font-semibold text-xs">{contrato.destaque}</span>
                </div>
              )}
              
              <div className="p-4 flex-grow">
                {/* Nome do Contrato */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {contrato.nome}
                </h3>
                
                {/* Descrição */}
                <p className="text-gray-600 mb-3 text-xs leading-relaxed line-clamp-2">
                  {contrato.descricao}
                </p>

                {/* Preço */}
                <div className="mb-3">
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {contrato.preco}
                  </span>
                  <span className="text-gray-500 ml-1 text-sm">uma vez</span>
                </div>

                {/* Características */}
                <ul className="space-y-1 mb-4">
                  {contrato.caracteristicas.slice(0, 3).map((caracteristica, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 text-xs">{caracteristica}</span>
                    </li>
                  ))}
                  {contrato.caracteristicas.length > 3 && (
                    <li className="text-xs text-gray-500">
                      + {contrato.caracteristicas.length - 3} mais benefícios
                    </li>
                  )}
                </ul>
              </div>

              {/* Botão Comprar */}
              <div className="p-4 pt-0">
                <Link 
                  href={`/contratos/${contrato.slug}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                >
                  Comprar - R$ {contrato.preco}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Contador de Contratos */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 rounded-full px-6 py-3">
            <p className="text-blue-800 font-semibold">
              🎉 <span className="text-lg">{contratos.length}</span> modelos de contratos disponíveis
            </p>
          </div>
        </div>

        {/* Rodapé Informativo */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Por que escolher nossos contratos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">✅ Desenvolvido por Advogados</h3>
                <p>Todos os contratos são criados e revisados por especialistas jurídicos</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">⚡ Download Imediato</h3>
                <p>Receba o contrato em Word e PDF logo após a confirmação do pagamento</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛡️ Atualizações Gratuitas</h3>
                <p>Receba versões atualizadas conforme mudanças na legislação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
