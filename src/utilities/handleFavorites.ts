const getFavorites = () => {
  const favoritesString = localStorage.getItem('favorites')
  if (!favoritesString || favoritesString === '[]') {
    return ''
  }
  return JSON.parse(favoritesString).join(',')
}

const addCoinToFavorites = () => {}

const removeCoinFromFavorites = () => {}

export { getFavorites }
