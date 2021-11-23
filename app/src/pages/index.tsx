import React from 'react'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import RecipesList from '@/components/RecipesList'
import Navbar from '@/components/Navbar'

import { styled, theme } from '@/styles/theme'

import logoImage from '@/images/logo.png'
import bgImage from '@/images/home-background.jpg'
import Typography from '@/styles/typography'

const Title = styled(Typography.Title2)`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 8rem;
  color: ${theme.colors.gray};
`

const IndexPage = () => {
  return (
    <div>
      <Navbar isHome={true} />
      <Layout>
        <Hero bgImage={bgImage}>
          <img src={logoImage} />
        </Hero>
        <Title>Recipes of the Day</Title>
        <RecipesList />
      </Layout>
    </div>
  )
}

export default IndexPage
