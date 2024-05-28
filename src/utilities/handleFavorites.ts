const getFavorites = () => {
  const favoritesString = localStorage.getItem('favorites')
  if (!favoritesString || favoritesString === '[]') {
    return ''
  }
  return JSON.parse(favoritesString).join(',')
}

const addCoinToFavorites = (coinId: string) => {
  const favoritesString = localStorage.getItem('favorites')
  if (!favoritesString || favoritesString === '[]') {
    localStorage.setItem('favorites', JSON.stringify([coinId]))
  } else {
    const newArray = JSON.parse(favoritesString)
    if (!newArray.includes(coinId)) {
      newArray.push(coinId)
      localStorage.setItem('favorites', JSON.stringify(newArray))
    }
  }
}

const removeCoinFromFavorites = (coinId: string) => {
  const favoritesString = localStorage.getItem('favorites')
  if (!favoritesString || favoritesString === '[]') {
    return
  } else {
    const newArray = JSON.parse(favoritesString)
    if (newArray.includes(coinId)) {
      const index = newArray.indexOf(coinId)
      newArray.splice(index, 1)
      localStorage.setItem('favorites', JSON.stringify(newArray))
    }
  }
}

export { getFavorites, addCoinToFavorites, removeCoinFromFavorites }
