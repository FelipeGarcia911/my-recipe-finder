import { RecipeListItem } from '@/components/interfaces'
import { get } from 'lodash'

export const getRecipesForList = (rawRecipes: any): RecipeListItem[] => {
  const recipeItems = (rawRecipes || []).map((rawRecipe) => {
    const item = {
      title: get(rawRecipe, 'strMeal'),
      image: get(rawRecipe, 'strMealThumb'),
      id: get(rawRecipe, 'idMeal'),
    }
    return item
  })

  return recipeItems
}
