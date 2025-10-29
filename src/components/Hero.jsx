import Spline from '@splinetool/react-spline'
import { MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 pt-10 lg:pt-16">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-slate-600 mb-3">
            <MapPin size={16} />
            <span>San Francisco, USA</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Alex Carter
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-slate-700">
            Full‑Stack Developer
          </p>
          <p className="mt-5 max-w-prose text-slate-600">
            I craft fast, accessible web apps with React, TypeScript, and cloud‑native
            architectures. I love shipping delightful UX with solid engineering.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">See projects</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-slate-300 text-slate-800 hover:border-slate-400">Contact</a>
          </div>
        </div>
        <div className="h-[360px] sm:h-[420px] lg:h-[520px] order-1 lg:order-2 rounded-xl overflow-hidden border border-slate-200 bg-white">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
