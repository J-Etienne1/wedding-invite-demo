import { Routes, Route } from 'react-router-dom'
import WeddingPage from './pages/WeddingPage'
import AfterPartyPage from './pages/AfterPartyPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WeddingPage />} />
      <Route path="/afterparty" element={<AfterPartyPage />} />
    </Routes>
  )
}
