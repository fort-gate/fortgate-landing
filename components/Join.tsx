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
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setStatusMessage('Message sent successfully!')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        setStatus('error')
        setStatusMessage(data.error || 'Error sending message')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Error connecting to server')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-montserrat font-bold text-white mb-4">
            JOIN FORTGATE
          </h2>
          <div className="w-32 h-px bg-accent/50 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 font-montserrat font-normal">Real-Time Protection, Zero Friction.</p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="backdrop-blur-sm border border-accent/20 rounded-3xl p-8 md:p-12 space-y-6"
          style={{
            background: 'radial-gradient(circle at center, #403A5F 0%, #211E2E 100%)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border border-white/30 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
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
                className="w-full px-6 py-4 bg-transparent border border-white/30 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border border-white/30 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
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
                className="w-full px-6 py-4 bg-transparent border border-white/30 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border border-white/30 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell Us Something..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-6 py-4 bg-transparent border border-white/30 rounded-3xl text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors resize-none"
              required
            ></textarea>
          </div>

          {status !== 'idle' && (
            <div className={`text-center p-3 rounded-lg ${status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              {statusMessage}
            </div>
          )}

          <div className="flex justify-center pt-4">
            <PillButton type="submit" variant="gradient" disabled={isLoading}>
              {isLoading ? 'SENDING...' : 'SEND TO FORTGATE'}
            </PillButton>
          </div>
        </form>
      </div>
    </section>
  )
}

