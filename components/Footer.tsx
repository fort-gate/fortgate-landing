import PillButton from './PillButton'
import Image from 'next/image'

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: 'F' },
    { name: 'Twitter', icon: 'T' },
    { name: 'LinkedIn', icon: 'L' },
    { name: 'YouTube', icon: 'Y' },
    { name: 'Instagram', icon: 'I' },
    { name: 'Medium', icon: 'M' },
    { name: 'Telegram', icon: 'TG' },
  ]

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="relative h-16 w-48 sm:h-20 sm:w-56 md:h-24 md:w-64">
              <Image
                src="/images/logolila.png"
                alt="Fortgate Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-white/70 text-sm">
              Intelligent AML infrastructure for crypto ecosystems.
            </p>
          </div>

          {/* Navigation Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-accent transition-colors text-sm">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-accent transition-colors text-sm">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-white/70 hover:text-accent transition-colors text-sm">
                  TECHNOLOGIES
                </a>
              </li>
              <li>
                <a href="#how-to" className="text-white/70 hover:text-accent transition-colors text-sm">
                  HOW TO
                </a>
              </li>
              <li>
                <a href="#join" className="text-white/70 hover:text-accent transition-colors text-sm">
                  JOIN FORTGATE
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  F.A.Q
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  SITEMAP
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  CONDITIONS
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  LICENSES
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">SOCIALIZE WITH FORTGATE</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-accent/20 border border-accent/30 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors text-xs font-semibold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <PillButton variant="gradient" className="text-sm">
              LET&apos;S GET IN
            </PillButton>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-accent/20 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Fortgate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

