import { ChangeEvent } from 'react'

import { IoIosCloseCircle } from 'react-icons/io'

export default function SearchBar({
  input,
  setInput,
  search,
}: Readonly<{
  input: string
  setInput: (searchInput: string) => void
  search: () => void
}>) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value
    setInput(searchInput)
    if (searchInput.length > 1) {
      search()
    }
  }

  return (
    <article className="relative">
      <input
        type="text"
        className="shadow-md w-full rounded-md md:min-w-[400px] px-4 py-2 bg-white dark:bg-black border-secondary border-2  outline-none focus:border-primary focus:ring-none duration-200"
        placeholder="Search coins by name or symbol..."
        value={input}
        onChange={handleChange}
      ></input>
      {input.length > 0 && (
        <button
          className="absolute right-2 top-1/4 text-xl hover:text-redAccent duration-200 hover:scale-105"
          onClick={() => setInput('')}
        >
          <IoIosCloseCircle />
        </button>
      )}
    </article>
  )
}
