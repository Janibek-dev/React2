import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from 'react-router'
import Work from './components/Work.tsx'
import Hotel from './components/Hotel.tsx'
import GameStore from './components/GameStore.tsx'
import Cinema from './components/Cinema.tsx'
import Voila from './components/Voila.tsx'
import Contacts from './components/Contacts.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* Главная */}
      <Route index element={<App />} />
      {/* Другие маршруты */}
      <Route path='/Work' element={<Work />} />
      <Route path='/Hotel' element={<Hotel />} />
      <Route path='/GameStore' element={<GameStore />} />
      <Route path='/Cinema' element={<Cinema />} />
      <Route path='/Voila' element={<Voila />} />
      <Route path='/Contacts' element={<Contacts
       />} />
    </Routes>
  </BrowserRouter>
)
