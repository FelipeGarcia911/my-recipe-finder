import { useState } from 'react'
import api from '@/services/recipes'

const useRecipes = () => {
  const [loading, setLoading] = useState(false)

  const getRandomRecipes = async () => {
    let response = null
    try {
      setLoading(true)
      const result = await api.getRandomRecipies(5)
      response = result
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

  return { getRandomRecipes, getRecipeDetails, searchRecipe, loading }
}

export default useRecipes
