'use client'
import { useState } from 'react'
import { useAuth } from '../../../../context/AuthContext'
import ProtectedRoute from '../../../../components/ProtectedRoute'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'

const contratosPorPlano = {
  basico: [
    'Contrato de Prestação de Serviços',
    'Contrato de Trabalho PJ',
    'Termo de Confidencialidade (NDA)',
    'Contrato de Parceria Comercial',
    'Contrato de Locação Residencial'
  ],
  profissional: [
    'Contrato de Prestação de Serviços',
    'Contrato de Trabalho PJ',
    'Termo de Confidencialidade (NDA)',
    'Contrato de Parceria Comercial',
    'Contrato de Desenvolvimento de Software',
    'Contrato de Locação Residencial',
    'Contrato de Compra e Venda de Imóvel',
    'Contrato de Consultoria Empresarial',
    'Contrato de Prestação de Serviços Digitais',
    'Contrato de Comodato',
    'Contrato de Representação Comercial',
    'Pacote Completo de Documentação'
  ],
  empresarial: [
    'Todos os contratos profissionais',
    'Contratos setoriais específicos',
    'Modelos personalizados sob demanda',
    'Novos contratos mensalmente'
  ]
}

export default function ContratosDownload() {
  const { user } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  // Determinar qual plano o usuário tem (simulação)
  const userPlan = user?.plan || 'profissional'
  const contratosDisponiveis = contratosPorPlano[userPlan] || contratosPorPlano.profissional

  const categorias = ['Todos', 'Serviços', 'Trabalho', 'Imobiliário', 'Tecnologia', 'Comercial']

  const contratosComDetalhes = contratosDisponiveis.map(contrato => ({
    nome: contrato,
    categoria: getCategoria(contrato),
    descricao: getDescricao(contrato),
    arquivo: `${contrato.toLowerCase().replace(/\s+/g, '-')}.pdf`,
    popular: contrato.includes('Prestação de Serviços') || contrato.includes('Trabalho PJ')
  }))

  function getCategoria(nome) {
    if (nome.includes('Serviços')) return 'Serviços'
    if (nome.includes('Trabalho')) return 'Trabalho'
    if (nome.includes('Locação') || nome.includes('Imóvel')) return 'Imobiliário'
    if (nome.includes('Software') || nome.includes('Digital')) return 'Tecnologia'
    if (nome.includes('Comercial') || nome.includes('Parceria')) return 'Comercial'
    return 'Geral'
  }

  function getDescricao(nome) {
    const descricoes = {
      'Contrato de Prestação de Serviços': 'Ideal para freelancers e empresas que contratam serviços pontuais',
      'Contrato de Trabalho PJ': 'Para contratar profissionais como Pessoa Jurídica com segurança',
      'Termo de Confidencialidade (NDA)': 'Proteja suas ideias e informações comerciais',
      'Contrato de Parceria Comercial': 'Para formalizar sociedade entre empresas ou profissionais',
      'Contrato de Desenvolvimento de Software': 'Específico para projetos de tecnologia e desenvolvimento',
      'Contrato de Locação Residencial': 'Para alugar imóveis residenciais com segurança jurídica',
      'Contrato de Compra e Venda de Imóvel': 'Para transações imobiliárias seguras e documentadas',
      'Contrato de Consultoria Empresarial': 'Para serviços de consultoria em empresas',
      'Contrato de Prestação de Serviços Digitais': 'Para serviços de marketing digital, desenvolvimento web, etc.',
      'Contrato de Comodato': 'Para empréstimo de bens sem ônus para o mutuário',
      'Contrato de Representação Comercial': 'Para formalizar relação com representantes comerciais',
      'Pacote Completo de Documentação': 'Todos os contratos essenciais em um único pacote'
    }
    return descricoes[nome] || 'Modelo de contrato profissional'
  }

  const filteredContratos = contratosComDetalhes.filter(contrato => {
    const matchesCategory = selectedCategory === 'Todos' || contrato.categoria === selectedCategory
    const matchesSearch = contrato.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contrato.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleDownload = (contrato) => {
    // Simulação de download - em produção, isso baixaria um arquivo real
    alert(`Iniciando download do: ${contrato.nome}\n\nArquivo: ${contrato.arquivo}\n\nEm produção, este arquivo seria baixado automaticamente.`)
    
    // Aqui você integraria com sua API para baixar o arquivo real
    // window.open(`/api/download/${contrato.arquivo}`, '_blank')
  }

  return (
    <ProtectedRoute>
      <main>
        <Header />
        
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                📥 Área de Downloads
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                Baixe todos os contratos incluídos no seu plano <strong>{userPlan}</strong>
              </p>
              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto">
                <p className="text-sm">
                  <strong>Contratos disponíveis:</strong> {contratosDisponiveis.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filtros e Busca */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar contratos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-64"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categorias.map(categoria => (
                    <option key={categoria} value={categoria}>{categoria}</option>
                  ))}
                </select>
              </div>
              
              <div className="text-sm text-gray-600">
                Mostrando {filteredContratos.length} de {contratosDisponiveis.length} contratos
              </div>
            </div>

            {/* Grid de Contratos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredContratos.map((contrato, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-all">
                  {contrato.popular && (
                    <div className="bg-yellow-400 text-blue-900 text-center py-2 font-bold text-sm">
                      MAIS BAIXADO
                    </div>
                  )}
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {contrato.nome}
                      </h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {contrato.categoria}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-sm flex-grow">
                      {contrato.descricao}
                    </p>

                    <div className="space-y-3">
                      <button
                        onClick={() => handleDownload(contrato)}
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm text-center flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Baixar PDF
                      </button>
                      
                      <button className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-sm text-center flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Personalizar Online
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mensagem se não encontrar resultados */}
            {filteredContratos.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum contrato encontrado</h3>
                <p className="text-gray-600">Tente ajustar os filtros ou termos de busca.</p>
              </div>
            )}

            {/* Informações do Plano */}
            <div className="mt-12 bg-blue-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seu Plano: {userPlan.toUpperCase()}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefícios Incluídos:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ {contratosDisponiveis.length} modelos de contratos</li>
                    <li>✓ Download ilimitado</li>
                    <li>✓ Atualizações gratuitas</li>
                    {userPlan !== 'basico' && <li>✓ Suporte prioritário</li>}
                    {userPlan === 'empresarial' && <li>✓ Personalização de contratos</li>}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Próximos Passos:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>1. Baixe os contratos que precisa</li>
                    <li>2. Preencha com suas informações</li>
                    <li>3. Consulte um advogado se necessário</li>
                    <li>4. Use e proteja seu negócio!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ProtectedRoute>
  )
}
