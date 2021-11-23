import React from 'react'

import { Container, Image, Title } from './styles'

interface Recipe {
  id: string
  image: string
  title: string
}
interface RecipeItemProps {
  recipe: Recipe
}

const RecipeItem: React.FC<RecipeItemProps> = (props) => {
  const { recipe } = props
  const { title, image, id } = recipe

  const handleOnClick = () => {
    console.log(id)
  }

  return (
    <Container onClick={handleOnClick}>
      <Title>{title}</Title>
      <Image bgImage={image} />
    </Container>
  )
}

export default RecipeItem
