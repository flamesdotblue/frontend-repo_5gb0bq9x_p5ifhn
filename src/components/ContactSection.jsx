import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form)
    // In this sandbox we just simulate a submission
    setStatus('Sending...')
    setTimeout(() => {
      setStatus(`Thanks ${payload.name}, I will get back to you soon!`)
      e.currentTarget.reset()
    }, 800)
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-14">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Let’s work together</h2>
        <p className="text-slate-600 mt-1">Have a project in mind or just want to say hi?</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <label className="text-sm text-slate-700" htmlFor="name">Name</label>
            <input id="name" name="name" required className="h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
          </div>
          <div className="grid gap-1.5">
            <label className="text-sm text-slate-700" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
          </div>
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm text-slate-700" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required className="px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>
        <button type="submit" className="inline-flex items-center gap-2 justify-center h-10 px-4 rounded-md bg-slate-900 text-white hover:bg-slate-800">
          <Mail size={16} /> Send message
        </button>
        {status && <p className="text-sm text-emerald-700">{status}</p>}
      </form>
    </section>
  )
}
