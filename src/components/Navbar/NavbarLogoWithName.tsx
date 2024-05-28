import { Link } from 'react-router-dom'

export default function NavbarLogoWithName() {
  return (
    <Link
      to="/"
      className="flex flex-1 items-center md:justify-center gap-1 text:lg md:text-2xl font-bold uppercase tracking-widest hover:text-secondary"
    >
      <img src="/logo.png" className="w-[30px] h-[30px] md:hidden block" />
      <h1>Crypto</h1>
      <img src="/logo.png" className="w-[50px] h-[50px] md:block hidden" />
      <h1>Panda</h1>
    </Link>
  )
}
