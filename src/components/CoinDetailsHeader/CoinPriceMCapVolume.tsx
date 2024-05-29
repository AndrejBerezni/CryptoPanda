import { useContext } from 'react'

import { CurrencyContext } from '../../context/CurrencyContext'

export default function CoinPriceMCapVolume({
  price,
  marketCap,
  marketCapRank,
  volume,
}: Readonly<{
  price: number
  marketCap: number
  marketCapRank: number
  volume: number
}>) {
  const { currency } = useContext(CurrencyContext)

  const listItems = [
    {
      title: 'Price',
      value: price?.toLocaleString('de-De', { style: 'currency', currency }),
    },
    {
      title: 'Market Cap',
      value: marketCap?.toLocaleString('de-De', {
        style: 'currency',
        currency,
      }),
    },
    {
      title: 'Market Cap Ranking',
      value: marketCapRank,
    },
    {
      title: 'Total Volume',
      value: volume?.toLocaleString('de-De', { style: 'currency', currency }),
    },
  ]

  return (
    <ul className="flex gap-4 flex-col">
      {listItems.map((item) => (
        <li className="w-full">
          <p className="flex gap-8 justify-between items-center max-[320px]:text-xs font-semibold tracking-wide font-source">
            {item.title}:
            <span className="font-extrabold text-primary dark:text-secondary max-[320px]:text-xs text-sm  font-mont">
              {item.value}
            </span>
          </p>
        </li>
      ))}
    </ul>
  )
}
