import { AuthProvider } from './context/AuthContext';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: {
        default: 'Contratos Expresso - Modelos Prontos com IA | Download Imediato',
        template: '%s | Contratos Expresso'
    },
    description: 'Contratos jurídicos prontos para usar. Desenvolvidos por advogados. Baixe em 5 minutos. Contrato de Prestação de Serviços, contrato trabalho PJ, NDA, contrato parceria, contrato desenvolvimento software.',
    keywords: 'contratos prontos, modelo contrato, contrato prestação serviços, contrato trabalho PJ, NDA, contrato parceria, contrato desenvolvimento software',
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
    icons: {
        icon: '/favicon.svg',  // CORRIGIDO: usando o SVG que você tem
        shortcut: '/favicon.svg',
        apple: '/favicon.svg', // Usando o mesmo SVG para Apple também
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body className={inter.className}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    )
}
