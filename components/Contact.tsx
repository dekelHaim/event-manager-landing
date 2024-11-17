'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // Explicit type for event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  // Explicit type for event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('תודה על פנייתך! נחזור אליך בהקדם.')
  }

  return (
    <section id="contact" className="py-20 bg-soft-green">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">יצירת קשר</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="name"
              placeholder="שם מלא"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="כתובת אימייל"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="מספר טלפון"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="הודעה"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full">שלח הודעה</Button>
          </form>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">פרטי התקשרות</h3>
              <p>טלפון: 054-1234567</p>
              <p>אימייל: info@perfect-events.co.il</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">עקבו אחרינו</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a 
                  href="https://www.facebook.com/Eitanevents" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary"
                >
                  <Facebook />
                </a>
                <a 
                  href="https://www.instagram.com/eitanevents?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
