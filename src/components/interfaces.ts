export interface RecipeListItem {
  id: string
  image: string
  title: string
}

export interface RecipeDetailsProps {
  directions: string
  image: string
  ingredientes: string[]
  title: string
}
