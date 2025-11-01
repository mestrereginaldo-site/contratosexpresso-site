'use client'
import { useParams } from 'next/navigation'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
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

      <p>É fundamental contar com um contrato bem elaborado, independentemente da modalidade escolhida. Nosso <a href="/contratos/trabalho-pj" class="text-blue-600 hover:underline">modelo de contrato PJ</a> e <a href="/contratos/trabalho-clt" class="text-blue-600 hover:underline">modelo de contrato CLT</a> podem ajudar a formalizar a relação de forma segura.</p>
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
  }
  // Adicionaremos os outros artigos depois
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
