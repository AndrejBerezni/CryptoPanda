import { ICoinDetailed } from '../../compiler/interfaces'
import calculateListPosition from '../../utilities/calculateListPosition'
import CoinCard from '../CoinCard'
import Spinner from '../Spinner'

export default function CoinList({
  coins,
  isLoading,
  error,
  searchParams,
}: {
  coins: ICoinDetailed[]
  isLoading: boolean
  error: string
  searchParams: URLSearchParams
}) {
  let content

  if (isLoading) {
    content = <Spinner />
  } else if (error) {
    content = <p>{error}</p>
  } else {
    content = coins.map((coin, index) => (
      <CoinCard
        coin={coin}
        key={`${coin.id}-coin-card`}
        position={calculateListPosition(
          Number(searchParams.get('page')),
          index
        )}
      />
    ))
  }

  return (
    <ul className="flex flex-col items-center justify-center flex-1 gap-3 w-full max-w-full">
      {content}
    </ul>
  )
}
