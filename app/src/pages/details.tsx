import React, { useEffect, useState } from 'react'
import queryString from 'query-string'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import useRecipes from '@/hooks/useRecipes'
import RecipeDetails from '@/components/RecipeDetails'
import { navigate } from 'gatsby-link'
import ROUTES from '@/constants/routes'

const DetailsPage = (props) => {
  const { loading, getRecipeDetails } = useRecipes()
  const [recipe, setRecipe] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getRecipeId = () => {
    const urlParams = queryString.parse(props.location.search)
    return urlParams?.id
  }

  const getRecipe = async (id: string) => {
    const response = await getRecipeDetails(id)
    if (response) {
      setRecipe(response)
    } else {
      handleOnInvalid()
    }
    setIsLoading(loading)
  }

  const handleOnInvalid = () => {
    navigate(ROUTES.HOME)
  }

  useEffect(() => {
    console.log(props)
    const id = getRecipeId()
    if (id) {
      getRecipe(id)
    } else {
      handleOnInvalid()
    }
  }, [])

  return (
    <Layout>
      <Loader loading={isLoading}>
        <RecipeDetails recipe={recipe} />
      </Loader>
    </Layout>
  )
}

export default DetailsPage
