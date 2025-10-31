export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Contratos Expresso',
    description: 'Modelos de contratos jurídicos prontos para uso imediato',
    url: 'https://contratosexpresso.com.br',
    telephone: '+55-11-99999-9999',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
    offers: {
      '@type': 'Offer',
      description: 'Modelos de contratos jurídicos',
    },
    knowsAbout: ['Direito Civil', 'Direito Empresarial', 'Direito Digital', 'Contratos'],
    serviceType: 'Modelos de contratos jurídicos',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
