import {
  AccountCircle,
  AddCircle,
  Home,
  FavoriteBorder,
  Search,
} from '@mui/icons-material'

interface navLink {
  label: string
  href: string
  icon?: JSX.Element
}

export const navLinks: navLink[] = [
  { label: 'home', href: '/home', icon: <Home /> },
  { label: 'profile', href: '/account/dashboard', icon: <AccountCircle /> },
  { label: 'categories', href: '/ads/categories', icon: <Search /> },
  { label: 'favourites', href: '/ads/favourites', icon: <FavoriteBorder /> },
]
