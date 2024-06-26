import { useState, useContext, useEffect } from 'react'

import fetchCoins from '../api/fetchCoins'
import { ICoinDetailed } from '../compiler/interfaces'
import { CoinListCriteria } from '../compiler/types'
import { CurrencyContext } from '../context/CurrencyContext'
import { getFavorites } from '../utilities/handleFavorites'
import standardizeErrorMessage from '../utilities/standardizeAndThrowError'

export default function useFetchCoinList({
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
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchCoinsList = async () => {
      try {
        setError('')
        setIsLoading(true)
        const page = Number(searchParams.get('page'))
        let coins

        if (isFavoritesPage) {
          const favoriteCoins = getFavorites()
          if (favoriteCoins === '') {
            setIsLoading(false)
            setCoins([])
            return
          }
          coins = await fetchCoins(currency, criteria, page, favoriteCoins)
        } else {
          coins = await fetchCoins(currency, criteria, page)
        }

        if (coins) {
          setCoins(coins)
        }
        setIsLoading(false)
      } catch (err) {
        const message = standardizeErrorMessage(err)
        setError(message)
        setIsLoading(false)
      }
    }

    fetchCoinsList() //initial fetch on render

    //setup to update every two minutes:
    const fetchInterval = setInterval(fetchCoinsList, 2 * 60 * 1000)

    return () => clearInterval(fetchInterval) // clean up
  }, [criteria, searchParams, currency, isFavoritesPage])

  return { coins, isLoading, error }
}
