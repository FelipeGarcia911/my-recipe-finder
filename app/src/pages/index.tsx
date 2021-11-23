import React from 'react'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import RecipesList from '@/components/RecipesList'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <RecipesList />
    </Layout>
  )
}

export default IndexPage
