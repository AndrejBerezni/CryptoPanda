import clsx from 'clsx'
import { CoinListCriteria } from '../../compiler/types'

const criteriaList: CoinListCriteria[] = ['market_cap', 'volume']

export default function SearchCriteriaSelect({
  criteria,
  setCriteria,
}: {
  criteria: CoinListCriteria
  setCriteria: (criteria: CoinListCriteria) => void
}) {
  return (
    <div className="bg-white dark:bg-black my-4 rounded-md shadow-md text-xs md:text-sm flex flex-col items-center py-2 gap-2">
      <h3 className="font-bold text-textColorSecondary">order by</h3>
      <menu>
        {criteriaList.map((crit: CoinListCriteria) => (
          <button
            key={`${crit}-criteria-select-btn`}
            type="button"
            onClick={() => setCriteria(crit)}
            className={clsx('mx-4 capitalize', {
              'font-bold text-accent hover:cursor-default': criteria === crit,
              'hover:text-accent hover:underline': criteria !== crit,
            })}
          >
            {crit.split('_').join(' ')}
          </button>
        ))}
      </menu>
    </div>
  )
}
