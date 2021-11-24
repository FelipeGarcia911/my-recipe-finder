import React, { lazy } from 'react'
import { navigate } from 'gatsby'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import ROUTES from '@/constants/routes'

import logoImage from '@/images/logo.png'

import { Container, Icon, IconsZone, LeftSide, Logo, RightSide } from './styles'
import SuspenseComponent from '@/components/Suspense'
import FavoriteIcon from '../FavoriteIcon'

const SearchBar = lazy(() => import('@/components/SearchBar'))

interface NavbarProps {
  children?: React.ReactNode
  handleOnClose?(): void
  handleOnSearchBarChange?(string: string): void
  isHome?: boolean
  showSearchBar?: boolean
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const {
    children,
    handleOnClose,
    handleOnSearchBarChange,
    isHome = false,
    showSearchBar,
  } = props

  const handleOnBack = () => !isHome && navigate(ROUTES.HOME)

  return (
    <Container>
      <LeftSide>
        {!isHome && (
          <Icon onClick={handleOnBack} icon={faArrowLeft} size="2x" />
        )}
        <Logo onClick={handleOnBack} src={logoImage}></Logo>
      </LeftSide>
      <RightSide>
        {showSearchBar && (
          <SuspenseComponent>
            <SearchBar
              onInputChange={handleOnSearchBarChange}
              handleOnClose={handleOnClose}
            />
          </SuspenseComponent>
        )}
        {children && <IconsZone>{children}</IconsZone>}
        <FavoriteIcon />
      </RightSide>
    </Container>
  )
}

export default Navbar
