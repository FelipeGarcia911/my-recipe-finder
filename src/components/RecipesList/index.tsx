import React, { useCallback, useEffect, useState, Suspense, lazy } from 'react'
import { debounce } from 'lodash'

import useRecipes from '@/hooks/useRecipes'

import { RecipeListItem } from '@/components/interfaces'
import SuspenseComponent from '@/components/Suspense'

import { Container, NoResults } from './styles'

const initList: RecipeListItem[] = []
const RecipeItem = lazy(() => import('@/components/RecipeItem'))

interface RecipeListProps {
  search?: string
  isSearchBarVisible: boolean
}

const RecipesList: React.FC<RecipeListProps> = ({
  search,
  isSearchBarVisible,
}) => {
  const { loading, getRandomRecipesList, searchRecipe } = useRecipes()
  const [recipes, setRecipes] = useState(initList)
  const hasRecipes = recipes && recipes.length

  const getRecipes = async () => {
    const response = await getRandomRecipesList()
    if (response) setRecipes(response)
  }

  const getRecipesBySearch = async (string?: string) => {
    if (string) {
      const response = await searchRecipe(string)
      if (response) setRecipes(response)
    }
  }

  const debouncedGetRecipes = useCallback(debounce(getRecipes, 300), [])

  const debouncedSearchRecipes = useCallback(
    debounce(getRecipesBySearch, 300),
    []
  )

  useEffect(() => {
    debouncedGetRecipes()
  }, [])

  useEffect(() => {
    const shouldReload = !isSearchBarVisible && !loading && search !== ''
    if (shouldReload) debouncedGetRecipes()
  }, [isSearchBarVisible])

  useEffect(() => {
    debouncedSearchRecipes(search)
  }, [search])

  return (
    <Container loading={loading}>
      {hasRecipes ? (
        <>
          {recipes.map((recipe, idx) => (
            <SuspenseComponent>
              <RecipeItem key={idx} recipe={recipe} />
            </SuspenseComponent>
          ))}
        </>
      ) : (
        <NoResults>No results</NoResults>
      )}
    </Container>
  )
}

export default RecipesList
