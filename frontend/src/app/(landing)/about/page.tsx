import Link from 'next/link'

const features = [
  {
    title: 'Coordinator-led teams',
    accent: 'var(--accent)',
    body: 'A master agent receives your requests, breaks work into tasks, and routes them to the right specialists. You talk to one coordinator; the team handles the rest.',
  },
  {
    title: 'Specialized agents',
    accent: '#bc8cff',
    body: 'Each agent has its own role, identity, memory, and workspace. The default ACE template ships with coordinator, developer, designer, and tester agents ready to collaborate.',
  },
  {
    title: 'Sandboxed runtime',
    accent: 'var(--color-success)',
    body: 'Agents run in isolated Docker containers spawned by the backend. Each container connects to your LLM, loads its personality from agent-arch, and communicates over a shared notification bus.',
  },
  {
    title: 'Chat through Open WebUI',
    accent: 'var(--color-warning)',
    body: 'Conversations happen in Open WebUI, embedded in the dashboard. Messages flow through the backend so agents can reply, update task status, and coordinate with each other.',
  },
]

const steps = [
  'Create a team from a template (e.g. ACE Development Team)',
  'Wait for agent containers to pass health checks',
  'Configure your LLM provider in Settings',
  'Chat with the coordinator and assign work to the team',
]

const sectionStyle: React.CSSProperties = { marginBottom: 48 }
const h2Style: React.CSSProperties = { fontSize: 22, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 16 }
const bodyStyle: React.CSSProperties = { fontSize: 15, lineHeight: 1.75, color: 'var(--text-secondary)' }
const codeStyle: React.CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", monospace',
  fontSize: 13,
  color: 'var(--text-code)',
  background: 'var(--bg-card)',
  padding: '2px 6px',
  borderRadius: 4,
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <header style={{ padding: '40px 24px 32px', borderBottom: '1px solid var(--border-default)', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>About Clawborate</h1>
          <Link href="/" style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            ← Back to home
          </Link>
        </div>
      </header>

      <main style={{ padding: '48px 24px 64px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <section style={sectionStyle}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
              Community Edition
            </p>
            <h2 style={{ ...h2Style, fontSize: 26, marginBottom: 12 }}>AI agent teams you can run locally</h2>
            <p style={bodyStyle}>
              Clawborate is a platform for creating and managing collaborative AI agent teams.
              Define roles, assign tasks through a coordinator, and watch specialists work together —
              each with its own identity, memory, and tools inside a disposable Docker environment.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>How it works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {features.map((f) => (
                <div
                  key={f.title}
                  className="card"
                  style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: f.accent, margin: 0 }}>{f.title}</h3>
                  <p style={{ ...bodyStyle, fontSize: 14, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Getting started</h2>
            <p style={{ ...bodyStyle, marginBottom: 20 }}>
              The community edition runs entirely with Docker Compose. After{' '}
              <code style={codeStyle}>docker compose up -d</code>, you can:
            </p>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {steps.map((step, i) => (
                <li
                  key={step}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)' }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: 'rgba(88,166,255,0.15)',
                      color: 'var(--accent)',
                      fontSize: 13,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ paddingTop: 4 }}>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Customize your agents</h2>
            <p style={bodyStyle}>
              Agent definitions live in <code style={codeStyle}>agent-arch/openclaw/</code>.
              Edit each agent&apos;s identity, personality (<code style={codeStyle}>SOUL.md</code>),
              and memory, or add new team templates. Changes take effect when you create a new team.
              The directory is mounted read-only into the backend container.
            </p>
          </section>

          <section
            className="card"
            style={{ padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
          >
            <h2 style={{ ...h2Style, marginBottom: 0 }}>Ready to spin up a team?</h2>
            <p style={{ ...bodyStyle, maxWidth: 420, margin: 0 }}>
              Sign in, pick a template, and start coordinating your first multi-agent workflow in minutes.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 8 }}>
              <Link href="/login" className="btn-primary" style={{ padding: '10px 24px' }}>
                Sign in
              </Link>
              <Link href="/register" className="btn-secondary" style={{ padding: '10px 24px' }}>
                Create account
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer style={{ padding: '24px', borderTop: '1px solid var(--border-default)', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0 }}>© 2026 Clawborate. Community Edition.</p>
      </footer>
    </div>
  )
}