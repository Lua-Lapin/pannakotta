export default function LiverCard({ liver, onClick, showGenBadge = false }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(e)
    }
  }

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer p-3 px-2 rounded transition-[background] hover:bg-pc-border focus-visible:bg-pc-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pc-accent"
      style={{ flex: '0 0 120px' }}
      role="button"
      tabIndex={0}
      aria-label={`${liver.name}の詳細を見る`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img
          src={liver.img}
          alt={liver.name}
          loading="lazy"
          className="w-20 h-20 rounded-full object-cover bg-pc-border border-2 border-pc-accent2 shadow-[0_3px_8px_rgba(232,131,106,0.15)]"
          onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
        />
        {showGenBadge && liver.gen != null && (
          <span style={{
            position: 'absolute',
            bottom: '2px',
            right: '-2px',
            background: '#e8836a',
            color: '#fff',
            fontSize: '9px',
            fontWeight: 700,
            borderRadius: '20px',
            padding: '2px 5px',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            boxShadow: '0 1px 4px rgba(232,131,106,0.4)',
          }}>
            {liver.gen}期
          </span>
        )}
      </div>
      <span className="text-[12px] text-pc-text text-center">{liver.name}</span>
    </div>
  )
}
