export default function Features() {
  const features = [
    {
      title: 'Compliance',
      description: 'Ensures your protocol meets essential regulatory standards for safe on-chain operation.',
    },
    {
      title: 'Protection',
      description: 'Shields your ecosystem from illicit or high-risk funds entering the protocol.',
    },
    {
      title: 'Screening',
      description: 'Performs real-time checks against blacklists, risk databases, and custom policies before accepting any transaction.',
    },
    {
      title: 'Automation',
      description: 'Handles the entire AML process automatically, reducing manual work and avoiding friction for users.',
    },
  ]

  return (
    <section id="products" className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center space-x-4">
            <h2 className="text-[40px] font-montserrat font-bold text-white">
              WHY CHOOSE FORTGATE?
            </h2>
            <svg className="hidden md:block w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-white/90 leading-relaxed">
              Fortgate provides a real-time compliance layer, protecting protocols from illicit funds with automated checks against OFAC lists, stablecoin blacklists, Chainalysis risk scores, and custom policies.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-3xl shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              style={{
                background: 'linear-gradient(to bottom, #2c2753 0%, #1f1a3a 100%)',
                border: '1px solid rgba(145, 135, 190, 0.1)'
              }}
            >
              {/* Title */}
              <h3 className="text-[24px] font-montserrat font-bold text-white mb-4">
                {feature.title}
              </h3>

              {/* Divider Line */}
              <div className="w-3/4 h-px bg-accent/30 mb-6"></div>

              {/* Description */}
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

