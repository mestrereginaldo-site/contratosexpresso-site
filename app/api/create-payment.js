import mercadopago from '../../../lib/mercadopago';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { contrato, email, nome, descontoPix } = req.body;

    // Verificar se os dados necessários estão presentes
    if (!contrato || !email || !nome) {
      return res.status(400).json({ 
        message: 'Dados incompletos. Forneça contrato, email e nome.' 
      });
    }

    // Calcular preço final
    const precoFinal = descontoPix ? contrato.preco * 0.95 : contrato.preco;

    // Criar pagamento no Mercado Pago
    const preference = {
      items: [
        {
          title: contrato.nome,
          unit_price: precoFinal,
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
      }
    };

    const response = await mercadopago.preferences.create(preference);
    
    res.status(200).json({
      id: response.body.id,
      init_point: response.body.init_point
    });

  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    res.status(500).json({ 
      message: 'Erro ao processar pagamento',
      error: error.message 
    });
  }
}
