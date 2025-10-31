import Header from '../../components/Header'
import Footer from '../../components/Footer'

const faqItems = [
  {
    pergunta: "Por que comprar um contrato se existem IAs que podem gerar?",
    resposta: `Excelente pergunta! As IAs são ferramentas incríveis, mas têm limitações críticas quando se trata de documentos jurídicos:

• **Falta de contexto jurídico brasileiro**: IAs treinadas internacionalmente não conhecem nuances da legislação brasileira
• **Risco de cláusulas inválidas**: Podem incluir dispositivos não aplicáveis no Brasil
• **Ausência de jurisprudência**: Não consideram decisões recentes dos tribunais
• **Responsabilidade**: Se algo der errado, você não tem ninguém para recorrer
• **Atualização constante**: Leis mudam frequentemente - nossos contratos são sempre atualizados

Nossos contratos são criados por advogado especialista com 10+ anos de experiência, testados na prática e atualizados conforme mudanças legais.`
  },
  {
    pergunta: "Os contratos são legalmente válidos?",
    resposta: "Sim, todos os nossos contratos são desenvolvidos por advogado especialista e estão em conformidade com a legislação brasileira. Eles são documentos jurídicos válidos e podem ser usados em qualquer negócio."
  },
  {
    pergunta: "Como recebo o contrato após a compra?",
    resposta: "Imediatamente após a confirmação do pagamento, o contrato é enviado para o email cadastrado em formato Word (.docx) e PDF, permitindo total personalização."
  },
  {
    pergunta: "Posso modificar o contrato após a compra?",
    resposta: "Sim, o contrato é enviado em formato editável (Word) para que você possa adaptar às suas necessidades específicas. Recomendamos apenas manter a estrutura jurídica essencial."
  },
  {
    pergunta: "E se eu tiver dúvidas sobre como usar o contrato?",
    resposta: "Oferecemos suporte por email por 30 dias após a compra. Nossos especialistas estão disponíveis para tirar dúvidas sobre preenchimento e aplicação do contrato."
  },
  {
    pergunta: "Qual a diferença entre o contrato avulso e a assinatura?",
    resposta: "O contrato avulso é uma compra única de um modelo específico. A assinatura dá acesso a todos os modelos de contrato, atualizações e suporte prioritário."
  },
  {
    pergunta: "Os contratos são atualizados?",
    resposta: "Sim, mantemos todos os contratos atualizados com as últimas mudanças na legislação. Clientes que adquirem contratos avulsos recebem atualizações gratuitas por 1 ano."
  },
  {
    pergunta: "Como funciona o reembolso?",
    resposta: "Oferecemos garantia de 7 dias. Se você não ficar satisfeito, devolvemos 100% do valor pago. Basta nos enviar um email dentro desse prazo."
  },
  {
    pergunta: "Preciso ser advogado para usar os contratos?",
    resposta: "Não, os contratos são feitos para que qualquer pessoa possa usar. Eles vêm com instruções de preenchimento e nosso suporte está disponível para ajudar."
  }
]

export default function FAQ() {
  return (
    <main>
      <Header />
      
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos contratos e como podemos ajudar seu negócio.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                  {item.pergunta}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.resposta}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 md:p-8 mt-12 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-gray-700 mb-6">
              Entre em contato conosco e responderemos o mais rápido possível.
            </p>
            <a 
              href="mailto:contato@contratosexpresso.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
