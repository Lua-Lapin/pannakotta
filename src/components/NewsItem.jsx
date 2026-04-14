export default function NewsItem({ date, badge, text }) {
  return (
    <div className="flex gap-5 py-[14px] border-b border-pc-border items-baseline max-sm:flex-wrap max-sm:gap-[4px_10px]">
      <span className="text-[11px] text-pc-text-muted whitespace-nowrap tracking-[1px]">
        {date}
      </span>
      {badge && (
        <span className="text-[10px] text-pc-accent border-[1.5px] border-pc-accent rounded-[10px] px-[6px] py-[1px] whitespace-nowrap tracking-[1px] shrink-0 self-center">
          {badge}
        </span>
      )}
      <span className="text-[13px] text-pc-text max-sm:basis-full">{text}</span>
    </div>
  )
}
