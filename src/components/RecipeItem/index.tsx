import ROUTES from '@/constants/routes'
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

  const detailsURL = `${ROUTES.DETAILS}?id=${id}`

  return (
    <Container to={detailsURL}>
      <Title>{title}</Title>
      <Image src={image} alt={title} height="250px" />
    </Container>
  )
}

export default RecipeItem
