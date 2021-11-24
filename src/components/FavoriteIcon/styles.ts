import { styled, theme } from '@/styles/theme'
import Typography from '@/styles/typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${theme.colors.white};
  margin-right: 0.5rem;
`

export const Container = styled.div`
  position: relative;
`

export const Indicator = styled(Typography.Badge)`
  color: ${theme.colors.gray};
  position: absolute;
  left: 40%;
  top: 45%;
  transform: translate(-50%, -50%);
`
