import { ImStarFull } from 'react-icons/im'

export default function FavoritesEmptyMessage({
  show,
}: Readonly<{ show: boolean }>) {
  if (show) {
    return (
      <div className="text-center">
        <p>You currently don't have any coins added to Favorites page.</p>
        <p>
          Add coins by clicking{' '}
          <ImStarFull className="inline text-accent mx-1" /> on coin cards when
          searching for coins or viewing them on home page.
        </p>
      </div>
    )
  }
}
