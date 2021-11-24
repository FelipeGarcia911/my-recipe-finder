import React, { lazy } from 'react'

import { RecipeListItem } from '@/components/interfaces'
import SuspenseComponent from '@/components/Suspense'

import { Container, NoResults } from './styles'

const RecipeItem = lazy(() => import('@/components/RecipeItem'))

interface GenericRecipesListProps {
  recipes: RecipeListItem[]
  loading?: boolean
}

const GenericRecipesList: React.FC<GenericRecipesListProps> = (props) => {
  const { recipes, loading = false } = props
  const hasRecipes = recipes && recipes.length

  return (
    <Container loading={loading}>
      {hasRecipes ? (
        <>
          {recipes.map((recipe, idx) => (
            <SuspenseComponent key={idx}>
              <RecipeItem key={idx} recipe={recipe} />
            </SuspenseComponent>
          ))}
        </>
      ) : (
        <NoResults>No recipes</NoResults>
      )}
    </Container>
  )
}

export default GenericRecipesList
