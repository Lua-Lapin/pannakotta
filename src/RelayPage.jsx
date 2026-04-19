import Footer from './components/Footer'
import { RELAY_EVENT } from './data/relay'

export default function RelayPage() {
  return (
    <>
      <main>
        <HeroSection />
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
