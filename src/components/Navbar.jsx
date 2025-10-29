import { Github, Mail, Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold text-slate-800">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white">
            <Rocket size={18} />
          </span>
          <span>Alex Carter</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#skills" className="hover:text-slate-900">Skills</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-300 hover:border-slate-400 text-slate-700">
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800">
            <Mail size={16} />
            <span>Say hi</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
