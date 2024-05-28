import CoinCardButtons from './CoinCardButtons'
import CoinCardInfoFields from './CoinCardInfoFields'
import CoinCardTitle from './CoinCardTitle'
import { ICoinDetailed } from '../../compiler/interfaces'

export default function CoinCard({
  coin,
  position,
  isFavorite,
  changeFavorites,
}: {
  coin: ICoinDetailed
  position: number
  isFavorite: boolean
  changeFavorites: () => void
}) {
  return (
    <li className="bg-white dark:bg-black shadow-md rounded-md w-full max-w-full hover:cursor-default overflow-x-auto p-4 flex flex-col sm:flex-row flex-nowrap items-center gap-2 hover:-translate-y-1 duration-200">
      <CoinCardTitle coin={coin} position={position} />
      <CoinCardInfoFields coin={coin} />
      <CoinCardButtons
        coinId={coin.id}
        isFavorite={isFavorite}
        changeFavorites={changeFavorites}
      />
    </li>
  )
}
