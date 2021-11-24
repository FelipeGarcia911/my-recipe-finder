import { styled } from '@/styles/theme'
import fonts from './fonts'

const Title = styled.h1`
  font: ${fonts.body};
  font-size: 3rem;
  font-weight: 500;
`

const Title2 = styled.h1`
  font: ${fonts.body};
  font-size: 2.5rem;
  font-style: italic;
  font-weight: 200;
`

const Subtitle = styled.h3`
  font: ${fonts.body};
  font-size: 1.5rem;
  font-weight: 400;
`

const Body1 = styled.p`
  font: ${fonts.body};
  font-size: 1.1rem;
  font-weight: 300;
`

const Badge = styled.span`
  font: ${fonts.body};
  font-size: 0.8rem;
  font-weight: 400;
`

const Typography = { Title, Title2, Subtitle, Body1, Badge }

export default Typography
