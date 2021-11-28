import React from 'react'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

import { styled, theme } from '@/styles/theme'

import logoImage from '@/images/logo.png'
import bgImage from '@/images/home-background.jpg'

import Typography from '@/styles/typography'
import GenericRecipesList from '@/components/GenericRecipesList'

import Providers from '@/providers/Providers'
import { AppContext } from '@/providers/AppProvider'
import SEO from '@/components/Common/SEO'

const Title = styled(Typography.Title2)`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: ${theme.colors.gray};
`

const FavoritesPage: React.FC<{}> = () => {
  return (
    <Providers>
      <SEO title="Favorites" />
      <Navbar />
      <Layout>
        <Hero bgImage={bgImage}>
          <img src={logoImage} alt="Site's Logo" />
        </Hero>
        <Title>My Favorites</Title>
        <AppContext.Consumer>
          {({ favorites }) => <GenericRecipesList recipes={favorites} />}
        </AppContext.Consumer>
      </Layout>
    </Providers>
  )
}

export default FavoritesPage
