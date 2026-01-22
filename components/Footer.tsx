import Image from 'next/image'

export default function Footer() {

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 mb-12">
          {/* Logo Column */}
          <div className="space-y-4 flex-1">
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

          {/* Divider 1 - Hidden on mobile */}
          <div className="hidden md:flex items-center px-6 lg:px-8">
            <Image
              src="/images/Vector 20.png"
              alt=""
              width={2}
              height={120}
              className="h-28 lg:h-32 w-auto"
            />
          </div>

          {/* Navigation Column 1 */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-4 text-[16px]">NAVIGATION</h4>
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
                <a href="/blog" className="text-white/70 hover:text-accent transition-colors text-sm">
                  BLOG
                </a>
              </li>
              
              
            </ul>
          </div>

          {/* Divider 2 - Hidden on mobile */}
          <div className="hidden md:flex items-center px-6 lg:px-8">
            <Image
              src="/images/Vector 20.png"
              alt=""
              width={2}
              height={120}
              className="h-28 lg:h-32 w-auto"
            />
          </div>

          {/* Navigation Column 2 */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-4 text-[16px]">MORE INFORMATION</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  F.A.Q
                </a>
              </li>
            </ul>
          </div>

          {/* Divider 3 - Hidden on mobile */}
          <div className="hidden md:flex items-center px-6 lg:px-8">
            <Image
              src="/images/Vector 20.png"
              alt=""
              width={2}
              height={120}
              className="h-28 lg:h-32 w-auto"
            />
          </div>

          {/* Social Media Column */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-4 text-[16px]">SOCIALIZE WITH FORTGATE</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/company/fortgate-aml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </a>
            </div>
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

