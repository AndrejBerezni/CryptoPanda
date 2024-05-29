import { useContext, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { CoinListCriteria } from '../compiler/types'
import CoinList from '../components/CoinList'
import FavoritesEmptyMessage from '../components/FavoritesEmptyMessage'
import Pagination from '../components/Pagination'
import SearchCriteriaSelect from '../components/SearchCriteriaSelect'
import { FavoritesContext } from '../context/FavoritesContext'
import useFetchCoinList from '../hooks/useFetchCoinList'

export default function CoinListPage({
  isFavoritesPage,
}: Readonly<{
  isFavoritesPage: boolean
}>) {
  const [criteria, setCriteria] = useState<CoinListCriteria>('market_cap')
  const [searchParams, setSearchParams] = useSearchParams()
  const { coins, isLoading, error } = useFetchCoinList({
    isFavoritesPage,
    criteria,
    searchParams,
  })
  const { favorites } = useContext(FavoritesContext)

  return (
    <section className="page-padding page-layout">
      <SearchCriteriaSelect setCriteria={setCriteria} criteria={criteria} />
      {/* Render list of coins */}
      <CoinList
        coins={coins}
        isLoading={isLoading}
        error={error}
        searchParams={searchParams}
      />
      {/* If there are not favorites, display message and instructions how to add coins to favorites: */}
      <FavoritesEmptyMessage
        show={isFavoritesPage && coins.length === 0 && !error}
      />
      <Pagination
        setPage={(page) => setSearchParams({ page: page.toString() })}
        currentPage={Number(searchParams.get('page'))}
        isFavoritesPage={isFavoritesPage}
        favoritesLength={favorites.length}
        errorExists={!!error}
      />
    </section>
  )
}
