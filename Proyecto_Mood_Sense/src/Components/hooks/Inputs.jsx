
import { useState } from 'react'

export const useInput = ({ type, placeholder, name, className }) => {
  const [value, setValue] = useState('')

  const input = (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      className={className}
      onChange={e => setValue(e.target.value)}
    />
  )

  return [value, input, setValue]
}
