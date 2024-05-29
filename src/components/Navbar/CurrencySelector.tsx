import { useContext } from 'react'

import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

import { CurrencyContext } from '../../context/CurrencyContext'

export default function CurrencySelector() {
  const { currency, changeCurrency } = useContext(CurrencyContext)

  return (
    <div className="flex items-center gap-1 md:gap-2 md:w-24 w-18 -ml-18 md:-ml-24">
      <IoMdArrowDropleft
        className="md:text-2xl text-xl hover:cursor-pointer hover:scale-150 hover:text-secondary duration-300"
        onClick={() => changeCurrency('left')}
      />
      <p className="uppercase hover:cursor-default text-center font-bold text-sm md:text-base md:w-[40px]">
        {currency}
      </p>
      <IoMdArrowDropright
        className="md:text-2xl text-xl hover:cursor-pointer hover:scale-150 hover:text-secondary duration-300"
        onClick={() => changeCurrency('right')}
      />
    </div>
  )
}
