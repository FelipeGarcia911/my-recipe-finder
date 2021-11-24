import { Link } from 'gatsby'

import { styled, theme } from '@/styles/theme'
import Typography from '@/styles/typography'
import LazyImage from '@/components/LazyImage'

export const Container = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  text-decoration: none;
  box-shadow: 2px 10px 10px -8px ${theme.colors.black};
  &:hover {
    transition: box-shadow 0.3s;
    box-shadow: 2px 10px 30px -8px ${theme.colors.black};
  }
`

export const Title = styled(Typography.Title)`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
  text-align: center;
  text-decoration: none;
`

export const Image = styled(LazyImage)`
  width: 100%;
`
