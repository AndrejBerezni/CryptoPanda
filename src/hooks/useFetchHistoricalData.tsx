import { useState, useEffect, useContext } from 'react'

import fetchCoinHistoricalData from '../api/fetchCoinHistoricalData'
import { CurrencyContext } from '../context/CurrencyContext'
import standardizeErrorMessage from '../utilities/standardizeAndThrowError'

export default function useFetchHistoricalData(coinId: string) {
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
        if (!newResults) {
          throw new Error(
            'Unable to retrieve data for this coin, please try again later.'
          )
        }
        setResults(newResults)
        setIsLoading(false)
      } catch (err) {
        const message = standardizeErrorMessage(err)
        setError(message)
        setIsLoading(false)
      }
    }

    fetchCoinData()
  }, [coinId, currency])

  return { results, isLoading, error }
}
