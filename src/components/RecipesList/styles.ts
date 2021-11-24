import { styled } from '@/styles/theme'
import Loader from '@/components/Loader'
import Typography from '@/styles/typography'

export const Container = styled(Loader)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NoResults = styled(Typography.Subtitle)``
