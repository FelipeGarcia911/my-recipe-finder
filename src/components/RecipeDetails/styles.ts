import { styled } from '@/styles/theme'
import Typography from '@/styles/typography'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContentContainer = styled.div`
  max-width: 50rem;
`

export const Title = styled(Typography.Title)``

export const Directions = styled(Typography.Body1)``

export const Ingredient = styled(Typography.Body1)`
  margin: 0.5rem 0;
`
