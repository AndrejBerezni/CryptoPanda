import clsx from 'clsx'

export default function Pagination({
  setPage,
  currentPage,
  numberOfPages,
}: {
  setPage: (page: number) => void
  currentPage: number
  numberOfPages: number
}) {
  const pages = Array.from({ length: numberOfPages }, (_, index) => index)
  console.log(currentPage)
  return (
    <ul className="flex gap-4 bg-white shadow-md dark:bg-black px-4 py-2 rounded-md">
      {pages.map((page) => (
        <li key={`${page}-pagination-step`}>
          <button
            onClick={() => setPage(page + 1)}
            className={clsx('text-lg md:text-xl font-bold', {
              'text-accent scale-110 underline':
                currentPage === page + 1 ||
                (page + 1 === 1 && currentPage === 0),
              ' hover:scale-110 hover:text-accent duration-200':
                currentPage !== page + 1,
            })}
          >
            {page + 1}
          </button>
        </li>
      ))}
    </ul>
  )
}
