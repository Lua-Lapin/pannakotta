import './index.css'
import { createRoot } from 'react-dom/client'
import RelayPage from './RelayPage'

const container = document.getElementById('root')
const root = container.__root ?? (container.__root = createRoot(container))
root.render(<RelayPage />)
