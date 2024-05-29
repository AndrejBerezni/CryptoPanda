import { useContext, useState } from 'react'

import { ImStarFull, ImStarEmpty } from 'react-icons/im'
import { MdOpenInNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { FavoritesContext } from '../../context/FavoritesContext'

export default function CoinCardButtons({
  coinId,
}: Readonly<{ coinId: string }>) {
  const { favorites, removeFavorite, addFavorite } =
    useContext(FavoritesContext)
  const [isFavorite, setIsFavorite] = useState<boolean>(
    favorites.includes(coinId)
  )

  const handleFavoriteClick = () => {
    if (favorites.includes(coinId)) {
      setIsFavorite(false)
      removeFavorite(coinId)
    } else {
      setIsFavorite(true)
      addFavorite(coinId)
    }
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
