import { breakpoints, mq } from '@/styles/media'
import { styled, theme } from '@/styles/theme'

export const Container = styled.main`
  font-family: ${theme.fonts.body};
  max-width: ${breakpoints.lg}px;
  margin: 0 auto;
`