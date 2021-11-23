import React, { useEffect, useState } from 'react'

import useRecipes from '@/hooks/useAPI'
import { RecipeListItem } from '@/components/interfaces'

import { Container } from './styles'
import RecipeItem from '../RecipeItem'

const initList: RecipeListItem[] = []

const RecipesList: React.FC = () => {
  const { loading, getRandomRecipesList } = useRecipes()
  const [recipes, setRecipes] = useState(initList)

  const getRecipes = async () => {
    const response = await getRandomRecipesList()
    if (response) setRecipes(response)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <Container loading={loading}>
      {recipes.map((recipe, idx) => (
        <RecipeItem key={idx} recipe={recipe} />
      ))}
    </Container>
  )
}

export default RecipesList
