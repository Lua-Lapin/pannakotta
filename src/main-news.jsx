import './index.css'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SectionHeader from './components/SectionHeader'
import NewsItem from './components/NewsItem'
import { NEWS } from './data/news'

function NewsPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="px-12 pt-16 pb-12 bg-pc-bg border-b border-pc-border text-center max-sm:px-5 max-sm:pt-12 max-sm:pb-10">
          <SectionHeader label="News" title="お知らせ" as="h1" />
        </div>
        <div className="px-12 py-14 bg-pc-bg max-sm:px-5 max-sm:py-12">
          <div className="max-w-[560px] mx-auto border-t-[1.5px] border-pc-border">
            {NEWS.map((item, i) => (
              <NewsItem key={i} {...item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<NewsPage />)
