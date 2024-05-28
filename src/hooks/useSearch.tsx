import { useState } from 'react'
import { debounce } from 'lodash'
import searchCoins from '../api/searchCoins'
import { ICoinBasicInfo } from '../compiler/interfaces'
import standardizeErrorMessage from '../utilities/standardizeAndThrowError'

export default function useSearch() {
  const [input, setInput] = useState<string>('')
  const [results, setResults] = useState<ICoinBasicInfo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const debouncedSearch = debounce(async () => {
    try {
      setError('')
      setIsLoading(true)
      const newResults = await searchCoins(input)
      if (!newResults) {
        setResults([])
      } else {
        setResults(newResults)
      }
      setIsLoading(false)
    } catch (err) {
      const message = standardizeErrorMessage(err)
      setError(message)
      setIsLoading(false)
    }
  }, 1000)

  return { input, setInput, debouncedSearch, results, isLoading, error }
}
