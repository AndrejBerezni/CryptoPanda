import PaginationButton from './PaginationButton'

export default function Pagination({
  setPage,
  currentPage,
  isFavoritesPage,
  favoritesLength,
  errorExists,
}: Readonly<{
  setPage: (page: number) => void
  currentPage: number
  isFavoritesPage: boolean
  favoritesLength: number
  errorExists: boolean
}>) {
  // For Favorites page, we calculate number of pages. For top coins, it is always 5, for top 50 coins:
  const numberOfPages = isFavoritesPage ? Math.ceil(favoritesLength / 10) : 5
  const pages = Array.from({ length: numberOfPages }, (_, index) => index)

  if (!errorExists) {
    return (
      <ul className="flex gap-4 bg-white shadow-md dark:bg-black px-4 py-2 rounded-md">
        {pages.map((page) => (
          <PaginationButton
            key={`${page}-pagination-step`}
            page={page}
            setPage={setPage}
            currentPage={currentPage}
          />
        ))}
      </ul>
    )
  }
}
