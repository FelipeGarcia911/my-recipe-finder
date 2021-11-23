import React from 'react'
import { Container, Logo } from './styles'
import BackgroundImg from '@/images/home-background.jpg'
import LogoImg from '@/images/logo.png'

const Hero: React.FC = () => {
  return (
    <Container bgImage={BackgroundImg}>
      <Logo src={LogoImg} />
    </Container>
  )
}

export default Hero
