import React from 'react'

import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { AppContext } from '@/providers/AppProvider'

import { Container, Icon, Indicator } from './styles'

import ROUTES from '@/constants/routes'
import { navigate } from 'gatsby-link'

const FavoriteIcon: React.FC<{}> = () => {
  const handleOnClick = () => {
    navigate(ROUTES.FAVORITES)
  }
  return (
    <AppContext.Consumer>
      {({ favorites }) => (
        <>
          {Boolean(favorites?.length) && (
            <Container onClick={handleOnClick}>
              <Icon icon={faHeart} size="2x" />
              <Indicator>{favorites.length}</Indicator>
            </Container>
          )}
        </>
      )}
    </AppContext.Consumer>
  )
}

export default FavoriteIcon
