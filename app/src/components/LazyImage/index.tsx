import React from 'react'
import { ReactLazyImage } from './styles'

interface LazyImageProps {
  src: string
  alt?: string
  height?: string
  width?: string
}

const LazyImage: React.FC<LazyImageProps> = (props) => {
  const { alt, src, height, width } = props
  return <ReactLazyImage alt={alt} height={height} src={src} width={width} />
}

export default LazyImage
