import { useState, useEffect, useContext } from 'react'

import fetchCoinHistoricalData from '../api/fetchCoinHistoricalData'
import fetchCoins from '../api/fetchCoins'
import { ICoinDetailed } from '../compiler/interfaces'
import { CurrencyContext } from '../context/CurrencyContext'
import standardizeErrorMessage from '../utilities/standardizeAndThrowError'

//delaying api calls in the hook below, because of the API limitations - if we have 4 calls one after another in small timeframe,
//we will almost always get 429 error
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

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
        const newResults = await fetchCoinHistoricalData(coinId, currency)
        await delay(2000)
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

    const delayedFetch = async () => {
      setIsLoading(true)
      await delay(7000) //this huge delay is set to avoid getting 429 error with free api
      fetchCoinData()
    }

    delayedFetch()
  }, [coinId, currency])

  return { results, coin, isLoading, error }
}
