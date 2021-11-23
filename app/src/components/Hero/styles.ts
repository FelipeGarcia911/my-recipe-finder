import { mq } from '@/styles/media'
import { styled } from '@/styles/theme'

export const Container = styled.div<{ bgImage: string }>`
  align-items: center;
  background-size: contain;
  background: url(${({ bgImage }) => bgImage}) no-repeat center;
  display: flex;
  height: 70vh;
  min-height: 20rem;
  justify-content: center;
  width: 100%;
`

export const Logo = styled.img``
