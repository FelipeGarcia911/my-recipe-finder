import { mq } from '@/styles/media'
import { styled, theme } from '@/styles/theme'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${theme.colors.white};
`

export const Container = styled.div`
  align-items: center;
  background: ${theme.colors.red};
  border-radius: 50%;
  bottom: 2rem;
  box-shadow: 2px 3px 20px 3px ${theme.colors.black};
  display: flex;
  height: 3rem;
  justify-content: center;
  position: fixed;
  right: 2rem;
  width: 3rem;
  &:hover {
    transition: box-shadow 0.2s;
    box-shadow: 2px 3px 10px 3px ${theme.colors.black};
  }
`
