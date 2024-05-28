import { Routes, Route } from 'react-router-dom'
import {
  CoinsListPage,
  CoinDetailsPage,
  ExplorePage,
  NotFoundPage,
} from '../pages'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<CoinsListPage isFavoritesPage={false} />} />
      <Route path="/search" element={<ExplorePage />} />
      <Route
        path="/favorites"
        element={<CoinsListPage isFavoritesPage={true} />}
      />
      <Route path="/coin/:id" element={<CoinDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
