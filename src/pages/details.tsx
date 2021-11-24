import React, { useEffect, useState } from 'react'
import { parse } from 'query-string'
import { navigate } from 'gatsby-link'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import RecipeDetails from '@/components/RecipeDetails'
import Navbar from '@/components/Navbar'

import ROUTES from '@/constants/routes'
import useRecipes from '@/hooks/useRecipes'

const DetailsPage = (props) => {
  const { loading, getRecipeDetails } = useRecipes()
  const [recipe, setRecipe] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getRecipeId = () => {
    const urlParams = parse(props.location.search)
    return urlParams?.id
  }

  const handleOnInvalid = () => {
    navigate(ROUTES.HOME)
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

  useEffect(() => {
    const id = getRecipeId()
    if (id) {
      getRecipe(id)
    } else {
      handleOnInvalid()
    }
  }, [])

  return (
    <div>
      <Navbar />
      <Layout>
        <Loader loading={isLoading}>
          <RecipeDetails recipe={recipe} />
        </Loader>
      </Layout>
    </div>
  )
}

export default DetailsPage
