import React from 'react'

import { useAppContext } from '@/providers/AppProvider'

import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Container, Icon } from './styles'

interface FavoriteButtonProps {
  recipe: any
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ recipe }) => {
  const { addFavorite } = useAppContext()

  const handleOnClick = () => {
    addFavorite(recipe)
  }
  return (
    <Container onClick={handleOnClick}>
      <Icon icon={faHeart} size="2x" />
    </Container>
  )
}

export default FavoriteButton
