import { mq } from '@/styles/media'
import { styled } from '@/styles/theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  cursor: pointer;
  width: 100%;
`

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
`

export const Image = styled.div<{ bgImage: string }>`
  background: url(${({ bgImage }) => bgImage}) no-repeat center;
  height: 20rem;
  width: 100%;
`
