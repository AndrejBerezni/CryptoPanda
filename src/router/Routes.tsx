import { Routes, Route } from 'react-router-dom'
import {
  TopCoinsPage,
  CoinDetailsPage,
  ExplorePage,
  FavoritesPage,
  NotFoundPage,
} from '../pages'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TopCoinsPage />} />
      <Route path="/search" element={<ExplorePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/coin/:id" element={<CoinDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
