import { useEffect } from 'react'
import { useLenis } from './hooks/useLenis'
import { useScrollTrigger } from './hooks/useScrollTrigger'
import { ScrollProvider } from './context/ScrollContext'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Cursor from './components/ui/Cursor'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import Market from './components/sections/Market'
import BusinessModel from './components/sections/BusinessModel'
import Financials from './components/sections/Financials'
import DeliveryEconomics from './components/sections/DeliveryEconomics'
import GoToMarket from './components/sections/GoToMarket'
import Competitive from './components/sections/Competitive'
import Team from './components/sections/Team'
import CTA from './components/sections/CTA'

function AppContent() {
  useLenis()
  useScrollTrigger()

  return (
    <div className="bg-navy text-white">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Market />
        <BusinessModel />
        <Financials />
        <DeliveryEconomics />
        <GoToMarket />
        <Competitive />
        <Team />
        <CTA />
      </main>
      <Footer />
      <Cursor />
    </div>
  )
}

export default function App() {
  return (
    <ScrollProvider>
      <AppContent />
    </ScrollProvider>
  )
}
