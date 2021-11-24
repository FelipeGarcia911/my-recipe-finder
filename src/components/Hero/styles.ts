import { styled } from '@/styles/theme'

export const Container = styled.div<{ bgImage: string }>`
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url(${({ bgImage }) => bgImage});
  display: flex;
  height: 50vh;
  min-height: 20rem;
  justify-content: center;
  width: 100%;
`
