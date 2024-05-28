import { ImStarFull, ImStarEmpty } from 'react-icons/im'
import { MdOpenInNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function CoinCardButtons({
  coinId,
  isFavorite,
}: {
  coinId: string
  isFavorite: boolean
}) {
  return (
    <menu className="flex gap-4 items-center text-xl ml-2 flex-row sm:flex-col lg:flex-row relative text-primary dark:text-secondary">
      <Link
        to={`/coin/${coinId}`}
        className="dark:hover:text-primary hover:text-secondary hover:scale-125 duration-200"
      >
        <MdOpenInNew />
      </Link>
      <button
        type="button"
        className="dark:hover:text-primary hover:text-secondary hover:scale-125 duration-200"
      >
        {isFavorite ? <ImStarFull /> : <ImStarEmpty />}
      </button>
    </menu>
  )
}
