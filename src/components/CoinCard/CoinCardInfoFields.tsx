import { useContext } from 'react'

import clsx from 'clsx'

import { ICoinDetailed } from '../../compiler/interfaces'
import { CurrencyContext } from '../../context/CurrencyContext'

const infoFields = [
  'current_price',
  'market_cap',
  'total_volume',
  'price_change_percentage_24h',
]
export default function CoinCardInfoFields({
  coin,
}: Readonly<{ coin: ICoinDetailed }>) {
  const { currency } = useContext(CurrencyContext)

  return (
    <div className="lg:flex justify-around flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1">
      {infoFields.map((field) => (
        <div
          key={`${coin.id}-${field}-info`}
          className="flex flex-col items-center"
        >
          <h3 className="capitalize text-xs text-accent dark:text-secondary font-source text-nowrap">
            {field.split('_').join(' ')}
          </h3>
          <p
            className={clsx('font-semibold', {
              'text-greenAccent':
                field === 'price_change_percentage_24h' &&
                (coin[field as keyof ICoinDetailed] as number) > 0,
              'text-redAccent':
                field === 'price_change_percentage_24h' &&
                (coin[field as keyof ICoinDetailed] as number) < 0,
            })}
          >
            {field === 'current_price'
              ? coin[field as keyof ICoinDetailed]?.toLocaleString('de-DE', {
                  style: 'currency',
                  currency,
                })
              : coin[field as keyof ICoinDetailed]?.toLocaleString('de-DE')}
            {field === 'price_change_percentage_24h' && '%'}
          </p>
        </div>
      ))}
    </div>
  )
}
