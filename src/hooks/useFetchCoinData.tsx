import { useState, useEffect, useContext } from 'react'

import fetchCoinHistoricalData from '../api/fetchCoinHistoricalData'
import fetchCoins from '../api/fetchCoins'
import { ICoinDetailed } from '../compiler/interfaces'
import { CurrencyContext } from '../context/CurrencyContext'
import standardizeErrorMessage from '../utilities/standardizeAndThrowError'

export default function useFetchCoinData(coinId: string) {
  const [coin, setCoin] = useState<ICoinDetailed | null>(null)
  const [results, setResults] = useState<[number, number][]>([])
  const { currency } = useContext(CurrencyContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        setError('')
        setIsLoading(true)
        const newResults = await fetchCoinHistoricalData(coinId, currency)
        const newCoin = await fetchCoins(currency, 'market_cap', 1, coinId)
        if (!newResults || !newCoin) {
          throw new Error(
            'Unable to retrieve data for this coin, please try again later.'
          )
        }
        setResults(newResults)
        setCoin(newCoin[0])
        setIsLoading(false)
      } catch (err) {
        const message = standardizeErrorMessage(err)
        setError(message)
        setIsLoading(false)
      }
    }

    fetchCoinData()
  }, [coinId, currency])

  return { results, coin, isLoading, error }
}
