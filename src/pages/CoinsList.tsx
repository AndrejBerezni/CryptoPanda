import { useState } from 'react'
import { ImStarFull } from 'react-icons/im'
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
        {isFavoritesPage && coins.length === 0 && (
          <div className="text-center">
            <p>You currently don't have any coins added to Favorites page.</p>
            <p>
              Add coins by clicking{' '}
              <ImStarFull className="inline text-accent mx-1" /> on coin cards
              when searching for coins or viewing them on home page.
            </p>
          </div>
        )}
      </ul>
      {isFavoritesPage ? (
        coins.length > 10 ? (
          <Pagination
            setPage={(page) => setSearchParams({ page: page.toString() })}
            currentPage={Number(searchParams.get('page')) ?? 1}
            numberOfPages={Math.floor(coins.length / 10) + 1}
          />
        ) : null
      ) : (
        <Pagination
          setPage={(page) => setSearchParams({ page: page.toString() })}
          currentPage={Number(searchParams.get('page')) ?? 1}
          numberOfPages={5}
        />
      )}
    </section>
  )
}
