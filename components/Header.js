'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">ContratosExpresso</span>
          </Link>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Início</Link>
            <Link href="/contratos" className="text-gray-600 hover:text-blue-600 transition-colors">Contratos</Link>
            <Link href="/artigos" className="text-gray-700 hover:text-blue-600 font-medium">Artigos</Link>
            <Link href="/como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">Como Funciona</Link>
            <Link href="/sobre" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</Link>
            <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="/contratos"
              className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Ver Contratos
            </Link>

            {/* Menu Mobile Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col py-4 space-y-3">
              <Link href="/" className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Início
              </Link>
              <Link href="/contratos" className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contratos
              </Link>
              <Link href="/como-funciona" className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Como Funciona
              </Link>
              <Link href="/sobre" className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </Link>
              <Link href="/faq" className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/contato" className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
              <div className="px-4 pt-2">
                <Link 
                  href="/contratos"
                  className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver Contratos
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
