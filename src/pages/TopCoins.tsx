import { useState, useEffect, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import fetchCoins from '../api/fetchCoins'
import { ICoinDetailed } from '../compiler/interfaces'
import { CoinListCriteria } from '../compiler/types'
import CoinCard from '../components/CoinCard'
import Pagination from '../components/Pagination'
import SearchCriteriaSelect from '../components/SearchCriteriaSelect'
import { CurrencyContext } from '../context/CurrencyContext'
import calculateListPosition from '../utilities/calculateListPosition'

export default function TopCoinsPage() {
  const [criteria, setCriteria] = useState<CoinListCriteria>('market_cap')
  const [searchParams, setSearchParams] = useSearchParams()
  const [coins, setCoins] = useState<ICoinDetailed[]>([])
  const { currency } = useContext(CurrencyContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchCoinsList = async () => {
      try {
        setIsLoading(true)
        const page = Number(searchParams.get('page')) ?? 1

        const topCoins = await fetchCoins(currency, criteria, page)
        if (topCoins) {
          setCoins(topCoins)
        }
        setIsLoading(false)
      } catch (err) {
        console.log(err) //update later
        setIsLoading(false)
      }
    }

    fetchCoinsList() //initial fetch on render

    //setup to update every two minutes:
    const fetchInterval = setInterval(fetchCoins, 2 * 60 * 1000)

    return () => clearInterval(fetchInterval) // clean up
  }, [criteria, searchParams, currency])

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
