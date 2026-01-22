'use client'

export default function FlowSteps() {
  const steps = [
    { number: '01', title: 'Receive Transaction' },
    { number: '02', title: 'Run Checks' },
    { number: '03', title: 'Approve or Reject' },
    { number: '04', title: 'Notify Protocol' },
  ]

  // Posiciones de los círculos en porcentaje (para la línea SVG)
  const circlePositions = [12.5, 37.5, 62.5, 87.5] // Distribución uniforme

  return (
    <section id="how-to" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
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
              Fortgate analyzes every incoming transaction in real-time, checking it against blacklists, risk engines, and custom policies before it reaches your protocol, ensuring only clean funds enter your ecosystem.
            </p>
          </div>
        </div>

        {/* Flow Steps with Animated Wave */}
        <div className="relative w-full">
          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:block relative w-full h-64">
            {/* SVG Wave Line */}
            <svg
              className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Gradient for energy glow */}
                <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9187BE" stopOpacity="0" />
                  <stop offset="30%" stopColor="#C0B7E8" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#C0B7E8" stopOpacity="1" />
                  <stop offset="70%" stopColor="#C0B7E8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#9187BE" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Base wave path */}
              <path
                id="wavePath"
                d="M 0 100 Q 125 50, 250 100 T 500 100 T 750 100 T 1000 100"
                fill="none"
                stroke="rgba(145, 135, 190, 0.3)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              
              {/* Animated energy path - travels the full length from left to right */}
              <path
                d="M 0 100 Q 125 50, 250 100 T 500 100 T 750 100 T 1000 100"
                fill="none"
                stroke="url(#energyGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="60 940"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="1000;0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>

            {/* Step Circles */}
            {steps.map((step, index) => (
              <div
                key={index}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${circlePositions[index]}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="flex flex-col items-center">
                  {/* Circle with gradient and border */}
                  <div className="relative w-24 h-24 mb-4">
                    {/* Outer dark ring */}
                    <div className="absolute inset-0 rounded-full bg-primary border-4 border-accent/20 shadow-lg"></div>
                    
                    {/* Inner gradient circle */}
                    <div
                      className="absolute inset-2 rounded-full flex items-center justify-center shadow-inner"
                      style={{
                        background: 'linear-gradient(135deg, #C0B7E8 0%, #9187BE 100%)',
                      }}
                    >
                      <span className="text-primary font-bold text-2xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <div className="text-center mt-2">
                    <p className="text-white font-semibold text-[24px] whitespace-nowrap">
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-6">
                {/* Circle */}
                <div className="relative flex-shrink-0">
                  <div className="relative w-20 h-20">
                    {/* Outer dark ring */}
                    <div className="absolute inset-0 rounded-full bg-primary border-4 border-accent/20 shadow-lg"></div>
                    
                    {/* Inner gradient circle */}
                    <div
                      className="absolute inset-2 rounded-full flex items-center justify-center shadow-inner"
                      style={{
                        background: 'linear-gradient(135deg, #C0B7E8 0%, #9187BE 100%)',
                      }}
                    >
                      <span className="text-primary font-bold text-xl">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Connecting line (except last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-accent/30">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-accent/30"></div>
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="flex-1">
                  <p className="text-white font-semibold text-[24px]">{step.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

