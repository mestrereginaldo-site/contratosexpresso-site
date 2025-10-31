import Header from '../components/Header'
import Hero from '../components/Hero'
import IABanner from '../components/IABanner'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <Header />
        <Hero />
        <IABanner />
        <Pricing />
        <Footer />
      </main>
    </>
  )
}
