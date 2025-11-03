import { NextResponse } from 'next/server';

// Note: Em produção, use variáveis de ambiente para o access_token
const MERCADOPAGO_ACCESS_TOKEN = 'APP_USR-7541100388429313-110302-0c2dfd0a4992ebb67ac97996eaaba32d-1963614741';

export async function POST(request) {
  try {
    const body = await request.json();
    const { contrato, email, nome, metodoPagamento, descontoPix } = body;

    // Calcular preço final
    const precoFinal = descontoPix ? contrato.preco * 0.95 : contrato.preco;

    // Configurar métodos de pagamento excluídos baseado na escolha
    let excludedPaymentTypes = [];
    if (metodoPagamento === 'pix') {
      excludedPaymentTypes = [
        { id: 'credit_card' },
        { id: 'debit_card' },
        { id: 'ticket' }
      ];
    } else if (metodoPagamento === 'cartao') {
      excludedPaymentTypes = [
        { id: 'ticket' }
      ];
    } else if (metodoPagamento === 'boleto') {
      excludedPaymentTypes = [
        { id: 'credit_card' },
        { id: 'debit_card' }
      ];
    }

    // Dados para a API do Mercado Pago
    const preferenceData = {
      items: [
        {
          title: contrato.nome,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: parseFloat(precoFinal.toFixed(2)),
          description: contrato.descricao,
        }
      ],
      payer: {
        email: email,
        name: nome,
      },
      payment_methods: {
        excluded_payment_types: excludedPaymentTypes,
        installments: 12 // Máximo de parcelas
      },
      back_urls: {
        success: `${process.env.NEXTAUTH_URL || 'https://contratosexpresso.com.br'}/obrigado`,
        failure: `${process.env.NEXTAUTH_URL || 'https://contratosexpresso.com.br'}/contratos`,
        pending: `${process.env.NEXTAUTH_URL || 'https://contratosexpresso.com.br'}/contratos`,
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

    // Chamar a API do Mercado Pago
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferenceData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao criar preferência de pagamento');
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      id: data.id,
      init_point: data.init_point,
      message: 'Pagamento criado com sucesso'
    });

  } catch (error) {
    console.error('Erro na integração com Mercado Pago:', error);
    
    return NextResponse.json(
      { 
        success: false,
        message: 'Erro ao processar pagamento. Tente novamente.',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

// Configurar CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
