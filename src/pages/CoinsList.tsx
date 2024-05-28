import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CoinListCriteria } from '../compiler/types'
import CoinCard from '../components/CoinCard'
import Pagination from '../components/Pagination'
import SearchCriteriaSelect from '../components/SearchCriteriaSelect'
import useFetchCoins from '../hooks/useFetchCoins'
import calculateListPosition from '../utilities/calculateListPosition'

export default function CoinsListPage({
  isFavoritesPage,
}: {
  isFavoritesPage: boolean
}) {
  const [criteria, setCriteria] = useState<CoinListCriteria>('market_cap')
  const [searchParams, setSearchParams] = useSearchParams()

  const { coins, isLoading } = useFetchCoins({
    isFavoritesPage,
    criteria,
    searchParams,
  })

  return (
    <section className="page-padding flex flex-col items-center min-h-screen gap-8">
      <SearchCriteriaSelect setCriteria={setCriteria} criteria={criteria} />
      <ul className="flex flex-col flex-1 gap-3 w-full max-w-full">
        {isLoading
          ? 'Loading...'
          : coins.map((coin, index) => (
              <CoinCard
                coin={coin}
                key={`${coin.id}-coin-card`}
                position={calculateListPosition(
                  Number(searchParams.get('page')),
                  index
                )}
              />
            ))}
      </ul>
      <Pagination
        setPage={(page) => setSearchParams({ page: page.toString() })}
        currentPage={Number(searchParams.get('page')) ?? 1}
        numberOfPages={5}
      />
    </section>
  )
}
