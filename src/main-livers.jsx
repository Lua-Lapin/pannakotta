import './index.css'
import { useState, useRef, Fragment, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LiverCard from './components/LiverCard'
import LiverModal from './components/LiverModal'
import { LIVERS, GEN_META, GEN_ORDER } from './data/livers'

const genOrder = Object.keys(GEN_ORDER).map(Number)

function LiversPage() {
  const [selectedLiver, setSelectedLiver] = useState(null) // { liver, gen }
  const lastFocusedRef = useRef(null)

  const handleClose = useCallback(() => {
    setSelectedLiver(null)
    lastFocusedRef.current?.focus()
  }, [])

  const handleOpen = useCallback((liver, gen) => (e) => {
    lastFocusedRef.current = e.currentTarget
    setSelectedLiver({ liver, gen })
  }, [])

  return (
    <>
      <Nav />
      <main>
        {/* ページヘッダー */}
        <header
          className="px-12 pt-14 pb-12 text-center border-b border-pc-border bg-pc-bg max-sm:px-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #fde8cc 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          <p className="text-[10px] text-pc-accent tracking-[4px] uppercase text-center mb-2">🎀 Livers 🎀</p>
          <h1 className="font-serif text-[28px] italic text-pc-text text-center mb-2">ライバー紹介</h1>
          <p className="text-center text-[11px] text-pc-text-muted tracking-[3px] mb-2">All Members</p>
          <div className="flex items-center justify-center gap-2 mx-auto text-pc-accent text-[12px]">
            <div className="w-8 h-[1.5px] bg-pc-accent opacity-50" />
            ✦
            <div className="w-8 h-[1.5px] bg-pc-accent opacity-50" />
          </div>
        </header>

        {/* 期生ごとのセクション */}
        {genOrder.filter(gen => GEN_ORDER[gen]?.length > 0).map((gen, idx) => {
          const ids = GEN_ORDER[gen]
          const meta = GEN_META[gen]
          return (
            <Fragment key={gen}>
              {idx > 0 && (
                <hr style={{ border: 'none', borderTop: '1.5px solid #f0d8b8', margin: '0 24px' }} />
              )}
              <div className="pb-4">
                <div className="text-center pt-8 px-6 pb-0">
                  <h2 className="font-serif text-[20px] italic text-pc-text mb-1 max-sm:text-[16px]">
                    {meta.title}
                  </h2>
                  <p className="text-[10px] text-pc-accent tracking-[4px] uppercase mb-3">{meta.sub}</p>
                  <div className="w-9 h-[2px] bg-pc-accent mx-auto" />
                </div>
                <div className="flex flex-wrap justify-center gap-4 px-6 py-8 max-w-[800px] mx-auto">
                  {ids.map(id => (
                    <LiverCard key={id} liver={LIVERS[id]} onClick={handleOpen(LIVERS[id], gen)} />
                  ))}
                </div>
              </div>
            </Fragment>
          )
        })}
      </main>
      <Footer />

      {selectedLiver && <LiverModal liver={selectedLiver.liver} gen={selectedLiver.gen} onClose={handleClose} />}
    </>
  )
}

const container = document.getElementById('root')
const root = container.__root ?? (container.__root = createRoot(container))
root.render(<LiversPage />)
