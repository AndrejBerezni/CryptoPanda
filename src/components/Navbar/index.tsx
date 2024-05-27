import NavbarLinks from './NavbarLinks'
import NavbarLogoWithName from './NavbarLogoWithName'

export default function Navbar() {
  return (
    <menu className="w-full flex items-center gap-3 bg-primary font-semibold h-fit py-4 page-padding text-backgroundColor dark:text-textColorDark">
      <NavbarLogoWithName />
      <NavbarLinks />
    </menu>
  )
}
