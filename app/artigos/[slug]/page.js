'use client'
import { useParams } from 'next/navigation'
import Header from '../../../../components/Header'  // ← CORRIGIDO
import Footer from '../../../../components/Footer'  // ← CORRIGIDO
import Link from 'next/link'

// Dados completos dos artigos
const artigosData = {
  'contrato-pj-vs-clt': {
    slug: 'contrato-pj-vs-clt',
    titulo: 'Contrato PJ vs CLT: Qual a Melhor Escolha em 2024?',
    descricao: 'Guia completo para entender as diferenças e escolher o melhor tipo de contratação para sua empresa.',
    conteudo: `
      <p>Na hora de contratar um funcionário, muitas empresas ficam em dúvida entre o contrato PJ (Pessoa Jurídica) e o CLT (Consolidação das Leis do Trabalho). Ambas as modalidades têm vantagens e desvantagens, e a escolha certa depende do contexto da sua empresa e da função a ser exercida.</p>

      <h2>O que é Contrato CLT?</h2>
      <p>O regime CLT é a forma tradicional de contratação no Brasil, regido pela Consolidação das Leis do Trabalho. Oferece diversos benefícios e proteções ao trabalhador, como:</p>
      <ul>
        <li>Férias remuneradas com acréscimo de 1/3</li>
        <li>13º salário</li>
        <li>FGTS</li>
        <li>Vale-transporte</li>
        <li>Licença-maternidade/paternidade</li>
        <li>Aviso prévio</li>
      </ul>

      <h2>O que é Contrato PJ?</h2>
      <p>O contrato PJ é uma relação entre empresas, onde o profissional presta serviços como Pessoa Jurídica. As principais características são:</p>
      <ul>
        <li>Maior flexibilidade</li>
        <li>Remuneração geralmente mais alta</li>
        <li>Ausência de vínculo empregatício</li>
        <li>Possibilidade de trabalhar para várias empresas</li>
        <li>O profissional é responsável por seus próprios impostos e benefícios</li>
      </ul>

      <h2>Quando escolher cada um?</h2>
      <p>Para funções que exigem exclusividade e subordinação, o regime CLT é o mais indicado. Já para projetos específicos, consultorias ou serviços pontuais, o contrato PJ pode ser mais vantajoso.</p>

      <p>É fundamental contar com um contrato bem elaborado, independentemente da modalidade escolhida. Nosso <a href="/contratos/trabalho-pj" class="text-blue-600 hover:underline">modelo de contrato PJ</a> pode ajudar a formalizar a relação de forma segura.</p>
    `,
    data: '15 de Janeiro, 2024',
    categoria: 'Contratos de Trabalho',
    tempoLeitura: '5 min de leitura'
  },
  '5-erros-contratos-trabalho': {
    slug: '5-erros-contratos-trabalho',
    titulo: '5 Erros Fatais em Contratos de Trabalho que Custam Caro',
    descricao: 'Evite esses erros comuns que podem levar a processos trabalhistas e prejuízos financeiros.',
    conteudo: `
      <p>Um contrato de trabalho mal elaborado pode custar caro para sua empresa. Conheça os 5 erros mais comuns e como evitá-los:</p>

      <h2>1. Descrição Genérica de Funções</h2>
      <p>Descrever as funções de forma vaga como "prestar serviços diversos" pode abrir espaço para interpretações equivocadas e reclamações trabalhistas.</p>
      <p><strong>Solução:</strong> Seja específico nas atribuições e responsabilidades do cargo.</p>

      <h2>2. Não Especificar Horário de Trabalho</h2>
      <p>A ausência de jornada definida pode levar a pagamento de horas extras não previstas.</p>
      <p><strong>Solução:</strong> Defina claramente o horário de entrada, saída e intervalos.</p>

      <h2>3. Cláusulas Abusivas</h2>
      <p>Cláusulas que limitam excessivamente os direitos do trabalhador podem ser anuladas judicialmente.</p>
      <p><strong>Solução:</strong> Respeite os direitos mínimos estabelecidos pela CLT.</p>

      <h2>4. Falta de Cláusula de Confidencialidade</h2>
      <p>Sem proteção adequada, informações estratégicas da empresa podem ser compartilhadas.</p>
      <p><strong>Solução:</strong> Inclua cláusulas de confidencialidade e não concorrência.</p>

      <h2>5. Não Atualizar com a Legislação</h2>
      <p>Usar modelos desatualizados pode deixar sua empresa em desacordo com a lei.</p>
      <p><strong>Solução:</strong> Utilize nossos <a href="/contratos" class="text-blue-600 hover:underline">modelos atualizados</a> desenvolvidos por especialistas.</p>
    `,
    data: '12 de Janeiro, 2024',
    categoria: 'Contratos de Trabalho',
    tempoLeitura: '4 min de leitura'
  },
  'contrato-social-passo-a-passo': {
    slug: 'contrato-social-passo-a-passo',
    titulo: 'Contrato Social: Passo a Passo para Abrir sua Empresa',
    descricao: 'Aprenda como elaborar um contrato social correto e evite problemas futuros na sua empresa.',
    conteudo: `
      <p>O contrato social é um dos documentos mais importantes na abertura de uma empresa. Ele define as regras do negócio e a relação entre os sócios. Confira o passo a passo:</p>

      <h2>1. Defina o Tipo Empresarial</h2>
      <p>Antes de começar, escolha o enquadramento correto: MEI, ME, EIRELI, LTDA, etc. Cada um tem características específicas.</p>

      <h2>2. Identificação dos Sócios</h2>
      <p>Inclua dados completos de todos os sócios: nome completo, CPF, endereço, nacionalidade, estado civil.</p>

      <h2>3. Denominação Social e Nome Fantasia</h2>
      <p>Registre o nome jurídico da empresa e o nome fantasia que será usado no mercado.</p>

      <h2>4. Objeto Social</h2>
      <p>Descreva detalhadamente as atividades que a empresa exercerá. Seja específico para evitar problemas futuros.</p>

      <h2>5. Capital Social e Participação</h2>
      <p>Defina o capital total da empresa e a participação de cada sócio.</p>

      <h2>6. Administração da Empresa</h2>
      <p>Estabeleça quem serão os administradores e seus poderes.</p>

      <p>Nosso <a href="/contratos" class="text-blue-600 hover:underline">modelo de contrato social</a> pode ajudar nesse processo importante.</p>
    `,
    data: '10 de Janeiro, 2024',
    categoria: 'Contratos Empresariais',
    tempoLeitura: '6 min de leitura'
  },
  'contrato-locacao-10-clausulas': {
    slug: 'contrato-locacao-10-clausulas',
    titulo: 'Contrato de Locação: 10 Cláusulas que Você Precisa Incluir',
    descricao: 'Proteja seu imóvel e evite problemas com inquilinos com essas cláusulas essenciais.',
    conteudo: `
      <p>Um bom contrato de locação pode prevenir 90% dos problemas entre locador e locatário. Confira as 10 cláusulas essenciais:</p>

      <h2>1. Identificação Completa das Partes</h2>
      <p>Dados completos do locador e locatário, incluindo CPF, RG, endereço e contatos.</p>

      <h2>2. Descrição Detalhada do Imóvel</h2>
      <p>Endereço completo, metragem, número de cômodos, mobílias e equipamentos incluídos.</p>

      <h2>3. Prazo de Locação</h2>
      <p>Data de início e término do contrato, condições para renovação.</p>

      <h2>4. Valor e Forma de Pagamento</h2>
      <p>Valor do aluguel, data de vencimento, multas por atraso.</p>

      <h2>5. Reajuste do Aluguel</h2>
      <p>Índice de reajuste (IGPM, INCC) e periodicidade.</p>

      <h2>6. Garantias</h2>
      <p>Fiador, caução, seguro-fiança - escolha a melhor opção.</p>

      <h2>7. Manutenção e Reparos</h2>
      <p>Defina responsabilidades por pequenos e grandes reparos.</p>

      <h2>8. Condomínio e Taxas</h2>
      <p>Quem paga condomínio, IPTU, luz, água, internet.</p>

      <h2>9. Multas e Penalidades</h2>
      <p>Multa por quebra antecipada, atraso, danos ao imóvel.</p>

      <h2>10. Condições de Devolução</h2>
      <p>Estado de conservação, vistoria, prazo para devolução do garantia.</p>

      <p>Use nosso <a href="/contratos/locacao-residencial" class="text-blue-600 hover:underline">modelo de contrato de locação</a> já com todas essas cláusulas.</p>
    `,
    data: '8 de Janeiro, 2024',
    categoria: 'Locação e Imóveis',
    tempoLeitura: '5 min de leitura'
  },
  'lgpd-na-pratica': {
    slug: 'lgpd-na-pratica',
    titulo: 'LGPD na Prática: O que Sua Empresa Precisa Fazer',
    descricao: 'Descubra como adaptar sua empresa à Lei Geral de Proteção de Dados de forma simples e eficaz.',
    conteudo: `
      <p>A Lei Geral de Proteção de Dados (LGPD) está em vigor e todas as empresas precisam se adaptar. Veja o passo a passo prático:</p>

      <h2>1. Mapeie os Dados que Você Coleta</h2>
      <p>Faça um inventário de todos os dados pessoais que sua empresa coleta, armazena e processa.</p>

      <h2>2. Defina a Base Legal</h2>
      <p>Para cada tipo de dado, identifique a base legal que justifica o tratamento (consentimento, contrato, legítimo interesse).</p>

      <h2>3. Atualize seus Contratos</h2>
      <p>Inclua cláusulas de proteção de dados em todos os contratos com clientes, fornecedores e funcionários.</p>

      <h2>4. Crie um Canal para Titulares</h2>
      <p>Estabeleça um canal para que as pessoas possam exercer seus direitos (acesso, correção, exclusão de dados).</p>

      <h2>5. Treine sua Equipe</h2>
      <p>Capacite os colaboradores sobre a importância da proteção de dados e boas práticas.</p>

      <h2>6. Revise sua Política de Privacidade</h2>
      <p>Atualize o documento para ficar transparente sobre o tratamento de dados.</p>

      <p>Nossos <a href="/contratos" class="text-blue-600 hover:underline">contratos já incluem cláusulas LGPD</a> atualizadas.</p>
    `,
    data: '5 de Janeiro, 2024',
    categoria: 'Dicas Jurídicas',
    tempoLeitura: '4 min de leitura'
  },
  'contrato-internet-riscos': {
    slug: 'contrato-internet-riscos',
    titulo: 'Posso Usar Contrato da Internet? Riscos e Alternativas',
    descricao: 'Entenda os perigos de usar contratos baixados da internet e como se proteger.',
    conteudo: `
      <p>Muitas pessoas tentam economizar usando contratos baixados da internet, mas isso pode sair muito caro. Conheça os riscos:</p>

      <h2>Risco 1: Cláusulas Desatualizadas</h2>
      <p>Contratos da internet podem não refletir as últimas mudanças na legislação, deixando você vulnerável.</p>

      <h2>Risco 2: Falta de Personalização</h2>
      <p>Cada negócio é único. Um modelo genérico pode não atender suas necessidades específicas.</p>

      <h2>Risco 3: Cláusulas Ilegais ou Nulas</h2>
      <p>Muitos modelos contêm cláusulas que seriam anuladas judicialmente, dando falsa sensação de segurança.</p>

      <h2>Risco 4: Ausência de Proteções Essenciais</h2>
      <p>Falta de cláusulas importantes como confidencialidade, propriedade intelectual, multas, etc.</p>

      <h2>Risco 5: Problemas com Interpretação</h2>
      <p>Redação ambígua pode levar a diferentes interpretações e conflitos.</p>

      <h2>A Alternativa Segura</h2>
      <p>Em vez de arriscar, use nossos <a href="/contratos" class="text-blue-600 hover:underline">modelos desenvolvidos por especialistas</a>:</p>
      <ul>
        <li>Atualizados com a legislação</li>
        <li>Personalizáveis para seu negócio</li>
        <li>Com todas as cláusulas necessárias</li>
        <li>Suporte em caso de dúvidas</li>
      </ul>

      <p>Investir em um contrato adequado pode economizar milhares de reais em problemas futuros.</p>
    `,
    data: '3 de Janeiro, 2024',
    categoria: 'Perguntas Frequentes',
    tempoLeitura: '3 min de leitura'
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
              
              <div className="flex items-center text-blue-100 text-sm">
                <span>{artigo.data}</span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precisa de um contrato?</h3>
                <p className="text-gray-700 mb-4">
                  Nossos modelos de contratos são desenvolvidos por advogados especialistas e podem ser personalizados para suas necessidades.
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
                    Falar com Especialista
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
