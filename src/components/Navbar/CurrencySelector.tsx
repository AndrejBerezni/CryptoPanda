import { useState, useEffect, useMemo } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { Currency } from '../../compiler/types'

export default function CurrencySelector() {
  const [currency, setCurrency] = useState<number>(0)
  const currencies: Currency[] = useMemo(() => ['eur', 'usd', 'gbp', 'rub'], [])

  const changeCurrency = (direction: 'right' | 'left') => {
    if (direction === 'right') {
      currency < currencies.length - 1
        ? setCurrency((prev) => prev + 1)
        : setCurrency(0)
    } else if (direction === 'left') {
      currency > 0
        ? setCurrency((prev) => prev - 1)
        : setCurrency(currencies.length - 1)
    }
  }

  // update session storage on currency change, since we need that value to be used accross the application
  useEffect(() => {
    sessionStorage.setItem('currency', currencies[currency])
  }, [currency, currencies])

  return (
    <div className="flex items-center gap-1 md:gap-2 md:w-24 w-18 -ml-18 md:-ml-24">
      <IoMdArrowDropleft
        className="md:text-2xl text-xl hover:cursor-pointer hover:scale-150 hover:text-secondary duration-300"
        onClick={() => changeCurrency('left')}
      />
      <p className="uppercase hover:cursor-default text-center font-bold text-sm md:text-base md:w-[40px]">
        {currencies[currency]}
      </p>
      <IoMdArrowDropright
        className="md:text-2xl text-xl hover:cursor-pointer hover:scale-150 hover:text-secondary duration-300"
        onClick={() => changeCurrency('right')}
      />
    </div>
  )
}
