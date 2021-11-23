import { mq } from '@/styles/media'
import { styled, theme } from '@/styles/theme'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-right: 0.5rem;
`

export const Container = styled.div`
  align-items: center;
  background: ${theme.colors.gray};
  color: ${theme.colors.white};
  cursor: pointer;
  display: flex;
  height: 3rem;
  padding-left: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
`

export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`
