'use client'

import { useState } from 'react'
import PillButton from './PillButton'

export default function Join() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            JOIN FORTGATE
          </h2>
          <p className="text-xl text-white/90">Real-Time Protection, Zero Friction.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-primary/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 md:p-12 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/50 border-2 border-accent/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/50 border-2 border-accent/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-primary/50 border-2 border-accent/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-primary/50 border-2 border-accent/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-primary/50 border-2 border-accent/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell Us Something"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-primary/50 border-2 border-accent/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors resize-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <PillButton type="submit" variant="gradient">
              SEND TO FORTGATE
            </PillButton>
          </div>
        </form>
      </div>
    </section>
  )
}

