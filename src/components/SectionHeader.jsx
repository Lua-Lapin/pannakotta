export default function SectionHeader({ label, title, as: Tag = 'h2', subtitle }) {
  return (
    <>
      <p className="text-[10px] text-pc-accent tracking-[4px] uppercase text-center mb-2">
        🎀 {label} 🎀
      </p>
      <Tag className="font-serif text-[28px] italic text-pc-text text-center mb-2">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-center text-[11px] text-pc-text-muted tracking-[3px] mb-2">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-2 mx-auto mb-7 text-pc-accent text-[12px]">
        <div className="w-8 h-[1.5px] bg-pc-accent opacity-50" />
        ✦
        <div className="w-8 h-[1.5px] bg-pc-accent opacity-50" />
      </div>
    </>
  )
}
