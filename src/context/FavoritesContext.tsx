import { createContext, useState, useEffect, useMemo, useCallback } from 'react'
import {
  getFavorites,
  addCoinToFavorites,
  removeCoinFromFavorites,
} from '../utilities/handleFavorites'

// creating this context to reflect changes in favorites list immediately on rendered CoinCard components
// Favorites list is persisted across sessions by using localStorage

interface IFavoritesContext {
  favorites: string[]
  removeFavorite: (coinId: string) => void
  addFavorite: (coinId: string) => void
}

const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  removeFavorite: (coinId: string) => {
    console.log(coinId)
    return
  },
  addFavorite: (coinId: string) => {
    console.log(coinId)
    return
  }, // removeFavorite and addFavorite here are dummy functions that will be overwritten in provider below
})

function FavoritesContextProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([])

  //on initial render, set up favorites according to favorites in localStorage
  useEffect(() => {
    const favoritesString = getFavorites()
    setFavorites(favoritesString.split(','))
  }, [])

  const removeFavorite = useCallback(
    (coinId: string) => {
      removeCoinFromFavorites(coinId)
      const newFavorites = [...favorites]
      if (newFavorites.includes(coinId)) {
        newFavorites.slice(newFavorites.indexOf(coinId), 1)
        setFavorites(newFavorites)
      }
    },
    [favorites]
  )

  const addFavorite = useCallback(
    (coinId: string) => {
      addCoinToFavorites(coinId)
      const newFavorites = [...favorites]
      if (!newFavorites.includes(coinId)) {
        newFavorites.push(coinId)
        setFavorites(newFavorites)
      }
    },
    [favorites]
  )

  const contextValue = useMemo(
    () => ({ favorites, removeFavorite, addFavorite }),
    [favorites, removeFavorite, addFavorite]
  )

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesContextProvider }
