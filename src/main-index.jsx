import './index.css'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <div>
    <Nav />
    <main><p className="p-8">placeholder</p></main>
    <Footer />
  </div>
)
