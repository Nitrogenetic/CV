import React, { memo } from 'react'
import { ClassName } from '~types'
import { Radio } from '~ui'
import cls from 'classnames'

export type OptionKindType = 'primary' | 'light'

const getOptionVariantClass = (variant: OptionKindType, error: boolean, disabled: boolean, className?: ClassName) => {
  const isPrimary = !variant || variant === 'primary'
  const isLight = variant === 'light'

  return cls(className, 'option', {
    'option-primary': isPrimary,
    'option-primary-disabled': isPrimary && disabled,
    'primary-violet-ring': isPrimary && !error,
    'error-primary-ring': isPrimary && error,

    'option-light': isLight,
    'option-light-disabled': isLight && disabled,
    'light-violet-ring': isLight && !error,
    'error-light-ring': isLight && error
  })
}

export interface OptionProps {
  className?: ClassName
  variant?: OptionKindType
  error?: string
  disabled?: boolean
  name: string
  label: string
  value: boolean
  onChange: (value: boolean) => void
}

export const Option: React.FC<OptionProps> = memo(props => {
  const { name, className, variant = 'primary', label, value, error, disabled, onChange } = props

  return (
    <label className={getOptionVariantClass(variant, !!error, !!disabled, className)} htmlFor={name} tabIndex={1}>
      <Radio
        className={'w-full mr-12'}
        name={name}
        label={label}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </label>
  )
})

Option.displayName = 'Option'
