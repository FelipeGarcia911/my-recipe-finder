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
  margin-right: 0;
  margin-left: auto;
`

export const Input = styled.input`
  margin-right: 1rem;
  padding: 0.3rem 1rem;
  width: 8rem;
`
