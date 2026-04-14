const links = [
  { href: 'index.html#concept', label: 'コンセプト', match: /\/(index\.html)?$/ },
  { href: 'livers.html',        label: 'ライバー',   match: /\/livers\.html$/ },
  { href: 'news.html',          label: 'お知らせ',   match: /\/news\.html$/ },
  { href: 'recruit.html',       label: '新人募集',   match: /\/recruit\.html$/ },
]

export default function Nav() {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''

  return (
    <nav className="bg-pc-bg border-b-[1.5px] border-pc-border px-12 py-4 flex justify-between items-center sticky top-0 z-[100] max-sm:px-5">
      <a href="index.html" className="font-serif text-xl italic text-pc-text tracking-wide">
        ぱんな<em className="text-pc-accent italic">こった</em>
      </a>
      <ul className="flex gap-7 list-none max-sm:hidden">
        {links.map(({ href, label, match }) => {
          const isActive = match.test(path)
          return (
            <li key={href}>
              <a
                href={href}
                className={`text-[11px] tracking-[2px] uppercase transition-colors ${
                  isActive ? 'text-pc-accent' : 'text-pc-text-muted hover:text-pc-accent'
                }`}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
