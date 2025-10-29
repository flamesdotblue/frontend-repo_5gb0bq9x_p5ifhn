import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <Navbar />
      <main className="relative">
        <Hero />
        <section id="skills" className="max-w-6xl mx-auto px-4 py-14">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Skills</h2>
            <p className="text-slate-600 mt-1">A focused set of tools I use to ship quality software.</p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'].map((skill) => (
              <li key={skill} className="px-3 py-2 rounded-md border border-slate-200 bg-white text-center text-sm">{skill}</li>
            ))}
          </ul>
        </section>
        <ProjectsGrid />
        <ContactSection />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Alex Carter. All rights reserved.
      </footer>
    </div>
  )
}

export default App
