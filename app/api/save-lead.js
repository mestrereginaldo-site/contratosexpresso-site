import { Resend } from 'resend';

// Inicializa o Resend com a chave da API
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, artigo } = req.body;

    // Validação básica
    if (!email || !artigo) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email e artigo são obrigatórios' 
      });
    }

    try {
      console.log('🎯 NOVO LEAD CAPTURADO:');
      console.log('Email:', email);
      console.log('Artigo:', artigo);
      console.log('Data:', new Date().toLocaleString('pt-BR'));

      // ENVIAR EMAIL VIA RESEND - DIRETO PARA SEU EMAIL
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM || 'ContratosExpresso <contato@contratosexpresso.com.br>',
        to: ['contato@contratosexpresso.com.br'], // SEU EMAIL PRINCIPAL
        subject: `🎯 NOVO LEAD - ${artigo}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; }
              .lead-info { background: white; padding: 15px; border-radius: 5px; margin: 10px 0; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎯 NOVO LEAD CAPTURADO</h1>
                <p>ContratosExpresso.com.br</p>
              </div>
              <div class="content">
                <div class="lead-info">
                  <h3>📧 Informações do Lead:</h3>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Artigo de Origem:</strong> ${artigo}</p>
                  <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
                  <p><strong>URL:</strong> https://contratosexpresso.com.br</p>
                </div>
                
                <div style="background: #dcfce7; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <h4 style="color: #166534; margin: 0;">💡 Ação Recomendada:</h4>
                  <p style="margin: 5px 0 0 0; color: #166534;">
                    Este lead baixou o contrato gratuito. Entre em contato em até 24h para oferecer consultoria ou pacotes completos.
                  </p>
                </div>
              </div>
              <div class="footer">
                <p>Enviado automaticamente pelo sistema de leads do ContratosExpresso</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
          NOVO LEAD CAPTURADO - CONTRATOSEXPRESSO
          
          📧 Email: ${email}
          📄 Artigo: ${artigo}
          📅 Data: ${new Date().toLocaleString('pt-BR')}
          🌐 URL: https://contratosexpresso.com.br
          
          💡 AÇÃO: Este lead baixou o contrato gratuito. Entre em contato em até 24h.
        `
      });

      if (error) {
        console.error('❌ Erro ao enviar email via Resend:', error);
        return res.status(500).json({ 
          success: false, 
          message: 'Erro ao enviar email' 
        });
      }

      console.log('✅ Email enviado com sucesso via Resend');

      res.status(200).json({ 
        success: true, 
        message: 'Lead salvo e email enviado com sucesso' 
      });
      
    } catch (error) {
      console.error('❌ Erro ao salvar lead:', error);
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
