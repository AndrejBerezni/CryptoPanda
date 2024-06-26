import { createContext, useMemo, useState, useEffect, useCallback } from 'react'

import { Currency } from '../compiler/types'

interface ICurrencyContext {
  currency: Currency
  changeCurrency: (direction: 'right' | 'left') => void
}

const CurrencyContext = createContext<ICurrencyContext>({
  currency: 'eur',
  changeCurrency: (direction: 'right' | 'left') => {
    console.log(direction)
  }, // dummy function that will be overwritten by provider
})

function CurrencyContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [currency, setCurrency] = useState<Currency>('eur')
  const [currencyIndex, setCurrencyIndex] = useState<number>(0)
  const currencies: Currency[] = useMemo(() => ['eur', 'usd', 'gbp', 'rub'], [])

  const changeCurrency = useCallback(
    (direction: 'right' | 'left') => {
      if (direction === 'right') {
        currencyIndex < currencies.length - 1
          ? setCurrencyIndex((prev) => prev + 1)
          : setCurrencyIndex(0)
      } else if (direction === 'left') {
        currencyIndex > 0
          ? setCurrencyIndex((prev) => prev - 1)
          : setCurrencyIndex(currencies.length - 1)
      }
    },
    [currencies.length, currencyIndex]
  )

  useEffect(() => {
    setCurrency(currencies[currencyIndex])
  }, [currencyIndex, currencies])

  const contextValue = useMemo(
    () => ({ currency, changeCurrency }),
    [currency, changeCurrency]
  )

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  )
}

export { CurrencyContext, CurrencyContextProvider }
