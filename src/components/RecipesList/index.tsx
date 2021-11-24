import React, { useCallback, useEffect, useState, lazy } from 'react'
import _ from 'lodash'

import useRecipes from '@/hooks/useRecipes'

import { RecipeListItem } from '@/components/interfaces'

import GenericRecipesList from '../GenericRecipesList'

const initList: RecipeListItem[] = []

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

  const debouncedGetRecipes = useCallback(_.debounce(getRecipes, 300), [])

  const debouncedSearchRecipes = useCallback(
    _.debounce(getRecipesBySearch, 300),
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

  return <GenericRecipesList loading={loading} recipes={recipes} />
}

export default RecipesList
