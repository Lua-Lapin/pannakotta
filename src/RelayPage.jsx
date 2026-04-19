import { Fragment } from 'react'
import Footer from './components/Footer'
import SectionHeader from './components/SectionHeader'
import { RELAY_EVENT } from './data/relay'

export default function RelayPage() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ParticipantsSection />
        <TimelineSection />
      </main>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <header
      className="px-12 pt-16 pb-14 text-center border-b border-pc-border bg-pc-bg max-sm:px-5"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -10%, #fde8cc88 0%, transparent 70%),
          radial-gradient(circle, #fde8cc 1px, transparent 1px)
        `,
        backgroundSize: 'auto, 20px 20px',
      }}
    >
      <p className="text-[10px] text-pc-accent tracking-[4px] uppercase mb-3">
        🎀 Special Event 🎀
      </p>
      <h1 className="font-serif text-[36px] italic text-pc-text mb-3 max-sm:text-[28px]">
        {RELAY_EVENT.title}
      </h1>
      <p className="text-[13px] text-pc-text-body tracking-[2px] mb-2">
        {RELAY_EVENT.catchcopy}
      </p>
      <p className="text-[11px] text-pc-text-muted tracking-[3px] mb-4">
        {RELAY_EVENT.dates}
      </p>
      <div className="flex items-center justify-center gap-2 mx-auto text-pc-accent text-[12px]">
        <div className="w-8 h-[1.5px] bg-pc-accent opacity-50" />
        ✦
        <div className="w-8 h-[1.5px] bg-pc-accent opacity-50" />
      </div>
    </header>
  )
}

function AboutSection() {
  return (
    <section className="px-12 py-12 text-center bg-pc-bg-sub border-b border-pc-border max-sm:px-5">
      <SectionHeader label="About" title="企画について" />
      <p className="text-[13px] text-pc-text-body leading-relaxed max-w-[560px] mx-auto">
        {RELAY_EVENT.description}
      </p>
    </section>
  )
}

function ParticipantsSection() {
  return (
    <section className="px-12 py-12 bg-pc-bg border-b border-pc-border max-sm:px-5">
      <div className="text-center mb-8">
        <SectionHeader label="Members" title="参加ライバー" />
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-[700px] mx-auto">
        {RELAY_EVENT.participants.map(p => (
          <ParticipantCard key={p.order} participant={p} />
        ))}
      </div>
    </section>
  )
}

function ParticipantCard({ participant }) {
  return (
    <a
      href={participant.realityUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 group"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pc-border group-hover:border-pc-accent transition-colors">
        <img
          src={participant.img}
          alt={participant.name}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-[11px] text-pc-text-muted tracking-[1px] group-hover:text-pc-accent transition-colors">
        {participant.name}
      </span>
    </a>
  )
}

function TimelineSection() {
  const byOrder = Object.fromEntries(
    RELAY_EVENT.participants.map(p => [p.order, p])
  )

  return (
    <section className="px-12 py-12 bg-pc-bg-sub border-b border-pc-border max-sm:px-5">
      <div className="text-center mb-10">
        <SectionHeader label="Schedule" title="タイムライン" />
      </div>
      <div className="relative max-w-[480px] mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-pc-border -translate-x-1/2" />
        <div className="flex flex-col gap-8 mt-4">
          {RELAY_EVENT.schedule.map(slot => (
            <SlotCard key={slot.slot} slot={slot} byOrder={byOrder} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SlotCard({ slot, byOrder }) {
  const members = slot.members.map(n => byOrder[n]).filter(Boolean)

  return (
    <div className="relative bg-pc-bg border border-pc-border rounded-xl px-6 py-5 shadow-sm">
      <div className="absolute left-1/2 -top-4 w-3 h-3 rounded-full bg-pc-accent border-2 border-pc-bg -translate-x-1/2" />

      <p className="text-[10px] text-pc-accent tracking-[3px] uppercase text-center mb-1">
        SLOT {slot.slot}
      </p>
      <p className="text-[12px] text-pc-text-muted text-center mb-4">
        {slot.day}　{slot.time}
      </p>

      <div className="flex flex-wrap justify-center items-center gap-3 mb-5">
        {members.map((p, i) => (
          <Fragment key={p.order}>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pc-border">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] text-pc-text-muted">{p.name}</span>
            </div>
            {i < members.length - 1 && (
              <span className="text-pc-accent text-[16px] font-bold pb-4">×</span>
            )}
          </Fragment>
        ))}
      </div>

      {members.length > 0 && (
        <div className="text-center">
          <a
            href={members[0].realityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 text-[11px] tracking-[2px] uppercase border border-pc-accent text-pc-accent rounded-full hover:bg-pc-accent hover:text-white transition-colors"
          >
            配信を見る →
          </a>
        </div>
      )}
    </div>
  )
}
