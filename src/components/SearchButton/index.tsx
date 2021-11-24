import React from 'react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Container, Icon } from './styles'

interface SearchButtonProps {
  handleOnClick(): void
}

const SearchButton: React.FC<SearchButtonProps> = ({ handleOnClick }) => {
  return (
    <Container onClick={handleOnClick}>
      <Icon icon={faSearch} size="2x" />
    </Container>
  )
}

export default SearchButton
