import { useScroll } from '../../context/ScrollContext'
import Logo from '../ui/Logo'

export default function Footer() {
  const { scrollTo } = useScroll()

  return (
    <footer className="bg-navy-mid/30 py-24 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-6">
            <div
              onClick={() => scrollTo('#hero-section')}
              className="flex items-center gap-4 cursor-pointer group mb-8"
            >
              <Logo className="w-16 h-auto" />
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-[0.2em] leading-none text-white">MAJISMART</span>
              </div>
            </div>
            <p className="max-w-md text-sm text-muted/50 leading-relaxed font-light">
              Aggregating drinking water vendors + last-mile dispatch via bodaboda & e-bike,
              with M-Pesa payments and guaranteed quality controls. Nairobi first, then Africa.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-teal">Platform</h4>
              <ul className="space-y-2 text-xs text-muted/60 font-light">
                <li onClick={() => scrollTo('#problem-section')} className="hover:text-teal-bright cursor-pointer transition-colors">The Problem</li>
                <li onClick={() => scrollTo('#solution-section')} className="hover:text-teal-bright cursor-pointer transition-colors">Our Solution</li>
                <li onClick={() => scrollTo('#market-section')} className="hover:text-teal-bright cursor-pointer transition-colors">Market Size</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-teal">Company</h4>
              <ul className="space-y-2 text-xs text-muted/60 font-light">
                <li onClick={() => scrollTo('#team-section')} className="hover:text-teal-bright cursor-pointer transition-colors">Team</li>
                <li onClick={() => scrollTo('#gtm-section')} className="hover:text-teal-bright cursor-pointer transition-colors">Roadmap</li>
                <li onClick={() => scrollTo('#cta-section')} className="hover:text-teal-bright cursor-pointer transition-colors">Investment</li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-teal">Connect</h4>
              <ul className="space-y-2 text-xs text-muted/60 font-light">
                <li><a href="mailto:hello@majismart.co" className="hover:text-teal-bright transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-teal-bright transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-teal-bright transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5 opacity-40">
          <div className="font-mono text-[8px] uppercase tracking-[0.4em]">© 2026 MajiSmart Solutions Ltd.</div>
          <div className="flex gap-12 font-mono text-[8px] uppercase tracking-[0.4em]">
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  )
}
