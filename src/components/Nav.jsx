export default function Nav() {
  return (
    <nav className="bg-pc-bg border-b-[1.5px] border-pc-border px-12 py-4 flex justify-between items-center sticky top-0 z-[100] max-sm:px-5">
      <a href="index.html" className="font-serif text-xl italic text-pc-text tracking-wide">
        ぱんな<em className="text-pc-accent italic">こった</em>
      </a>
      <ul className="flex gap-7 list-none max-sm:hidden">
        <li>
          <a href="index.html#concept" className="text-[11px] tracking-[2px] text-pc-text-muted uppercase hover:text-pc-accent transition-colors">
            コンセプト
          </a>
        </li>
        <li>
          <a href="livers.html" className="text-[11px] tracking-[2px] text-pc-text-muted uppercase hover:text-pc-accent transition-colors">
            ライバー
          </a>
        </li>
        <li>
          <a href="news.html" className="text-[11px] tracking-[2px] text-pc-text-muted uppercase hover:text-pc-accent transition-colors">
            お知らせ
          </a>
        </li>
        <li>
          <a href="recruit.html" className="text-[11px] tracking-[2px] text-pc-text-muted uppercase hover:text-pc-accent transition-colors">
            新人募集
          </a>
        </li>
      </ul>
    </nav>
  )
}
