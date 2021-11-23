import { Link } from 'gatsby'

import { mq } from '@/styles/media'
import { styled, theme } from '@/styles/theme'
import Typography from '@/styles/typography'

export const Container = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;
  text-decoration: none;
`

export const Title = styled(Typography.Title)`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
  text-align: center;
  text-decoration: none;
`

export const Image = styled.div<{ bgImage: string }>`
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 100%;
`
