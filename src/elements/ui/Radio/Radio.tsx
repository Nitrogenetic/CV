import React, { memo, forwardRef } from 'react'
import cls from 'classnames'
import { ClassName } from '~types'
import './Radio.css'

type RadioKindType = 'primary'
type RadioDirectionType = 'left' | 'right'
type RadioColorType = 'normal' | 'violet' | 'white'

const getRadioWrapperClass = (outlined: boolean, color: RadioColorType, value: boolean) => {
  const isVioletColor = color === 'violet'
  return cls('wrapper', {
    'wrapper-outlined': outlined,
    'wrapper-outlined-violet': outlined && isVioletColor && !value,
    'wrapper-outlined-checked': outlined && isVioletColor && value
  })
}

const getRadioClass = (value: boolean, color: RadioColorType, className?: ClassName) =>
  cls(className, 'radio', {
    'radio-white': !value && color === 'white',
    'radio-checked': value
  })

export type RadioHtmlInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className' | 'value' | 'defaultValue' | 'onChange' | 'ref'
>
export interface RadioProps extends RadioHtmlInputProps {
  className?: ClassName
  color?: RadioColorType
  variant?: RadioKindType
  outlined?: boolean
  name: string
  label?: string
  value: boolean
  defaultValue?: boolean
  direction?: RadioDirectionType
  onChange: (value: boolean) => void
}

export const Radio: React.FC<RadioProps> = memo(
  forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
    const {
      className,
      color = 'normal',
      variant = 'primary',
      outlined = false,
      direction = 'left',
      name,
      label,
      value,
      defaultValue,
      onChange,
      ...rest
    } = props

    return (
      <div className={getRadioWrapperClass(outlined, color, value)}>
        {direction === 'left' && (
          <label htmlFor={name} className={getRadioClass(value, color, className)}>
            <div className={cls('w-6 h-6 rounded-50', { 'bg-white': value })} />
          </label>
        )}
        {label && (
          <label
            className={cls(
              'mr-8',
              { 'text-violet-4.5': color === 'violet' && value },
              { 'text-white': color === 'white' }
            )}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <input
          className={'hidden'}
          id={name}
          name={name}
          ref={ref}
          type="checkbox"
          checked={value}
          defaultChecked={defaultValue}
          onChange={() => onChange(!value)}
          {...rest}
        />
        {direction === 'right' && (
          <label htmlFor={name} className={getRadioClass(value, color, className)}>
            {value && <div className={cls('w-6 h-6 rounded-50', { 'bg-white': value })} />}
          </label>
        )}
      </div>
    )
  })
)

Radio.displayName = 'Radio'
