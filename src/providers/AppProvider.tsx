import { RecipeDetailsProps } from '@/components/interfaces'
import { getItem, saveItem } from '@/utils/localStorage'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const AppContext = createContext({
  favorites: [],
  addFavorite: (recipe: RecipeDetailsProps) => {},
})

export const useAppContext = () => useContext(AppContext)

const STORAGE_KEY = 'APP_CONTEXT'

const AppProvider: React.FC<{}> = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const retrieveContext = () => {
    const payload = getItem(STORAGE_KEY)
    if (payload) setFavorites(payload?.favorites)
  }

  const saveContext = (payload: any) => {
    saveItem(STORAGE_KEY, payload)
  }

  const handleOnAddFavorite = (recipe: RecipeDetailsProps) => {
    const hasRecipe = favorites.some((favorite) => favorite.id === recipe.id)
    if (!hasRecipe) {
      const newFavorites = [...favorites, recipe]
      saveContext({ favorites: newFavorites })
      setFavorites(newFavorites)
    }
  }

  useEffect(() => {
    retrieveContext()
  }, [])

  return (
    <AppContext.Provider
      value={{ favorites, addFavorite: handleOnAddFavorite }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
