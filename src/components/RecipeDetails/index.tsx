import React from 'react'
import Hero from '../Hero'
import { RecipeDetailsProps } from '../interfaces'

import { Container, Title, Directions, Ingredient } from './styles'

interface DetailsProps {
  recipe?: RecipeDetailsProps
}

const RecipeDetails: React.FC<DetailsProps> = (props) => {
  const { recipe } = props

  return (
    <Container>
      <Hero bgImage={recipe?.image} />
      <Title>{recipe?.title}</Title>
      {recipe?.ingredientes.map((ingredient, idx) => (
        <Ingredient key={idx}>{ingredient}</Ingredient>
      ))}
      <Title>Directions</Title>
      <Directions>{recipe?.directions}</Directions>
    </Container>
  )
}

export default RecipeDetails
