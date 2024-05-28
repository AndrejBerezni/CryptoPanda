import { ICoinBasicInfo } from '../../compiler/interfaces'
import CoinCardButtons from '../CoinCard/CoinCardButtons'

export default function SearchResult({ coin }: { coin: ICoinBasicInfo }) {
  return (
    <li className="bg-white hover:cursor-default hover:-translate-y-1 duration-300 dark:bg-black rounded-md shadow-md p-4 w-full sm:w-[40%] lg:w-1/4 2xl:w-1/5 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <img src={coin.thumb} alt={coin.name} className="w-[25px] h-[25px]" />
        <h3>
          {coin.name}{' '}
          <span className="font-bold text-primary">({coin.symbol})</span>
        </h3>
      </div>

      <CoinCardButtons coinId={coin.id} />
    </li>
  )
}
