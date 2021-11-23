import { Link } from 'gatsby'

import { mq } from '@/styles/media'
import { styled } from '@/styles/theme'

export const Container = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;
`

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
`

export const Image = styled.div<{ bgImage: string }>`
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 100%;
`
