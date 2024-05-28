import SearchBar from '../components/SearchBar'
import Spinner from '../components/Spinner'
import useSearch from '../hooks/useSearch'

export default function ExplorePage() {
  const { input, setInput, debouncedSearch, results, isLoading } = useSearch()

  return (
    <section className="page-padding page-layout">
      <SearchBar input={input} setInput={setInput} search={debouncedSearch} />
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {results.map((result) => (
            <p key={`${result.id}-search-result`}>{result.name}</p>
          ))}
        </ul>
      )}
    </section>
  )
}
