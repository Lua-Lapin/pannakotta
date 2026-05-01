import { useEffect, useRef } from 'react'
import { X, Diamond, Link } from 'lucide-react'
import { GEN_META } from '../data/livers'

export default function LiverModal({ liver, gen, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  const fanParts = [liver.fanMark, liver.fanName].filter(Boolean)
  const genLabel = GEN_META[gen]?.title ?? `${gen}期生`
  const { twitter, reality, link } = liver.links ?? {}

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="bg-pc-bg border-[1.5px] border-pc-border p-8 px-7 max-w-[360px] w-full relative text-center max-h-[calc(100dvh-48px)] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-liver-name"
      >
        <button
          ref={closeRef}
          className="absolute top-3 right-[14px] bg-transparent border-none text-xl text-pc-text-muted cursor-pointer leading-none p-1 hover:text-pc-text focus-visible:outline-2 focus-visible:outline-pc-accent focus-visible:outline-offset-2"
          onClick={onClose}
          aria-label="閉じる"
        >
          ×
        </button>

        <span className="block text-[12px] text-pc-accent tracking-[4px] text-center mb-2">
          {genLabel}
        </span>

        <img
          src={liver.img}
          alt={liver.name}
          className="w-[120px] h-[120px] rounded-full object-cover bg-pc-border mb-4 mx-auto border-[3px] border-pc-accent2 shadow-[0_4px_12px_rgba(232,131,106,0.2)]"
          onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
        />

        <div className="flex items-start justify-center gap-3 mb-4">
          <div className="text-center min-w-0">
            <h3 id="modal-liver-name" className="font-serif text-[22px] text-pc-text mb-1">
              {liver.name}
            </h3>
            <p className="text-[10px] text-pc-accent tracking-[3px] uppercase">{liver.nameEn}</p>
          </div>
          {(twitter || reality || link) && (
            <div className="flex flex-row gap-1.5 pt-1">
              {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                   className="p-2 rounded-full bg-pc-accent text-white inline-flex items-center justify-center shrink-0 hover:opacity-75 transition-opacity">
                  <X width={15} height={15} />
                </a>
              )}
              {reality && (
                <a href={reality} target="_blank" rel="noopener noreferrer" aria-label="Reality"
                   className="p-2 rounded-full bg-pc-accent text-white inline-flex items-center justify-center shrink-0 hover:opacity-75 transition-opacity">
                  <Diamond width={15} height={15} />
                </a>
              )}
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label="リンク"
                   className="p-2 rounded-full bg-pc-accent text-white inline-flex items-center justify-center shrink-0 hover:opacity-75 transition-opacity">
                  <Link width={15} height={15} />
                </a>
              )}
            </div>
          )}
        </div>

        {fanParts.length > 0 && (
          <p className="text-[13px] text-pc-text-muted text-center mb-1">{fanParts.join(' ')}</p>
        )}

        {liver.greeting && (
          <p className="font-serif text-[13px] italic text-pc-text-body leading-[1.9] mb-5 min-h-[1em]">
            {liver.greeting}
          </p>
        )}
      </div>
    </div>
  )
}
