import { useState } from 'react'
import api from '@/services/recipes'
import { parseRecipesForList, parseRecipeDetails } from '@/utils/recipes'
import { RecipeDetailsProps, RecipeListItem } from '@/components/interfaces'

const useRecipes = () => {
  const [loading, setLoading] = useState(false)

  const getRandomRecipesList = async (): Promise<RecipeListItem[] | null> => {
    let response = null
    try {
      setLoading(true)
      const result = await api.getRandomRecipies(5)
      response = parseRecipesForList(result)
    } catch (error) {
      console.error('Hook', error)
    } finally {
      setLoading(false)
    }

    return response
  }

  const searchRecipe = async (
    string: string
  ): Promise<RecipeListItem[] | null> => {
    let response = null
    try {
      setLoading(true)
      const result = await api.searchRecipe(string)
      response = parseRecipesForList(result)
    } catch (error) {
      console.error('Hook', error)
    } finally {
      setLoading(false)
    }

    return response
  }

  const getRecipeDetails = async (
    id: string
  ): Promise<RecipeDetailsProps | null> => {
    let response = null
    try {
      setLoading(true)
      const result = await api.getRecipeDetails(id)
      response = parseRecipeDetails(result)
      console.log(response)
    } catch (error) {
      console.error('Hook', error)
    } finally {
      setLoading(false)
    }

    return response
  }

  return { getRandomRecipesList, getRecipeDetails, searchRecipe, loading }
}

export default useRecipes
