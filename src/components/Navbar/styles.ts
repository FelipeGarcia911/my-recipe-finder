import { styled, theme } from '@/styles/theme'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-right: 0.5rem;
`

export const Container = styled.div`
  align-items: center;
  background: ${theme.colors.gray};
  box-shadow: 2px 3px 10px 3px ${theme.colors.black};
  color: ${theme.colors.white};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 3rem;
  left: 0;
  padding: 0.1rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`

export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`
