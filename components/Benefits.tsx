export default function Benefits() {
  const benefits = [
    {
      title: 'Clean finance',
      description: 'Preventing illicit funds from entering your ecosystem.',
    },
    {
      title: 'Chain Integrity',
      description: 'Real-time risk detection that keeps your protocol clean and safe.',
    },
    {
      title: 'Institutional Confidence',
      description: 'Automated monitoring that unlocks safe institutional use.',
    },
  ]

  return (
    <section className="pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div 
          className="backdrop-blur-sm border border-accent/20 rounded-full shadow-lg shadow-purple-500/20 p-8 md:p-12 lg:p-16"
          style={{
            background: 'linear-gradient(to right, #262234 0%, #2F295F 50%, #262234 100%)'
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                {/* Content */}
                <div className="flex-1 text-center px-4 md:px-6 lg:px-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Separator */}
                {index < benefits.length - 1 && (
                  <>
                    {/* Vertical separator for desktop */}
                    <div className="hidden md:block w-px h-20 bg-white/20 mx-2 lg:mx-4 flex-shrink-0"></div>
                    {/* Horizontal separator for mobile */}
                    <div className="md:hidden w-3/4 h-px bg-white/20 my-6"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

