import SearchBar from '../components/SearchBar'
import SearchResult from '../components/SearchResult'
import Spinner from '../components/Spinner'
import useSearch from '../hooks/useSearch'

export default function ExplorePage() {
  const { input, setInput, debouncedSearch, results, isLoading, error } =
    useSearch()

  return (
    <section className="page-padding page-layout">
      <SearchBar input={input} setInput={setInput} search={debouncedSearch} />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="flex w-full gap-6 justofy-center sm:justify-around md:justify-between flex-wrap">
          {results.map((result) => (
            <SearchResult key={`${result.id}-search-result`} coin={result} />
          ))}
        </ul>
      )}
    </section>
  )
}
