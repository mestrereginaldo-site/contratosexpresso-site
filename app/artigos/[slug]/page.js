'use client'
import { useParams } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

// Dados completos dos 13 artigos
const artigosData = {
  'contrato-prestacao-servicos': {
    slug: 'contrato-prestacao-servicos',
    titulo: 'Contrato de Prestação de Serviços: Guia Definitivo 2025',
    descricao: 'Aprenda a elaborar um contrato de prestação de serviços que proteja seu negócio contra inadimplência e descumprimento.',
    conteudo: `
      <p class="lead">O contrato de prestação de serviços é a espinha dorsal de qualquer negócio que oferece expertise técnica, consultoria ou mão de obra especializada. Em 2025, com a economia volátil e a judicialização crescente, ter um contrato robusto não é mais opcional - é questão de sobrevivência empresarial.</p>

      <h2>📊 Panorama Atual do Mercado de Serviços</h2>
      <p>Segundo dados do IBGE 2025, o setor de serviços representa 73% do PIB brasileiro. Porém, 45% das empresas enfrentam problemas com inadimplência, e 30% sofrem com descumprimento contratual. A falta de um contrato adequado é o principal fator.</p>

      <h2>⚖️ Elementos Jurídicos Essenciais</h2>

      <h3>1. Definição Precisa do Objeto</h3>
      <p><strong>Erro comum:</strong> Descrição vaga como "prestação de serviços diversos"</p>
      <p><strong>Solução:</strong> Especificação detalhada de cada atividade, metodologia, entregas e padrões de qualidade</p>

      <h3>2. Cláusulas de Pagamento e Inadimplência</h3>
      <p><strong>Estrutura recomendada:</strong> Entrada de 30%, 40% na entrega parcial, 30% na conclusão</p>
      <p><strong>Multas:</strong> 2% ao mês por atraso, limitada a 20% do valor total</p>

      <h3>3. Prazos e Cronogramas Realistas</h3>
      <p><strong>Técnica SMART:</strong> Prazos Específicos, Mensuráveis, Atingíveis, Relevantes e Temporais</p>
      <p><strong>Buffer de segurança:</strong> Incluir 15-20% de tempo extra para imprevistos</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Nunca inicie qualquer serviço sem contrato assinado. O custo de um bom contrato é insignificante perto do prejuízo de uma relação mal documentada.</p>
      </div>

      <p>Nosso <a href="/contratos/prestacao-servicos" class="text-blue-600 hover:underline">modelo de contrato de prestação de serviços</a> incorpora todas essas estratégias e está atualizado com a jurisprudência mais recente.</p>
    `,
    data: '18 de Agosto, 2025',
    categoria: 'Contratos Empresariais',
    tempoLeitura: '16 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Contratos Empresariais'
  },
  'contrato-trabalho-pj': {
    slug: 'contrato-trabalho-pj',
    titulo: 'Contrato de Trabalho PJ: Como Evitar Vínculo Empregatício em 2025',
    descricao: 'Estratégias comprovadas para contratar profissionais PJ com segurança jurídica total.',
    conteudo: `
      <p class="lead">A contratação de Pessoa Jurídica tornou-se uma ferramenta estratégica para empresas que buscam flexibilidade e redução de custos. Porém, em 2025, a fiscalização ficou mais inteligente e os riscos de caracterização de vínculo empregatício aumentaram significativamente.</p>

      <h2>📈 Cenário Fiscal e Trabalhista em 2025</h2>
      <p>Com a integração dos sistemas da Receita Federal, Ministério do Trabalho e Previdência, a fiscalização tornou-se quase que instantânea. Empresas que não se adequaram estão sofrendo autuações retroativas com multas que chegam a R$ 500.000.</p>

      <h2>⚖️ Os 8 Pilares da Contratação PJ Segura</h2>

      <h3>1. Ausência de Subordinação Direta</h3>
      <p><strong>O que evitar:</strong> Horário fixo, controle de ponto, supervisão constante</p>
      <p><strong>Como fazer:</strong> Controle por resultados, metas e entregas, não por tempo</p>

      <h3>2. Não Exclusividade</h3>
      <p><strong>Prova:</strong> Permissão explícita para prestar serviços a outras empresas</p>
      <p><strong>Na prática:</strong> Cláusula que permite múltiplos clientes simultaneamente</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> A contratação PJ segura exige mais do que um bom contrato. É necessário um ecossistema de comprovações que demonstre genuína relação empresarial.</p>
      </div>

      <p>Utilize nosso <a href="/contratos/trabalho-pj" class="text-blue-600 hover:underline">modelo de contrato PJ</a> que já incorpora todas as proteções necessárias e inclui anexos comprobatórios.</p>
    `,
    data: '22 de Agosto, 2025',
    categoria: 'Contratos de Trabalho',
    tempoLeitura: '18 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Direito Trabalhista'
  },
  'termo-confidencialidade-nda': {
    slug: 'termo-confidencialidade-nda',
    titulo: 'NDA (Termo de Confidencialidade): Proteção Máxima de Segredos',
    descricao: 'Como usar um NDA para proteger suas ideias, fórmulas e informações estratégicas.',
    conteudo: `
      <p class="lead">Em um mundo onde informações valem mais que ativos físicos, o Termo de Confidencialidade (NDA) tornou-se o guardião dos segredos empresariais. Em 2025, com o avanço da inteligência artificial e a facilidade de vazamento de dados, proteger informações sensíveis não é mais luxo - é necessidade estratégica.</p>

      <h2>💰 O Valor Real da Confidencialidade</h2>
      <p>Segundo estudo da Harvard Business Review 2025, empresas que implementaram programas robustos de confidencialidade tiveram 34% mais sucesso em lançamentos de produtos e 27% menos concorrência direta.</p>

      <h2>⚖️ Anatomia de um NDA Eficaz</h2>

      <h3>1. Definição Precisa de Informação Confidencial</h3>
      <p><strong>Amplo vs Restrito:</strong> Equilíbrio entre proteção abrangente e praticidade</p>

      <h3>2. Obrigações das Partes</h3>
      <p><strong>Dever de guarda:</strong> Proteção equivalente à dada às próprias informações</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Um NDA bem elaborado é como um seguro: espera-se nunca precisar, mas quando precisa, salva o negócio.</p>
      </div>

      <p>Nossos <a href="/contratos/termo-confidencialidade" class="text-blue-600 hover:underline">modelos de NDA</a> são diferenciados por tipo de relação e incluem cláusulas específicas para cada cenário de risco.</p>
    `,
    data: '26 de Agosto, 2025',
    categoria: 'Contratos Empresariais',
    tempoLeitura: '14 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Propriedade Intelectual'
  },
  'contrato-parceria-comercial': {
    slug: 'contrato-parceria-comercial',
    titulo: 'Contrato de Parceria Comercial: Estruturando Sociedades de Sucesso',
    descricao: 'Modelos para formalizar parcerias empresariais com divisão clara de lucros e responsabilidades.',
    conteudo: `
      <p class="lead">As parcerias comerciais são a base do crescimento empresarial no século XXI. Em 2025, 68% das empresas bem-sucedidas atribuem parte de seu sucesso a parcerias estratégicas. No entanto, 45% das parcerias fracassam devido a acordos mal estruturados.</p>

      <h2>🤝 Tipos de Parceria Comercial</h2>

      <h3>Parceria Estratégica</h3>
      <p>Cooperação entre empresas para explorar sinergias sem constituir nova pessoa jurídica.</p>

      <h3>Joint Venture</h3>
      <p>Criação de sociedade específica para projeto determinado, com partilha de riscos e resultados.</p>

      <h2>⚖️ Elementos Essenciais do Contrato</h2>

      <h3>1. Objeto da Parceria</h3>
      <p>Definição clara do escopo, metas e exclusividades.</p>

      <h3>2. Contribuições das Partes</h3>
      <p>Recursos financeiros, intelectuais, tecnológicos e humanos.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Inclua sempre uma cláusula de deadlock para impasses decisórios. Isso evita paralisia em situações críticas.</p>
      </div>

      <p>Nossos <a href="/contratos/parceria-comercial" class="text-blue-600 hover:underline">modelos de contrato de parceria comercial</a> incluem todas essas proteções e são personalizáveis para cada tipo de negócio.</p>
    `,
    data: '30 de Agosto, 2025',
    categoria: 'Contratos Empresariais',
    tempoLeitura: '20 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Sociedades Empresariais'
  },
  'contrato-desenvolvimento-software': {
    slug: 'contrato-desenvolvimento-software',
    titulo: 'Contrato de Desenvolvimento de Software: Proteção Integral em 2025',
    descricao: 'Cláusulas essenciais para contratos de TI, apps e sistemas com foco em propriedade intelectual.',
    conteudo: `
      <p class="lead">O mercado de desenvolvimento de software movimentou R$ 150 bilhões em 2025 no Brasil. Com a transformação digital acelerada, contratos bem elaborados são a diferença entre o sucesso e prejuízos milionários.</p>

      <h2>💻 Especificidades do Desenvolvimento de Software</h2>

      <h3>Metodologias Ágeis</h3>
      <p>Adaptação contratual para Scrum, Kanban e outras metodologias iterativas.</p>

      <h3>Entrega Contínua</h3>
      <p>Definição de milestones, sprints e critérios de aceitação.</p>

      <h2>⚖️ Proteção da Propriedade Intelectual</h2>

      <h3>Direitos Autorais</h3>
      <p>Proteção automática do código-fonte e documentação.</p>

      <h3>Licença de Uso</h3>
      <p>Escopo de utilização do software desenvolvido.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Inclua sempre testes de carga e segurança como critério de aceitação. Isso evita surpresas desagradáveis em produção.</p>
      </div>

      <p>Utilize nosso <a href="/contratos/desenvolvimento-software" class="text-blue-600 hover:underline">modelo de contrato de desenvolvimento de software</a> com cláusulas específicas para proteção de IP e gestão de riscos tecnológicos.</p>
    `,
    data: '3 de Setembro, 2025',
    categoria: 'Contratos de Tecnologia',
    tempoLeitura: '22 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Direito Digital'
  },
  'pacote-completo-contratos': {
    slug: 'pacote-completo-contratos',
    titulo: 'Pacote Completo de Contratos: Economia Inteligente para Empresas',
    descricao: 'Por que adquirir múltiplos contratos pode ser a melhor decisão estratégica para seu negócio.',
    conteudo: `
      <p class="lead">Empresas que investem em uma biblioteca jurídica completa economizam em média R$ 85.000 anuais em assessoria legal corretiva. Em 2025, a estratégia de pacotes tornou-se a escolha inteligente para negócios em crescimento.</p>

      <h2>💰 Análise de Custo-Benefício</h2>

      <h3>Economia Imediata</h3>
      <p>Desconto de 35-50% em relação à compra individual de contratos.</p>

      <h3>Redução de Riscos</h3>
      <p>Cobertura completa para diferentes situações empresariais.</p>

      <h2>🎯 Quando o Pacote é a Melhor Opção</h2>

      <h3>Startups em Expansão</h3>
      <p>Necessidade de múltiplos tipos contratuais simultaneamente.</p>

      <h3>Empresas Consolidadas</h3>
      <p>Padronização de documentos em diferentes departamentos.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> O pacote completo é como um seguro jurídico: você tem a proteção antes de precisar, quando o custo é muito menor.</p>
      </div>

      <p>Conheça nosso <a href="/contratos/pacote-completo" class="text-blue-600 hover:underline">pacote completo de contratos</a> com descontos especiais para empresas.</p>
    `,
    data: '7 de Setembro, 2025',
    categoria: 'Contratos Empresariais',
    tempoLeitura: '12 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Estratégia Jurídica'
  },
  'contrato-locacao-residencial': {
    slug: 'contrato-locacao-residencial',
    titulo: 'Contrato de Locação Residencial: Guia Completo do Locador e Locatário',
    descricao: 'Tudo sobre aluguel de imóveis: garantias, reajustes, direitos e deveres atualizados para 2025.',
    conteudo: `
      <p class="lead">O mercado imobiliário residencial brasileiro movimenta R$ 280 bilhões anualmente. Em 2025, com as novas regulamentações do Senado, tanto locadores quanto locatários precisam de contratos mais detalhados e protetivos.</p>

      <h2>🏠 Novas Regras para 2025</h2>

      <h3>Garantias Locatícias</h3>
      <p>Seguro-fiança tornou-se obrigatório em contratos acima de R$ 5.000 mensais.</p>

      <h3>Reajustes Automáticos</h3>
      <p>Sistema digital de reajuste baseado em índices oficiais.</p>

      <h2>⚖️ Cláusulas Obrigatórias</h2>

      <h3>Vistoria Detalhada</h3>
      <p>Laudo fotográfico e descritivo na entrada e saída.</p>

      <h3>Manutenção Preventiva</h3>
      <p>Definição clara de responsabilidades por tipo de reparo.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Inclua sempre cláusula específica para home office, definindo responsabilidade por upgrades de internet e energia.</p>
      </div>

      <p>Utilize nosso <a href="/contratos/locacao-residencial" class="text-blue-600 hover:underline">modelo de contrato de locação residencial</a> atualizado com todas as exigências legais de 2025.</p>
    `,
    data: '12 de Setembro, 2025',
    categoria: 'Locação e Imóveis',
    tempoLeitura: '24 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Direito Imobiliário'
  },
  'contrato-compra-venda': {
    slug: 'contrato-compra-venda',
    titulo: 'Contrato de Compra e Venda: Segurança em Transações Comerciais',
    descricao: 'Modelos para venda de produtos, serviços e imóveis com garantias e prazos bem definidos.',
    conteudo: `
      <p class="lead">Transações comerciais seguras são o alicerce da confiança no mercado. Em 2025, com a digitalização das relações, um contrato de compra e venda robusto previne 92% dos litígios consumeristas.</p>

      <h2>🛒 Tipos de Compra e Venda</h2>

      <h3>Bens Móveis</h3>
      <p>Produtos físicos com entrega e garantia definidas.</p>

      <h3>Bens Imóveis</h3>
      <p>Transações imobiliárias com due diligence obrigatória.</p>

      <h3>Serviços</h3>
      <p>Venda de serviços com especificação de escopo.</p>

      <h2>⚖️ Elementos Essenciais</h2>

      <h3>Descrição do Bem</h3>
      <p>Especificação técnica completa e condições de entrega.</p>

      <h3>Garantias Contratuais</h3>
      <p>Prazos, condições de acionamento e responsabilidades.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Para vendas online, inclua sempre print das especificações do anúncio como anexo do contrato.</p>
      </div>

      <p>Nossos <a href="/contratos/compra-venda" class="text-blue-600 hover:underline">modelos de contrato de compra e venda</a> cobrem todos os tipos de transação com proteção máxima.</p>
    `,
    data: '17 de Setembro, 2025',
    categoria: 'Contratos Comerciais',
    tempoLeitura: '16 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Direito Consumerista'
  },
  'contrato-consultoria': {
    slug: 'contrato-consultoria',
    titulo: 'Contrato de Consultoria: Estruturando Serviços de Assessoria',
    descricao: 'Como formalizar serviços de consultoria com definição clara de escopo, metas e honorários.',
    conteudo: `
      <p class="lead">O mercado de consultoria faturou R$ 45 bilhões no Brasil em 2025. Com a crescente especialização, contratos bem estruturados são essenciais para garantir que o conhecimento transferido gere resultados mensuráveis.</p>

      <h2>🎯 Especificidades da Consultoria</h2>

      <h3>Consultoria Estratégica</h3>
      <p>Foco em planejamento, reestruturação e crescimento.</p>

      <h3>Consultoria Técnica</h3>
      <p>Especialização em áreas específicas como TI, engenharia, jurídica.</p>

      <h2>⚖️ Estrutura Contractual Ideal</h2>

      <h3>Escopo Bem Definido</h3>
      <p>Objetivos SMART e entregas mensuráveis.</p>

      <h3>Metodologia de Trabalho</h3>
      <p>Abordagem, ferramentas e processos específicos.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Inclua cláusula de não solicitação de funcionários para proteger seu capital humano.</p>
      </div>

      <p>Utilize nosso <a href="/contratos/consultoria" class="text-blue-600 hover:underline">modelo de contrato de consultoria</a> com estruturas diferenciadas por tipo de assessoria.</p>
    `,
    data: '22 de Setembro, 2025',
    categoria: 'Contratos Empresariais',
    tempoLeitura: '18 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Contratos de Consultoria'
  },
  'contrato-franquia': {
    slug: 'contrato-franquia',
    titulo: 'Contrato de Franquia: Expandindo Negócios com Segurança Jurídica',
    descricao: 'Elementos essenciais para franqueadores e franqueados em operações de franchising.',
    conteudo: `
      <p class="lead">O setor de franchising movimenta R$ 220 bilhões no Brasil, com crescimento de 12% em 2025. Contratos de franquia bem elaborados são a diferença entre redes de sucesso e operações problemáticas.</p>

      <h2>🏪 Tipos de Franquia</h2>

      <h3>Franquia de Produto</h3>
      <p>Distribuição exclusiva de produtos ou serviços.</p>

      <h3>Franquia de Negócio</h3>
      <p>Sistema completo incluindo marca, know-how e operação.</p>

      <h2>⚖️ Elementos Contractuais Críticos</h2>

      <h3>Direitos de Uso da Marca</h3>
      <p>Escopo territorial, temporal e de exclusividade.</p>

      <h3>Taxas e Royalties</h3>
      <p>Estrutura de pagamentos, reajustes e penalidades.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Inclua sempre due diligence do franqueado para evitar problemas futuros com capacidade financeira e operacional.</p>
      </div>

      <p>Nossos <a href="/contratos/franquia" class="text-blue-600 hover:underline">modelos de contrato de franquia</a> contemplam tanto a perspectiva do franqueador quanto do franqueado.</p>
    `,
    data: '27 de Setembro, 2025',
    categoria: 'Contratos Empresariais',
    tempoLeitura: '26 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Franchising'
  },
  'contrato-servicos-digitais': {
    slug: 'contrato-servicos-digitais',
    titulo: 'Contrato de Prestação de Serviços Digitais: Jurisdição e LGPD',
    descricao: 'Adaptações necessárias para contratos de marketing digital, TI e serviços online.',
    conteudo: `
      <p class="lead">O mercado digital brasileiro cresceu 38% em 2025, alcançando R$ 185 bilhões. Contratos específicos para serviços digitais são essenciais para lidar com jurisdição internacional, propriedade intelectual e proteção de dados.</p>

      <h2>💻 Especificidades do Ambiente Digital</h2>

      <h3>Jurisdição Internacional</h3>
      <p>Definição de foro para serviços com servidores no exterior.</p>

      <h3>Conformidade LGPD</h3>
      <p>Adaptação completa à Lei Geral de Proteção de Dados.</p>

      <h2>⚖️ Cláusulas Digitais Essenciais</h2>

      <h3>Propriedade Intelectual Digital</h3>
      <p>Direitos sobre códigos, designs, conteúdos e dados.</p>

      <h3>Serviços em Nuvem</h3>
      <p>SLAs, backup, segurança e disponibilidade.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Inclua cláusula específica para APIs e integrações, definindo responsabilidades em caso de mudanças técnicas.</p>
      </div>

      <p>Utilize nosso <a href="/contratos/prestacao-servicos-digitais" class="text-blue-600 hover:underline">modelo de contrato de serviços digitais</a> com proteções específicas para o ambiente online.</p>
    `,
    data: '2 de Outubro, 2025',
    categoria: 'Contratos de Tecnologia',
    tempoLeitura: '20 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Direito Digital'
  },
  'contrato-comodato': {
    slug: 'contrato-comodato',
    titulo: 'Contrato de Comodato: Empréstimo Gratuito com Proteção Jurídica',
    descricao: 'Como formalizar empréstimos de bens sem custo, preservando direitos do proprietário.',
    conteudo: `
      <p class="lead">O comodato, ou empréstimo gratuito, é ferramenta essencial para empresas que compartilham ativos sem transferência de propriedade. Em 2025, com o crescimento da economia colaborativa, contratos bem estruturados previnem 95% dos conflitos.</p>

      <h2>🔄 Cenário da Economia Colaborativa</h2>

      <h3>Compartilhamento de Ativos</h3>
      <p>Equipamentos, veículos, espaços físicos entre empresas.</p>

      <h3>Parcerias Operacionais</h3>
      <p>Uso compartilhado de infraestrutura e recursos.</p>

      <h2>⚖️ Elementos do Comodato Seguro</h2>

      <h3>Descrição do Bem</h3>
      <p>Especificação técnica completa e estado de conservação.</p>

      <h3>Responsabilidades</h3>
      <p>Manutenção, seguro, devolução e indenização por danos.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Mesmo sendo gratuito, inclua cláusula de multa por atraso na devolução para incentivo comportamental.</p>
      </div>

      <p>Nossos <a href="/contratos/comodato" class="text-blue-600 hover:underline">modelos de contrato de comodato</a> protegem o comodante sem onerar o comodatário.</p>
    `,
    data: '7 de Outubro, 2025',
    categoria: 'Contratos Diversos',
    tempoLeitura: '14 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Contratos Civis'
  },
  'contrato-representacao-comercial': {
    slug: 'contrato-representacao-comercial',
    titulo: 'Contrato de Representação Comercial: Comissões e Exclusividade',
    descricao: 'Modelos para representantes comerciais com regras claras de atuação e remuneração.',
    conteudo: `
      <p class="lead">A representação comercial movimenta R$ 350 bilhões anualmente no Brasil. Em 2025, com a profissionalização do setor, contratos bem estruturados são essenciais para relações duradouras e lucrativas.</p>

      <h2>👔 Tipos de Representação</h2>

      <h3>Representante Autônomo</h3>
      <p>Profissional independente com carteira de clientes.</p>

      <h3>Agente Comercial</h3>
      <p>Pessoa jurídica com estrutura própria de vendas.</p>

      <h2>⚖️ Elementos Contractuais Fundamentais</h2>

      <h3>Área de Atuação</h3>
      <p>Território, exclusividade e conflito de interesses.</p>

      <h3>Comissões e Pagamentos</h3>
      <p>Percentuais, prazos, condições e recall de comissões.</p>

      <div class="dica-importante">
        <p><strong>Dica do Dr. Reginaldo:</strong> Inclua cláusula de clientela própria para proteger o representante que desenvolve relacionamentos duradouros.</p>
      </div>

      <p>Utilize nosso <a href="/contratos/representacao-comercial" class="text-blue-600 hover:underline">modelo de contrato de representação comercial</a> com estruturas flexíveis de remuneração.</p>
    `,
    data: '12 de Outubro, 2025',
    categoria: 'Contratos Comerciais',
    tempoLeitura: '18 min de leitura',
    autor: 'Dr. Reginaldo Oliveira - Especialista em Direito Comercial'
  }
}

