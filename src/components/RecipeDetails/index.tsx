import React from 'react'
import Hero from '../Hero'
import { RecipeDetailsProps } from '../interfaces'

import {
  Container,
  Title,
  Directions,
  Ingredient,
  ContentContainer,
} from './styles'

interface DetailsProps {
  recipe?: RecipeDetailsProps
}

const RecipeDetails: React.FC<DetailsProps> = (props) => {
  const { recipe } = props

  return (
    <Container>
      <Hero bgImage={recipe?.image} />
      <ContentContainer>
        <Title>{recipe?.title}</Title>
        {recipe?.ingredientes.map((ingredient, idx) => (
          <Ingredient key={idx}>{ingredient}</Ingredient>
        ))}
        <Title>Directions</Title>
        <Directions>{recipe?.directions}</Directions>
      </ContentContainer>
    </Container>
  )
}

export default RecipeDetails
