import { Routes, Route } from 'react-router-dom'

import {
  CoinListPage,
  CoinDetailsPage,
  ExplorePage,
  NotFoundPage,
} from '../pages'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<CoinListPage isFavoritesPage={false} />} />
      <Route path="/search" element={<ExplorePage />} />
      <Route
        path="/favorites"
        element={<CoinListPage isFavoritesPage={true} />}
      />
      <Route path="/coin/:id" element={<CoinDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
