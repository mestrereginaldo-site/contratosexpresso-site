'use client'
import { useState } from 'react'
import LeadMagnetModal from './LeadMagnetModal'

export default function LeadMagnetCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSuccess = (email) => {
    console.log('Lead capturado:', email)
    // Aqui você pode adicionar Google Analytics depois
  }

  return (
    <>
      {/* Este é o componente que aparece no final dos artigos */}
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 shadow-lg">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Modelo Pronto do Contrato de Prestação de Serviços
          </h3>
          
          <p className="text-gray-700 mb-6 text-lg">
            <strong>Grátis:</strong> Receba o contrato profissional desenvolvido por <strong>Dr. Reginaldo Oliveira</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Juridicamente Válido</h4>
                <p className="text-gray-600 text-sm">Baseado no Código Civil</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Pronto para Usar</h4>
                <p className="text-gray-600 text-sm">Apenas preencha os campos</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg"
          >
            📥 BAIXAR CONTRATO GRÁTIS AGORA
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            ⚡ Download imediato • 🔒 100% Gratuito
          </p>
        </div>
      </div>

      <LeadMagnetModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
      />
    </>
  )
}
