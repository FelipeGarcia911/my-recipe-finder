import React from 'react'
import { Container } from './styles'

interface HeroProps {
  children?: React.ReactNode
  bgImage?: string
}

const Hero: React.FC<HeroProps> = ({ children, bgImage }) => {
  return <Container bgImage={bgImage}>{children}</Container>
}

export default Hero
