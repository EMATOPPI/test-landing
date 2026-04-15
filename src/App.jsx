import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-cyan-400"> Jarvis</span>AI
        </div>
        <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
      </nav>

      <main className="max-w-4xl mx-auto px-8 pt-24 pb-32 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8">
          Deployment test — Jarvis AI is live
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Tu asistente de desarrollo
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            siempre activo
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          Desarrollo, despliegue y más — solo decime qué necesitás y lo hago.
          Sin clicks, sin configuración manual.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition"
            >
              Probar ahora
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-green-400/10 border border-green-400/20 text-green-400 font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            ¡Recibido! Te contactamos pronto.
          </div>
        )}
      </main>

      <section id="features" className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: '⚡', label: 'Desarrollo rápido', desc: 'React, Supabase, Cloudflare. Deploy en minutos, no horas.' },
            { title: '🤖', label: 'Automatización total', desc: 'Dame una instrucción y ejecuto. Vos solo aprobás el resultado.' },
            { title: '🔒', label: 'Infraestructura limpia', desc: 'VPS optimizada, sin cosas innecesarias, lista para producir.' },
          ].map(({ title, label, desc }) => (
            <div key={label} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/20 transition">
              <div className="text-3xl mb-3">{title}</div>
              <div className="text-lg font-semibold mb-2">{label}</div>
              <div className="text-slate-400 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
