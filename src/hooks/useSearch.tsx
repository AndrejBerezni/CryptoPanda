import { useState, useEffect, useRef } from 'react'

import { debounce } from 'lodash'

import searchCoins from '../api/searchCoins'
import { ICoinBasicInfo } from '../compiler/interfaces'
import standardizeErrorMessage from '../utilities/standardizeAndThrowError'

export default function useSearch() {
  const [input, setInput] = useState<string>('')
  const [results, setResults] = useState<ICoinBasicInfo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const debouncedSearch = useRef(
    debounce(async (searchInput: string) => {
      try {
        setError('')
        setIsLoading(true)
        const newResults = await searchCoins(searchInput)
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
  )
  //debouncedSearch needed to be dependency of the useEffect above, so I needed to wrap it in useCallback not to be recreated on every render
  // However, debounce returns a new debounced version of the provided function every time it is called, so instead I used useRef

  useEffect(() => {
    if (input.length > 1) {
      debouncedSearch.current(input)
    }
  }, [input])

  return { input, setInput, results, isLoading, error }
}
