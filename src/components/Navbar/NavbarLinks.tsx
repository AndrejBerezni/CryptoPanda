import { ImHome, ImStarFull } from 'react-icons/im'
import { Link } from 'react-router-dom'

const links = [
  {
    text: 'Home',
    url: '/',
    icon: <ImHome className="md:hidden hover:scale-110 duration-200" />,
  },
  {
    text: 'Favorites',
    url: '/',
    icon: <ImStarFull className="md:hidden hover:scale-110 duration-200" />,
  },
]

export default function NavbarLinks() {
  return (
    <ul className="flex gap-4 md:gap-8 md:mr-6">
      {links.map((link) => (
        <Link
          to={link.url}
          key={`${link.text}-nav-link`}
          className="hover:text-secondary group relative flex items-center flex-col"
        >
          {link.icon}
          <p className="hidden md:block duration-200 text-lg hover:-translate-y-[2px] ">
            {link.text}
          </p>
        </Link>
      ))}
    </ul>
  )
}
