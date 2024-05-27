import { useState, useEffect, useMemo } from 'react'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { Currency } from '../../compiler/types'

export default function CurrencySelector() {
  const [currency, setCurrency] = useState<number>(0)
  const currencies: Currency[] = useMemo(() => ['eur', 'usd', 'gbp', 'rub'], [])

  const changeCurrency = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      currency < currencies.length - 1
        ? setCurrency((prev) => prev + 1)
        : setCurrency(0)
    } else if (direction === 'down') {
      currency > 0
        ? setCurrency((prev) => prev - 1)
        : setCurrency(currencies.length - 1)
    }
  }

  // update local storage on currency change, since we need that value to be used accross the application
  useEffect(() => {
    localStorage.setItem('currency', currencies[currency])
  }, [currency, currencies])

  return (
    <div className="flex flex-col items-center ml-2">
      <IoMdArrowDropup
        className="md:text-lg hover:cursor-pointer hover:scale-150 hover:text-secondary duration-300"
        onClick={() => changeCurrency('up')}
      />
      <p className="uppercase hover:cursor-default text-center text-sm md:text-base md:w-[40px]">
        {currencies[currency]}
      </p>
      <IoMdArrowDropdown
        className="md:text-lg hover:cursor-pointer hover:scale-150 hover:text-secondary duration-300"
        onClick={() => changeCurrency('up')}
      />
    </div>
  )
}
