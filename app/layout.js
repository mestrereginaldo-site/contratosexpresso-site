import { AuthProvider } from './context/AuthContext';  // ← ADICIONE ESTA LINHA
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: {
    default: 'Contratos Expresso - Modelos Prontos com IA | Download Imediato',
    template: '%s | Contratos Expresso'
    },
    description: 'Contratos jurídicos prontos para usar. Desenvolvidos por advogados. Baixe em 5 minutos. Contrato de Prestação de Serviços,',
    keywords: 'contratos prontos, modelo contrato, contrato prestação serviços, contrato trabalho PJ, NDA, contrato parceria, contrato deser',
    authors: [{ name: 'Contratos Expresso' }],
    creator: 'Contratos Expresso',
    publisher: 'Contratos Expresso',
    metadataBase: new URL('https://contratosexpresso.com.br'),
    openGraph: {
    title: 'Contratos Expresso - Modelos Prontos com IA',
    description: 'Contratos jurídicos prontos para usar. Desenvolvidos por advogados. Baixe em 5 minutos.',
    type: 'website',
    locale: 'pt_BR',
    },
    twitter: {
    card: 'summary_large_image',
    title: 'Contratos Expresso - Modelos Prontos com IA',
    description: 'Contratos jurídicos prontos para usar. Desenvolvidos por advogados.',
    },
    robots: {
    index: true,
    follow: true,
    googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
    },
    },
}

// MANTENHA TUDO IGUAL, SÓ ADICIONE O AuthProvider AQUI ↓
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>  {/* ← ADICIONE ESTA LINHA */}
          {children}
        </AuthProvider>  {/* ← E ESTA LINHA */}
      </body>
    </html>
  );
}
