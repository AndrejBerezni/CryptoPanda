import { ImStarFull, ImStarEmpty } from 'react-icons/im'
import { MdOpenInNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {
  addCoinToFavorites,
  removeCoinFromFavorites,
} from '../../utilities/handleFavorites'

export default function CoinCardButtons({
  coinId,
  isFavorite,
  changeFavorites,
}: {
  coinId: string
  isFavorite: boolean
  changeFavorites: () => void
}) {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeCoinFromFavorites(coinId)
    } else {
      addCoinToFavorites(coinId)
    }
    changeFavorites()
  }
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
        onClick={handleFavoriteClick}
      >
        {isFavorite ? <ImStarFull /> : <ImStarEmpty />}
      </button>
    </menu>
  )
}
