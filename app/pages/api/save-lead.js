export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, artigo } = req.body;

    try {
      // 1. Salvar no console (para você ver os leads)
      console.log('🎯 NOVO LEAD CAPTURADO:');
      console.log('Email:', email);
      console.log('Artigo:', artigo);
      console.log('Data:', new Date().toLocaleString('pt-BR'));
      console.log('---');

      // 2. Enviar email para contato@contratosexpresso.com.br
      const emailData = {
        to: 'contato@contratosexpresso.com.br',
        from: 'leads@contratosexpresso.com.br', // ou seu email de envio
        subject: `🎯 NOVO LEAD - ${artigo}`,
        text: `
          NOVO LEAD CAPTURADO NO SITE:
          
          Email: ${email}
          Artigo: ${artigo}
          Data: ${new Date().toLocaleString('pt-BR')}
          URL: https://contratosexpresso.com.br
        `,
        html: `
          <h2>🎯 NOVO LEAD CAPTURADO NO SITE</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Artigo:</strong> ${artigo}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          <p><strong>URL:</strong> https://contratosexpresso.com.br</p>
        `
      };

      // Aqui você pode integrar com:
      // - SendGrid
      // - Mailchimp
      // - Resend.com
      // - Ou seu próprio servidor SMTP

      // Por enquanto, vamos apenas logar e retornar sucesso
      // Depois me avise qual serviço de email você quer usar

      res.status(200).json({ 
        success: true, 
        message: 'Lead salvo com sucesso' 
      });
      
    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Erro interno do servidor' 
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
