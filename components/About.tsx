import Image from 'next/image'
import PillButton from './PillButton'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <h2 className="text-[40px] font-montserrat font-bold text-white">
              INTRODUCTION
              <br />
              <span className="text-accent">To Fortgate</span>
            </h2>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/Icono2.png"
                alt="Fortgate Introduction"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6">
            <h3 className="text-[40px] font-montserrat font-bold text-white">ABOUT Fortgate</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Fortgate provides intelligent AML infrastructure that protects protocols and empowers institutions to operate safely on-chain. We protect crypto protocols from illicit funds, enabling safe on-chain operations, and providing real-time checks against blacklists and risk scores. We keep ecosystems clean for broader institutional adoption.
            </p>
            <PillButton variant="gradient">
              LET&apos;S GET IN
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}

