import './index.css'
import { useState, useRef, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LiverCard from './components/LiverCard'
import LiverModal from './components/LiverModal'
import { LIVERS } from './data/livers'

const gen1Livers = Object.values(LIVERS).filter(l => l.isGen1)
const otherLivers = Object.values(LIVERS).filter(l => !l.isGen1)

function LiversPage() {
  const [selectedLiver, setSelectedLiver] = useState(null)
  const lastFocusedRef = useRef(null)

  const handleClose = useCallback(() => {
    setSelectedLiver(null)
    lastFocusedRef.current?.focus()
  }, [])

  const handleOpen = (liver) => (e) => {
    lastFocusedRef.current = e.currentTarget
    setSelectedLiver(liver)
  }

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

        {/* 1期生セクション */}
        <div className="pb-4">
          <div className="text-center pt-8 px-6 pb-0">
            <h2 className="font-serif text-[20px] italic text-pc-text mb-1 max-sm:text-[16px]">
              1期生
            </h2>
            <div className="w-9 h-[2px] bg-pc-accent mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 px-6 py-8 max-w-[800px] mx-auto">
            {gen1Livers.map(liver => (
              <LiverCard key={liver.id} liver={liver} onClick={handleOpen(liver)} />
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1.5px solid #f0d8b8', margin: '0 24px' }} />

        {/* 所属ライバーセクション */}
        <div className="pb-4">
          <div className="text-center pt-8 px-6 pb-0">
            <h2 className="font-serif text-[20px] italic text-pc-text mb-1 max-sm:text-[16px]">
              所属ライバー
            </h2>
            <div className="w-9 h-[2px] bg-pc-accent mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 px-6 py-8 max-w-[800px] mx-auto">
            {otherLivers.map(liver => (
              <LiverCard key={liver.id} liver={liver} onClick={handleOpen(liver)} />
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {selectedLiver && <LiverModal liver={selectedLiver} onClose={handleClose} />}
    </>
  )
}

const container = document.getElementById('root')
const root = container.__root ?? (container.__root = createRoot(container))
root.render(<LiversPage />)
