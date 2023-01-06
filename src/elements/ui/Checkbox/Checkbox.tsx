import React, { memo, forwardRef } from 'react'
import cls from 'classnames'
import { ClassName } from '~types'
import * as Icon from '~icons'
import './Checkbox.css'

type CheckboxKindType = 'primary' | 'red' | 'neutral'

const getCheckboxKindClass = (kind: CheckboxKindType, value: boolean | undefined, className?: ClassName) =>
  cls(
    className,
    'checkbox',
    { 'checkbox-primary-not-checked': !value && kind === 'primary' },
    { 'checkbox-primary-checked': value && kind === 'primary' },
    { 'checkbox-red-not-checked': !value && kind === 'red' },
    { 'checkbox-red-checked': value && kind === 'red' },
    { 'checkbox-neutral-not-checked': !value && kind === 'neutral' },
    { 'checkbox-neutral-checked': value && kind === 'neutral' }
  )

export type CheckboxHtmlInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className' | 'value' | 'defaultValue' | 'ref'
>
export interface CheckboxProps extends CheckboxHtmlInputProps {
  className?: ClassName
  wrapperClassName?: ClassName
  kind?: CheckboxKindType
  name: string
  label?: string
  value?: boolean
  defaultValue?: boolean
  outlined?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = memo(
  forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    const { className, wrapperClassName, kind = 'primary', name, label, value, defaultValue, outlined, ...rest } = props

    return (
      <label className={cls('inline-flex', wrapperClassName)} htmlFor={name}>
        {label && (
          <label htmlFor={name} className={'mr-8'}>
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
          {...rest}
        />
        <label
          htmlFor={name}
          className={
            outlined
              ? 'w-16 h-16 bg-primary-6 border border-primary-4 rounded-8 transition-colors hover:bg-primary-6 ' +
                className
              : getCheckboxKindClass(kind, value, className)
          }
        >
          {value && kind !== 'red' && <Icon.Check className={outlined ? 'text-primary-4' : 'text-white'} />}
        </label>
      </label>
    )
  })
)

Checkbox.displayName = 'Checkbox'
