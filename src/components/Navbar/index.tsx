import React, { lazy } from 'react'
import { navigate } from 'gatsby'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import ROUTES from '@/constants/routes'

import logoImage from '@/images/logo.png'

import { Container, Icon, Logo } from './styles'
import SuspenseComponent from '../Suspense'

const SearchBar = lazy(() => import('@/components/SearchBar'))

interface NavbarProps {
  children?: React.ReactNode
  handleOnSearchBarChange(string: string): void
  handleOnClose(): void
  isHome: boolean
  showSearchBar: boolean
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const {
    handleOnClose,
    handleOnSearchBarChange,
    isHome = false,
    showSearchBar,
  } = props

  const handleOnBack = () => !isHome && navigate(ROUTES.HOME)

  return (
    <Container>
      {!isHome && <Icon onClick={handleOnBack} icon={faArrowLeft} size="lg" />}
      <Logo onClick={handleOnBack} src={logoImage}></Logo>
      {showSearchBar && (
        <SuspenseComponent>
          <SearchBar
            onInputChange={handleOnSearchBarChange}
            handleOnClose={handleOnClose}
          />
        </SuspenseComponent>
      )}
    </Container>
  )
}

export default Navbar
