import { useState } from 'react'
import './styles.css'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-0 py-0 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-0">
          <img src="./logo-v4a.png" alt="OrbSea" className="h-30 w-auto" />
          <img src={`${import.meta.env.BASE_URL}logo-v4a.png`} />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
          <a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a>
          <a href="#locations" className="hover:text-white transition-colors">Locations</a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628' }}
          >
            Enquire Now
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium text-slate-300 border-t border-white/10">
          <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-white pt-3">Experience</a>
          <a href="#amenities" onClick={() => setMenuOpen(false)} className="hover:text-white">Amenities</a>
          <a href="#sustainability" onClick={() => setMenuOpen(false)} className="hover:text-white">Sustainability</a>
          <a href="#locations" onClick={() => setMenuOpen(false)} className="hover:text-white">Locations</a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 rounded-full text-sm font-semibold text-center"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628' }}
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-dome.png"
          alt="OrbSea Luxury Ocean Dome"
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-32 w-full">
        <div className="max-w-3xl fade-in-up">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#c9a84c' }}
          >
            Luxury Ocean Living
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-white mb-6">
            Life on the<br />
            <span className="gold-gradient italic">Open Water</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
            OrbSea redefines ocean hospitality. Private floating domes, where
            modern comfort meets infinite horizon — crafted for those who seek
            something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold text-center transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628' }}
            >
              Book Your Escape
            </a>
            <a
              href="#experience"
              className="px-8 py-4 rounded-full font-semibold text-center border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { value: '8m', label: 'Dome Diameter' },
    { value: '360°', label: 'Panoramic Views' },
    { value: '100%', label: 'Off-Grid Capable' },
    { value: '∞', label: 'Ocean Horizon' },
  ]

  return (
    <section className="py-16 border-y border-white/5" style={{ background: 'rgba(13,37,69,0.8)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-5xl font-light gold-gradient mb-1">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#c9a84c' }}>
              The OrbSea Experience
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              Where <span className="italic">calm</span><br />
              meets the sea
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              Imagine waking to the gentle motion of open water, sunlight filtering through
              panoramic glass, and nothing but ocean stretching to the horizon. OrbSea domes
              are private sanctuaries — fully self-contained floating retreats designed for
              deep rest, reconnection, and wonder.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Each dome's single-level layout maximises the sense of space within its
              8-metre diameter. Large curved windows dissolve the boundary between interior
              comfort and the living seascape outside, flooding the space with natural light
              throughout the day.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Private & Secluded',
                'Natural Light-Filled',
                'Climate Responsive',
                'Acoustically Serene',
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#c9a84c' }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="float-anim">
              <div
                className="relative rounded-3xl overflow-hidden aspect-square"
                style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(14,116,144,0.15)' }}
              >
                <img
                  src="/hero-dome.png"
                  alt="OrbSea dome interior and exterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
              </div>
            </div>
            <div
              className="absolute -bottom-4 -left-4 card-glass rounded-2xl p-4 text-sm"
              style={{ border: '1px solid rgba(201,168,76,0.2)' }}
            >
              <div className="font-semibold text-white mb-0.5">Floating Architecture</div>
              <div className="text-slate-400 text-xs">HDPE • Marine Grade • Recyclable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Amenities() {
  const amenities = [
    {
      icon: '🛏',
      title: 'Living & Sleeping',
      desc: 'A thoughtfully designed sleeping area with premium bedding, optimised for the rhythm of ocean rest.',
    },
    {
      icon: '🚿',
      title: 'Private Bathroom',
      desc: 'Fully fitted private bathroom with shower, designed for comfort and water efficiency at sea.',
    },
    {
      icon: '🍳',
      title: 'Compact Kitchen',
      desc: 'A fully equipped kitchen and intimate dining space for preparing meals with a view unlike any other.',
    },
    {
      icon: '☀️',
      title: 'Solar Energy',
      desc: 'Off-grid solar-powered systems supply clean, renewable energy for all onboard needs, day and night.',
    },
    {
      icon: '💧',
      title: 'Fresh Water Systems',
      desc: 'Sustainable fresh water solutions and responsible waste management built into the platform.',
    },
    {
      icon: '📡',
      title: 'Smart Connectivity',
      desc: 'Optional satellite internet and smart home systems keep you connected when and how you choose.',
    },
    {
      icon: '🌅',
      title: 'Outdoor Deck',
      desc: 'A private outdoor relaxation deck with 360° ocean views — the perfect spot for sunrise or stargazing.',
    },
    {
      icon: '🪟',
      title: 'Panoramic Windows',
      desc: 'Sweeping curved glass that fills the interior with natural light and frames the sea in every direction.',
    },
  ]

  return (
    <section id="amenities" className="py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#c9a84c' }}>
            On-Board Amenities
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight">
            Everything you need,<br />
            <span className="italic">nothing you don't</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {amenities.map((a) => (
            <div key={a.title} className="card-glass rounded-2xl p-6 transition-all duration-300 cursor-default">
              <div className="text-3xl mb-4">{a.icon}</div>
              <h3 className="font-semibold text-white mb-2">{a.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Sustainability() {
  return (
    <section id="sustainability" className="py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(14,116,144,0.15), rgba(34,211,238,0.08))',
              border: '1px solid rgba(14,116,144,0.2)',
              padding: '3rem',
            }}
          >
            <div className="text-center">
              <div className="font-serif text-8xl font-light gold-gradient mb-2">Rambex</div>
              <div className="text-slate-400 text-sm tracking-widest uppercase">Off-Grid Technology Partner</div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { v: 'HDPE', l: 'Recycled Hull' },
                  { v: 'Zero', l: 'Shore Power' },
                  { v: '100%', l: 'Recyclable' },
                ].map((item) => (
                  <div key={item.l} className="card-glass rounded-xl p-3">
                    <div className="font-serif text-2xl font-light gold-gradient">{item.v}</div>
                    <div className="text-xs text-slate-400 mt-1">{item.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#c9a84c' }}>
              Built for the Future
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              Sustainability<br />
              <span className="italic">at its core</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              OrbSea domes are constructed from durable recycled HDPE — a material chosen
              for its resistance to harsh marine environments and its full recyclability at
              end of life.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Powered by off-grid technologies developed in partnership with Rambex, each
              dome operates independently of shore-based infrastructure. Solar energy,
              sustainable water systems, and responsible waste solutions ensure that your
              stay leaves the lightest possible footprint on the ocean ecosystem.
            </p>
            <div className="space-y-3">
              {[
                'Recycled HDPE structural materials',
                'Solar-powered off-grid energy systems',
                'Sustainable fresh water supply',
                'Eco-responsible waste management',
                'Marine environment compatible design',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#c9a84c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      icon: '🌿',
      title: 'Luxury Eco-Tourism',
      desc: 'Offer guests an unmatched eco-conscious hospitality experience in pristine coastal environments.',
    },
    {
      icon: '🏝',
      title: 'Private Ocean Retreats',
      desc: 'Exclusive private getaways for those seeking absolute solitude and connection with nature.',
    },
    {
      icon: '🏨',
      title: 'Floating Resorts',
      desc: 'Add extraordinary ocean-dwelling units to resort portfolios and coastal hospitality collections.',
    },
    {
      icon: '💻',
      title: 'Remote Work Stays',
      desc: 'A serene, fully-connected environment for digital nomads and remote professionals.',
    },
    {
      icon: '🧘',
      title: 'Wellness Escapes',
      desc: 'The rhythmic ocean, open air, and total privacy create the ideal setting for deep restoration.',
    },
    {
      icon: '🌊',
      title: 'Coastal Accommodation',
      desc: 'A sustainable alternative to traditional land-based accommodation in coastal destinations.',
    },
  ]

  return (
    <section id="locations" className="py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#c9a84c' }}>
            Designed For
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight">
            Every kind of<br />
            <span className="italic">ocean escape</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className="card-glass rounded-2xl p-8 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-5">{c.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{c.title}</h3>
              <p className="text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Quote() {
  return (
    <section className="py-24 section-gradient relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div
          className="w-[600px] h-[600px] rounded-full border-2"
          style={{ borderColor: '#c9a84c' }}
        />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="font-serif text-6xl font-light mb-8" style={{ color: '#c9a84c' }}>"</div>
        <blockquote className="font-serif text-3xl md:text-4xl font-light text-white leading-relaxed italic mb-8">
          Escape the ordinary and discover life on the water with OrbSea Luxury Ocean Domes.
        </blockquote>
        <div className="w-12 h-px mx-auto" style={{ background: '#c9a84c' }} />
        <p className="mt-6 text-slate-400 text-sm uppercase tracking-widest">The Future of Ocean Living</p>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    fetch('/orbsea-enquiry.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: new URLSearchParams(data).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  return (
    <section id="contact" className="py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#c9a84c' }}>
              Enquire Today
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              Begin your<br />
              <span className="italic">ocean story</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 text-lg">
              Whether you're a hospitality developer, resort operator, or private
              individual — we'd love to discuss how OrbSea can be part of your
              vision. Reach out and our team will be in touch.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Minimum Stay', value: 'From 1 night' },
                { label: 'Deployment', value: 'Coastal, lake & resort locations' },
                { label: 'Inquiry Response', value: 'Within 24 hours' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 text-sm">
                  <span className="text-slate-400 w-36 flex-shrink-0">{item.label}</span>
                  <span className="text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glass rounded-3xl p-8" style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🌊</div>
                <h3 className="font-serif text-3xl font-light text-white mb-3">Thank you</h3>
                <p className="text-slate-400">Your enquiry has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                name="orbsea-enquiry"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="orbsea-enquiry" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">First Name</label>
                    <input
                      type="text"
                      name="first-name"
                      required
                      className="w-full rounded-xl px-4 py-3 text-white text-sm transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="last-name"
                      required
                      className="w-full rounded-xl px-4 py-3 text-white text-sm transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl px-4 py-3 text-white text-sm transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Enquiry Type</label>
                  <select
                    name="enquiry-type"
                    required
                    className="w-full rounded-xl px-4 py-3 text-white text-sm transition-all appearance-none"
                    style={{ background: 'rgba(13,37,69,0.9)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="private-booking">Private Booking</option>
                    <option value="resort-partnership">Resort / Developer Partnership</option>
                    <option value="eco-tourism">Eco-Tourism Project</option>
                    <option value="remote-work">Remote Work Stay</option>
                    <option value="other">Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-xl px-4 py-3 text-white text-sm transition-all resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    placeholder="Tell us about your vision or enquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628' }}
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5" style={{ background: 'rgba(6,14,26,0.9)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/orbsea-logo.png" alt="OrbSea" className="h-8 w-auto" />
          </div>
          <div className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} OrbSea Luxury Ocean Domes. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-600">
          Designed in partnership with Rambex off-grid technologies. Committed to sustainable marine hospitality.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0a1628' }}>
      <Nav />
      <Hero />
      <Stats />
      <Experience />
      <Amenities />
      <Sustainability />
      <UseCases />
      <Quote />
      <Contact />
      <Footer />
    </div>
  )
}
