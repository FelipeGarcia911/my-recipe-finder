import React, { useState } from 'react'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import RecipesList from '@/components/RecipesList'
import Navbar from '@/components/Navbar'

import { styled, theme } from '@/styles/theme'

import logoImage from '@/images/logo.png'
import bgImage from '@/images/home-background.jpg'
import Typography from '@/styles/typography'
import SearchButton from '@/components/SearchButton'

const Title = styled(Typography.Title2)`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
  color: ${theme.colors.gray};
`

interface IndePageProps {}

const IndexPage: React.FC<IndePageProps> = () => {
  const [search, setSearch] = useState('')
  const [showSearchBar, setShowSearchBar] = useState(false)
  const handleOnSearchBarChange = (string: string) => setSearch(string)

  const toogleSearchBar = () => setShowSearchBar(!showSearchBar)

  return (
    <div>
      <Navbar
        handleOnClose={toogleSearchBar}
        handleOnSearchBarChange={handleOnSearchBarChange}
        isHome={true}
        showSearchBar={showSearchBar}
      />
      <Layout>
        <Hero bgImage={bgImage}>
          <img src={logoImage} />
        </Hero>
        <Title>Recipes of the Day</Title>
        <RecipesList search={search} isSearchBarVisible={showSearchBar} />
        <SearchButton handleOnClick={toogleSearchBar} />
      </Layout>
    </div>
  )
}

export default IndexPage
