import { useState } from 'react'
import api from '@/services/recipes'
import { getRecipesForList } from '@/utils/recipes'
import { RecipeListItem } from '@/components/interfaces'

const useRecipes = () => {
  const [loading, setLoading] = useState(false)

  const getRandomRecipesList = async (): Promise<RecipeListItem[] | null> => {
    let response = null
    try {
      setLoading(true)
      const result = await api.getRandomRecipies(5)
      response = getRecipesForList(result)
    } catch (error) {
      console.error('Hook', error)
    } finally {
      setLoading(false)
    }

    return response
  }

  const searchRecipe = async (string: string) => {
    let response = null
    try {
      setLoading(true)
      const result = await api.searchRecipe(string)
      response = result
    } catch (error) {
      console.error('Hook', error)
    } finally {
      setLoading(false)
    }

    return response
  }

  const getRecipeDetails = async (id: string) => {
    let response = null
    try {
      setLoading(true)
      const result = await api.getRecipeDetails(id)
      response = result
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
