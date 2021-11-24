import { RecipeDetailsProps, RecipeListItem } from '@/components/interfaces'
import FIELDS from '@/constants/api'
import { get } from 'lodash'

export const parseRecipesForList = (rawRecipes: any): RecipeListItem[] => {
  const recipeItems = (rawRecipes || []).map((rawRecipe) => {
    const item = {
      title: get(rawRecipe, FIELDS.TITLE),
      image: get(rawRecipe, FIELDS.IMAGE),
      id: get(rawRecipe, FIELDS.ID),
    }
    return item
  })

  return recipeItems
}

export const parseRecipeDetails = (rawRecipe: any): RecipeDetailsProps => {
  const recipe = {
    directions: get(rawRecipe, FIELDS.INSTRUCTIONS),
    id: get(rawRecipe, FIELDS.ID),
    image: get(rawRecipe, FIELDS.IMAGE),
    ingredientes: parseRecipeIngredients(rawRecipe),
    title: get(rawRecipe, FIELDS.TITLE),
  }

  return recipe
}

export const parseRecipeIngredients = (rawRecipe: any): string[] => {
  const keys = Object.keys(rawRecipe)

  const ingredients = keys
    .filter((key) => key.includes(FIELDS.INGREDIENTS))
    .filter((key) => rawRecipe[key])
    .map((ingrKey) => {
      const idx = ingrKey.replace(FIELDS.INGREDIENTS, '')
      const measure = rawRecipe[`${FIELDS.MEASURES}${idx}`]
      const ingredient = rawRecipe[`${FIELDS.INGREDIENTS}${idx}`]
      return `${measure} ${ingredient}`
    })

  return ingredients
}
