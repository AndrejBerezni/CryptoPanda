import { useState } from 'react'
import { debounce } from 'lodash'
import searchCoins from '../api/searchCoins'
import { ICoinBasicInfo } from '../compiler/interfaces'

export default function useSearch() {
  const [input, setInput] = useState<string>('')
  const [results, setResults] = useState<ICoinBasicInfo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const debouncedSearch = debounce(async () => {
    try {
      setIsLoading(true)
      const newResults = await searchCoins(input)
      if (!newResults) {
        setResults([])
      } else {
        setResults(newResults)
      }
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }, 1000)

  return { input, setInput, debouncedSearch, results, isLoading }
}
