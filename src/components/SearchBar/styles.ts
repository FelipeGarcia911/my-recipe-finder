import { mq } from '@/styles/media'
import { styled, theme } from '@/styles/theme'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${theme.colors.white};
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-right: 1.5rem;
`

export const Input = styled.input`
  margin-right: 0.5rem;
  padding: 0.3rem 1rem;
  width: 7rem;
`
