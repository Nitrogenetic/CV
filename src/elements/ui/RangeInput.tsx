import React, { FC, memo } from 'react'

interface RangeInputProps {
  max: number
  min: number
  value: number
  step?: number
  onChange(value: number): void
}

export const RangeInput: FC<RangeInputProps> = memo(props => {
  const { max, min, value, step, onChange } = props

  return (
    <input
      type={'range'}
      max={max}
      min={min}
      value={value}
      step={step}
      onChange={e => onChange(+e.currentTarget.value)}
    />
  )
})

RangeInput.displayName = 'RangeInput'
