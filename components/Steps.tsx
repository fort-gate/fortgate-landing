export default function Steps() {
  const steps = [
    { number: '01', title: 'Receive Transaction' },
    { number: '02', title: 'Run Checks' },
    { number: '03', title: 'Approve or Reject' },
    { number: '04', title: 'Notify Protocol' },
  ]

  return (
    <section id="how-to" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center space-x-4">
            <h2 className="text-[24px] font-montserrat font-bold text-white">
              HOW WE WORK
              <br />
              <span className="text-accent">WITH FORTGATE?</span>
            </h2>
            <svg className="hidden md:block w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-white/90 leading-relaxed">
              Fortgate analyzes every incoming transaction in real-time, checking it against blacklists, risk engines, and custom policies to ensure only clean funds enter the ecosystem.
            </p>
          </div>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center mb-4 border-4 border-primary shadow-lg">
                    <span className="text-primary font-bold text-xl md:text-2xl">{step.number}</span>
                  </div>
                  
                  {/* Arrow (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-accent/30 transform translate-x-1/2">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-accent/30 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </div>
                  )}

                  {/* Step Title */}
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm md:text-base">
                      → {step.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="md:hidden flex justify-center space-x-4 mt-4">
            {steps.slice(0, -1).map((_, index) => (
              <svg
                key={index}
                className="w-6 h-6 text-accent/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