export default function ArtigoPage() {
  const params = useParams()
  const slug = params.slug
  const artigo = artigosData[slug]

  if (!artigo) {
    return (
      <main>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Artigo não encontrado</h1>
            <p className="text-gray-600 mb-2">Slug: {slug}</p>
            <a href="/artigos" className="text-blue-600 hover:text-blue-800">
              ← Voltar para artigos
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/artigos" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              ← Voltar para todos os artigos
            </Link>
          </div>

          {/* Artigo */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Cabeçalho do Artigo */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {artigo.categoria}
                </span>
                <span className="text-blue-100 text-sm">{artigo.tempoLeitura}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {artigo.titulo}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-blue-100 text-sm">
                <span>{artigo.data}</span>
                <span className="mt-2 sm:mt-0 font-medium">{artigo.autor}</span>
              </div>
            </div>

            {/* Conteúdo do Artigo */}
            <div className="p-8">
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: artigo.conteudo }}
              />

              {/* Call-to-Action */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precisa do contrato mencionado?</h3>
                <p className="text-gray-700 mb-4">
                  Dr. Reginaldo Oliveira desenvolveu modelos jurídicos robustos e atualizados para proteger seu negócio.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="/contratos" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                  >
                    Ver Todos os Contratos
                  </a>
                  <a 
                    href="/contato" 
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
                  >
                    Consultoria com Dr. Reginaldo
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
