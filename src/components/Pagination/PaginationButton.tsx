import clsx from 'clsx'

export default function PaginationButton({
  page,
  setPage,
  currentPage,
}: Readonly<{
  page: number
  setPage: (page: number) => void
  currentPage: number
}>) {
  return (
    <li>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setPage(page + 1)
        }}
        className={clsx('text-lg md:text-xl font-bold', {
          'text-accent scale-125 underline':
            currentPage === page + 1 || (page + 1 === 1 && currentPage === 0),
          ' hover:scale-110 hover:text-accent duration-200':
            currentPage !== page + 1,
        })}
      >
        {page + 1}
      </button>
    </li>
  )
}
