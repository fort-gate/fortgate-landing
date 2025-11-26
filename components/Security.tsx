import Image from 'next/image'

export default function Security() {
  return (
    <section id="technologies" className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
            <Image
              src="/images/icono3.png"
              alt="Crypto Security BY FORTGATE"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

