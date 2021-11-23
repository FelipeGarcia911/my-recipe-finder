import React from 'react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Container, Icon } from './styles'

const SearchButton = () => {
  const handleOnClick = () => {
    console.log('click')
  }
  return (
    <Container onClick={handleOnClick}>
      <Icon icon={faSearch} />
    </Container>
  )
}

export default SearchButton
