const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  setErro('')

  try {
    console.log('🔄 Iniciando processo de pagamento...')
    
    // Criar preferência de pagamento no Mercado Pago - NOVA ROTA
    const response = await fetch('/api/create-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contrato,
        email,
        nome,
        empresa,
        telefone,
        metodoPagamento,
        descontoPix
      }),
    })

    console.log('📨 Resposta recebida, status:', response.status)

    // Tentar parsear a resposta como JSON
    let data
    try {
      const text = await response.text()
      console.log('📄 Resposta bruta:', text)
      data = text ? JSON.parse(text) : {}
    } catch (parseError) {
      console.error('❌ Erro ao parsear JSON:', parseError)
      throw new Error('Resposta inválida do servidor')
    }

    if (!response.ok) {
      throw new Error(data.message || `Erro ${response.status} ao processar pagamento`)
    }

    if (!data.success) {
      throw new Error(data.message || 'Erro ao criar pagamento')
    }

    console.log('✅ Redirecionando para:', data.init_point)

    // Redirecionar para o checkout do Mercado Pago
    window.location.href = data.init_point

  } catch (error) {
    console.error('❌ Erro no processo:', error)
    
    // Se a API falhar, mostrar mensagem mais amigável
    if (error.message.includes('Resposta inválida') || error.message.includes('Failed to fetch')) {
      setErro('Serviço temporariamente indisponível. Por favor, tente novamente em alguns instantes.')
    } else {
      setErro(error.message || 'Erro ao processar pagamento. Tente novamente.')
    }
  } finally {
    setLoading(false)
  }
}
