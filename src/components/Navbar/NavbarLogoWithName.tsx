import { Link } from 'react-router-dom'

export default function NavbarLogoWithName() {
  return (
    <div className="flex items-center gap-2 mr-auto">
      <img
        src="/logo.png"
        className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
      />
      <Link
        to="/"
        className="text:lg md:text-2xl font-bold uppercase tracking-widest mr-auto hover:text-secondary"
      >
        Crypto Panda
      </Link>
    </div>
  )
}
