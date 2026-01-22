import Image from 'next/image'
import PillButton from './PillButton'

export default function Hero() {
  return (
    <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-[40px] font-montserrat font-bold text-white leading-tight">
              <span style={{ color: '#B9B0E2' }}>Compliance</span> is the missing piece for <span style={{ color: '#B9B0E2' }}>Crypto&apos;s</span> Mass <span style={{ color: '#B9B0E2' }}>Adoption</span>.
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl font-montserrat font-normal">
              Fortgate provides intelligent AML infrastructure that protects protocols and empowers institutions to operate safely on-chain.
            </p>
            <div className="flex items-center space-x-4">
              
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/Icono1.png"
                alt="Fortgate Hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

