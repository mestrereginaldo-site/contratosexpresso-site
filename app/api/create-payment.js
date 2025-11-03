const mercadopago = require('mercadopago');

// Configure com suas credenciais
mercadopago.configure({
  access_token: 'APP_USR-7541100388429313-110302-0c2dfd0a4992ebb67ac97996eaaba32d-1963614741'
});

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { contrato, email, nome, empresa, telefone, descontoPix } = req.body;

    console.log('📦 Dados recebidos:', { 
      contrato: contrato?.nome,
      email, 
      nome, 
      empresa,
      telefone,
      descontoPix 
    });

    // Validações básicas
    if (!contrato || !email || !nome) {
      return res.status(400).json({ 
        success: false,
        message: 'Dados incompletos. Preencha todos os campos obrigatórios.' 
      });
    }

    // Calcular preço final
    const precoFinal = descontoPix ? contrato.preco * 0.95 : contrato.preco;

    console.log('💰 Criando pagamento no Mercado Pago... Preço:', precoFinal);

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
        customer_empresa: empresa,
        customer_telefone: telefone
      }
    };

    console.log('🔄 Enviando para Mercado Pago...');
    const response = await mercadopago.preferences.create(preference);
    
    console.log('✅ Pagamento criado com sucesso! ID:', response.body.id);
    console.log('🔗 Link:', response.body.init_point);

    // Retornar resposta completa
    res.status(200).json({
      success: true,
      id: response.body.id,
      init_point: response.body.init_point,
      message: 'Pagamento criado com sucesso'
    });

  } catch (error) {
    console.error('❌ Erro detalhado ao criar pagamento:', error);
    
    // Log mais detalhado do erro do Mercado Pago
    if (error.response) {
      console.error('📋 Resposta do erro Mercado Pago:', error.response.body);
    }
    
    // Sempre retornar JSON válido, mesmo em caso de erro
    res.status(500).json({ 
      success: false,
      message: 'Erro ao processar pagamento. Tente novamente.',
      error: error.message 
    });
  }
}
