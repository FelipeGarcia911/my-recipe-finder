import { LazyLoadImage } from 'react-lazy-load-image-component'

import { styled } from '@/styles/theme'

export const ReactLazyImage = styled(LazyLoadImage)`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`
