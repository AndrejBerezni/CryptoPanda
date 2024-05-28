import CurrencySelector from './CurrencySelector'
import NavbarLinks from './NavbarLinks'
import NavbarLogoWithName from './NavbarLogoWithName'

export default function Navbar() {
  return (
    <menu className="w-full flex flex-col items-center gap-3 bg-backgroundColor dark:bg-backgroundColorDark font-semibold h-fit py-4 page-padding">
      <div className="flex w-full flex-wrap">
        <NavbarLogoWithName />
        <CurrencySelector />
      </div>
      <NavbarLinks />
    </menu>
  )
}
