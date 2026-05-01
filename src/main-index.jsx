import './index.css'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SectionHeader from './components/SectionHeader'
import NewsItem from './components/NewsItem'
import { NEWS } from './data/news'
import { LIVERS, GEN_ORDER } from './data/livers'
import { RELAY_EVENT } from './data/relay'

const btnClass = "inline-block bg-gradient-to-br from-pc-accent to-pc-accent2 text-white px-[34px] py-[11px] rounded-3xl font-sans text-[13px] font-bold tracking-[1px] shadow-[0_4px_14px_rgba(232,131,106,0.35)] hover:opacity-85 transition-opacity"
const textLinkClass = "text-[11px] tracking-[3px] text-pc-accent uppercase border-b-[1.5px] border-pc-accent pb-[2px]"
const sectionBase = "px-12 py-14 border-b-[1.5px] border-pc-border max-sm:px-5 max-sm:py-12"

function RelayBanner() {
  return (
    <a
      href="relay.html"
      className="flex items-center justify-between flex-wrap gap-3 px-7 py-3 bg-gradient-to-r from-pc-accent to-pc-accent2 max-sm:px-5"
    >
      <div className="flex items-center gap-3">
        <span className="bg-white text-pc-accent text-[9px] font-bold tracking-[2px] px-[9px] py-[3px] rounded-full">
          🎀 EVENT
        </span>
        <div>
          <p className="text-white font-bold text-[13px]">{RELAY_EVENT.title}</p>
          <p className="text-white/80 text-[10px] tracking-[2px]">{RELAY_EVENT.dates}</p>
        </div>
      </div>
      <span className="text-white text-[11px] tracking-[2px] border border-white/60 px-[14px] py-[6px] rounded-full">
        詳しく見る →
      </span>
    </a>
  )
}

function IndexPage() {
  const gen1Livers = GEN_ORDER[1].map(id => LIVERS[id])

  return (
    <>
      <Nav />
      <RelayBanner />
      <main>

        {/* Hero */}
        <section
          className={`${sectionBase} text-center bg-pc-bg`}
          style={{
            backgroundImage: 'radial-gradient(circle, #fde8cc 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          <div className="text-[10px] text-pc-accent tracking-[4px] uppercase mb-4">
            ✦ 🍮 VTUBER OFFICE 🍮 ✦
          </div>
          <h1 className="font-serif text-5xl italic text-pc-text leading-[1.2] mb-3 max-sm:text-[32px]">
            架空事務所
            <img
              src="img/logo.png"
              alt="ぱんなこった"
              className="max-w-[420px] w-full h-auto block mx-auto"
            />
          </h1>
          <p className="text-[12px] text-pc-text-muted tracking-[3px] mb-8">あまく、やさしく、個性豊かに</p>
          <a href="livers.html" className={btnClass}>🍓 ライバーを見る</a>
        </section>

        {/* Concept */}
        <section className={`${sectionBase} bg-pc-bg`} id="concept">
          <SectionHeader label="Concept" title="ぱんなこったについて" />
          <p className="max-w-[520px] mx-auto text-center leading-[2.2] text-pc-text-body text-[13px]">
            イタリア生まれのデザートのように、<br />
            ひとつひとつ丁寧に、個性を大切に。<br />
            ぱんなこったは、それぞれの「らしさ」を<br />
            全力で応援するVTuber事務所です。
          </p>
        </section>

        {/* Livers preview (1期生のみ) */}
        <section className={`${sectionBase} bg-pc-bg-sub`} id="livers">
          <SectionHeader label="Livers" title="1期生" />
          <div className="flex justify-center gap-7 flex-wrap mb-7">
            {gen1Livers.map(liver => (
              <div key={liver.name} className="text-center w-[120px]">
                <img
                  src={liver.img}
                  alt={liver.name}
                  className="w-[120px] h-[120px] rounded-full bg-pc-border block mb-[10px] object-cover border-[3px] border-pc-accent2 shadow-[0_4px_12px_rgba(232,131,106,0.2)]"
                />
                <p className="font-serif text-[14px] text-pc-text mb-1">{liver.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center">
            <a href="livers.html" className={textLinkClass}>全員を見る →</a>
          </p>
        </section>

        {/* News */}
        <section className={`${sectionBase} bg-pc-bg`} id="news">
          <SectionHeader label="News" title="お知らせ" />
          <div className="max-w-[560px] mx-auto border-t-[1.5px] border-pc-border">
            {NEWS.slice(0, 5).map((item, i) => (
              <NewsItem key={i} {...item} />
            ))}
          </div>
          <p className="text-center mt-5">
            <a href="news.html" className={textLinkClass}>すべてのお知らせを見る →</a>
          </p>
        </section>

        {/* Recruit teaser */}
        <section className={`${sectionBase} bg-pc-bg-sub`} id="recruit">
          <SectionHeader label="Recruit" title="新人募集" />
          <p className="max-w-[520px] mx-auto mb-7 text-center leading-[2.2] text-pc-text-body text-[13px]">
            配信経験・ジャンル不問。<br />
            「やってみたい」という気持ちだけ持って、<br />
            飛び込んできてください。
          </p>
          <p className="text-center">
            <a href="recruit.html" className={btnClass}>🎀 応募フォームへ</a>
          </p>
        </section>

      </main>
      <Footer />
    </>
  )
}

const container = document.getElementById('root')
const root = container.__root ?? (container.__root = createRoot(container))
root.render(<IndexPage />)
