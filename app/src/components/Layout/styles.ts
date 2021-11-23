import { breakpoints, mq } from '@/styles/media'
import { styled, theme } from '@/styles/theme'

export const Container = styled.main`
  font-family: ${theme.fonts.body};
  margin: 0 auto;
  max-width: ${breakpoints.xl}px;
`