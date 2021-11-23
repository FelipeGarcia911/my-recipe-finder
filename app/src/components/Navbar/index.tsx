import React from 'react'
import { navigate } from 'gatsby'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logoImage from '@/images/logo.png'

import { Container, Icon, Logo } from './styles'

interface NavbarProps {
  children?: React.ReactNode
  isHome: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isHome = false }) => {
  const handleOnBack = () => !isHome && navigate(-1)

  return (
    <Container>
      {!isHome && <Icon onClick={handleOnBack} icon={faArrowLeft} size="lg" />}
      <Logo onClick={handleOnBack} src={logoImage}></Logo>
    </Container>
  )
}

export default Navbar
