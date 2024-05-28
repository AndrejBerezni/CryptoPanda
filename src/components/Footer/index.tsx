import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-4 w-full flex justify-center items-center gap-2 text-textColorSecondary font-source">
      <p>Powered by</p>
      <img
        src="/coingecko.png"
        className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
      />
      <Link to="https://www.coingecko.com/" className="hover:text-primary">
        Coingecko
      </Link>
    </footer>
  )
}
