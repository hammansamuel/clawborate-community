import Link from 'next/link'

const features = [
  {
    title: 'Coordinator-led teams',
    color: 'text-blue-400',
    body: 'A master agent receives your requests, breaks work into tasks, and routes them to the right specialists. You talk to one coordinator; the team handles the rest.',
  },
  {
    title: 'Specialized agents',
    color: 'text-purple-400',
    body: 'Each agent has its own role, identity, memory, and workspace. The default ACE template ships with coordinator, developer, designer, and tester agents ready to collaborate.',
  },
  {
    title: 'Sandboxed runtime',
    color: 'text-green-400',
    body: 'Agents run in isolated Docker containers spawned by the backend. Each container connects to your LLM, loads its personality from agent-arch, and communicates over a shared notification bus.',
  },
  {
    title: 'Chat through Open WebUI',
    color: 'text-amber-400',
    body: 'Conversations happen in Open WebUI, embedded in the dashboard. Messages flow through the backend so agents can reply, update task status, and coordinate with each other.',
  },
]

const steps = [
  'Create a team from a template (e.g. ACE Development Team)',
  'Wait for agent containers to pass health checks',
  'Configure your LLM provider in Settings',
  'Chat with the coordinator and assign work to the team',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-4xl font-bold text-white">About Clawborate</h1>
          <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-16">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-3">Community Edition</p>
            <h2 className="text-2xl font-semibold text-white mb-4">AI agent teams you can run locally</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Clawborate is a platform for creating and managing collaborative AI agent teams.
              Define roles, assign tasks through a coordinator, and watch specialists work together —
              each with its own identity, memory, and tools inside a disposable Docker environment.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-6 bg-slate-800/80 rounded-lg border border-slate-700/50">
                  <h3 className={`text-lg font-semibold mb-2 ${f.color}`}>{f.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">Getting started</h2>
            <p className="text-slate-300 mb-6">
              The community edition runs entirely with Docker Compose. After <code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded text-sm">docker compose up -d</code>, you can:
            </p>
            <ol className="space-y-3">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-slate-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">Customize your agents</h2>
            <p className="text-slate-300 leading-relaxed">
              Agent definitions live in <code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded text-sm">agent-arch/openclaw/</code>.
              Edit each agent&apos;s identity, personality (<code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded text-sm">SOUL.md</code>),
              and memory, or add new team templates. Changes take effect when you create a new team.
              The directory is mounted read-only into the backend container.
            </p>
          </section>

          <section className="text-center p-8 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <h2 className="text-2xl font-semibold text-white mb-3">Ready to spin up a team?</h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Sign in, pick a template, and start coordinating your first multi-agent workflow in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
              >
                Create account
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-8 bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">© 2026 Clawborate. Community Edition.</p>
        </div>
      </footer>
    </div>
  )
}