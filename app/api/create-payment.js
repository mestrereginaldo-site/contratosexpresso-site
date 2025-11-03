const mercadopago = require('mercadopago');

// Configure com suas credenciais de produção
mercadopago.configure({
  access_token: 'APP_USR-7541100388429313-110302-0c2dfd0a4992ebb67ac97996eaaba32d-1963614741'
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { contrato, email, nome, metodoPagamento, descontoPix } = req.body;

    // Calcular preço final
    const precoFinal = descontoPix ? contrato.preco * 0.95 : contrato.preco;

    // Configurar métodos de pagamento baseado na escolha
    let paymentMethods = {
      excluded_payment_methods: [],
      excluded_payment_types: [],
      installments: 12 // Máximo de parcelas
    };

    // Se o usuário escolheu um método específico, excluir os outros
    if (metodoPagamento === 'pix') {
      paymentMethods.excluded_payment_types = [
        { id: 'credit_card' },
        { id: 'debit_card' },
        { id: 'ticket' }
      ];
    } else if (metodoPagamento === 'cartao') {
      paymentMethods.excluded_payment_types = [
        { id: 'ticket' }
      ];
    } else if (metodoPagamento === 'boleto') {
      paymentMethods.excluded_payment_types = [
        { id: 'credit_card' },
        { id: 'debit_card' }
      ];
    }

    // Criar preferência de pagamento
    const preference = {
      items: [
        {
          title: contrato.nome,
          unit_price: parseFloat(precoFinal.toFixed(2)),
          quantity: 1,
          currency_id: 'BRL',
          description: contrato.descricao,
        }
      ],
      payer: {
        email: email,
        name: nome,
      },
      payment_methods: paymentMethods,
      back_urls: {
        success: 'https://contratosexpresso.com.br/obrigado',
        failure: 'https://contratosexpresso.com.br/contratos',
        pending: 'https://contratosexpresso.com.br/contratos',
      },
      auto_return: 'approved',
      statement_descriptor: 'CONTRATOSEXPRESSO',
      metadata: {
        contrato_id: contrato.id,
        contrato_nome: contrato.nome,
        customer_email: email,
        customer_name: nome,
      }
    };

    const response = await mercadopago.preferences.create(preference);
    
    res.status(200).json({
      success: true,
      id: response.body.id,
      init_point: response.body.init_point,
      message: 'Pagamento criado com sucesso'
    });

  } catch (error) {
    console.error('Erro ao criar pagamento Mercado Pago:', error);
    
    res.status(500).json({ 
      success: false,
      message: 'Erro ao processar pagamento. Tente novamente.',
      error: error.message 
    });
  }
}
