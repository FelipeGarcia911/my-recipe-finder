import React from 'react'

import { Container, LoaderImg } from './styles'
import LoaderIcon from '@/images/loader.gif'

interface LoaderProps {
  children: React.ReactNode
  loading: boolean
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { children, loading = false } = props

  return (
    <Container>{loading ? <LoaderImg src={LoaderIcon} /> : children}</Container>
  )
}

export default Loader
