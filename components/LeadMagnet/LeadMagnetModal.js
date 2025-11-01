'use client'
import { useState } from 'react'

export default function LeadMagnetModal({ isOpen, onClose, onSuccess }) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação - depois vamos integrar com email marketing
    setTimeout(() => {
      setIsLoading(false)
      onSuccess(email)
      
      // Download automático do PDF (vamos criar um PDF simples primeiro)
      const link = document.createElement('a')
      link.href = '/contrato-gratis.pdf'
      link.download = 'Contrato-Prestacao-Servicos-Dr-Reginaldo-Oliveira.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Contrato de Prestação de Serviços Grátis
          </h3>
          
          <p className="text-gray-600 mb-4">
            Preencha com seu email para receber <strong>gratuitamente</strong> o contrato profissional.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
            >
              {isLoading ? 'Enviando...' : 'QUERO MEU CONTRATO GRÁTIS →'}
            </button>
            
            <p className="text-xs text-gray-500">
              🔒 Seus dados estão protegidos. Sem spam.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
