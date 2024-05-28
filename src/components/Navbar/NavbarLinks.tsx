import clsx from 'clsx'
import { ImTrophy, ImStarFull, ImSearch } from 'react-icons/im'
import { Link, useLocation } from 'react-router-dom'

const links = [
  {
    text: 'Top Coins',
    url: '/',
    icon: <ImTrophy className="hidden md:block" />,
  },
  {
    text: 'Explore',
    url: '/search',
    icon: <ImSearch className="hidden md:block" />,
  },
  {
    text: 'Favorites',
    url: '/favorites',
    icon: <ImStarFull className="hidden md:block" />,
  },
]

export default function NavbarLinks() {
  const location = useLocation()
  return (
    <ul className="flex gap-4 md:gap-8 md:mr-6">
      {links.map((link) => (
        <Link
          to={link.url}
          key={`${link.text}-nav-link`}
          className={clsx('flex items-center gap-2 text-center', {
            'primary-btn hover:bg-primary hover:text-backgroundColor dark:hover:text-backgroundColorDark hover:cursor-default':
              location.pathname === link.url,
            'secondary-btn': location.pathname !== link.url,
          })}
        >
          {link.icon}
          {link.text}
        </Link>
      ))}
    </ul>
  )
}
