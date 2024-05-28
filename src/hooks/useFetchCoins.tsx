import { useState, useContext, useEffect } from 'react'
import fetchCoins from '../api/fetchCoins'
import { ICoinDetailed } from '../compiler/interfaces'
import { CoinListCriteria } from '../compiler/types'
import { CurrencyContext } from '../context/CurrencyContext'

export default function useFetchCoins({
  isFavoritesPage,
  criteria,
  searchParams,
}: {
  isFavoritesPage: boolean
  criteria: CoinListCriteria
  searchParams: URLSearchParams
}) {
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
    const fetchInterval = setInterval(fetchCoinsList, 2 * 60 * 1000)

    return () => clearInterval(fetchInterval) // clean up
  }, [criteria, searchParams, currency])
  return { coins, isLoading }
}
