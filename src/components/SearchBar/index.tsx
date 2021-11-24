import React, { useEffect, useState, useRef } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Container, Icon, Input } from './styles'

interface SearchBarProps {
  onInputChange(string: string): void
  handleOnClose(): void
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { onInputChange, handleOnClose } = props
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const handleOnChange = (event: any) => {
    const newValue = event.target.value
    if (typeof onInputChange === 'function') onInputChange(newValue)
    if (newValue !== value) setValue(newValue)
  }

  const onClearSearch = () => {
    if (typeof handleOnClose === 'function') handleOnClose()
    setValue('')
  }

  useEffect(() => {
    setValue('')
    inputRef?.current?.focus()
  }, [])

  return (
    <Container>
      <Input onChange={handleOnChange} value={value} ref={inputRef} />
      <Icon icon={faTimes} onClick={onClearSearch} />
    </Container>
  )
}

export default SearchBar
