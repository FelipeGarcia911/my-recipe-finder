import React from 'react'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import RecipesList from '@/components/RecipesList'

import logoImage from '@/images/logo.png'
import bgImage from '@/images/home-background.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <Hero bgImage={bgImage}>
        <img src={logoImage} />
      </Hero>
      <RecipesList />
    </Layout>
  )
}

export default IndexPage
