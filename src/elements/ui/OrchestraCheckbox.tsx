import React, { memo, forwardRef } from 'react'
import cls from 'classnames'
import { ClassName } from '~types'
import { ConditionalRender } from '~ux'
import * as Icon from '../svg/icons'

type OrchestraCheckboxKindType = 'primary'

const getOrchestraCheckboxKindClass = (
  kind: OrchestraCheckboxKindType,
  value: boolean | undefined,
  disabled: boolean,
  error: boolean,
  className?: ClassName
) => {
  const inderterminateValue = typeof value === 'undefined'
  const isBooleanValue = !inderterminateValue && !!value
  const checkCondition = (isBooleanValue || inderterminateValue) && !error && !disabled
  const uncheckCondition = !inderterminateValue && !value && !error && !disabled

  return cls(className, 'orchestra-checkbox', {
    'orchestra-checkbox-valid': !error && !disabled,
    'orchestra-checkbox-checked': checkCondition,
    'orchestra-checkbox-unchecked': uncheckCondition,
    'orchestra-checkbox-disabled': disabled,
    'orchestra-checkbox-error': error
  })
}

const getOrchestraCheckboxLabelClass = (kind: OrchestraCheckboxKindType, label: boolean, className?: ClassName) =>
  cls(className, 'orchestra-blue-ring inline-flex relative', {
    'p-10 rounded-8': !!label,
    'p-0 rounded-4': !label
  })

type CheckboxHtmlInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className' | 'value' | 'defaultValue' | 'ref'
>
export interface OrchestraCheckboxProps extends CheckboxHtmlInputProps {
  className?: ClassName
  wrapperClassName?: ClassName
  checkClassName?: ClassName
  kind?: OrchestraCheckboxKindType
  name: string
  label?: string
  value: boolean | undefined
  error?: string
  defaultChecked?: boolean | undefined
}

export const OrchestraCheckbox: React.FC<OrchestraCheckboxProps> = memo(
  forwardRef<HTMLInputElement, OrchestraCheckboxProps>((props, ref) => {
    const {
      className,
      wrapperClassName,
      checkClassName,
      kind = 'primary',
      name,
      label,
      value,
      defaultChecked,
      disabled,
      error,
      ...rest
    } = props

    return (
      <label className={getOrchestraCheckboxLabelClass(kind, !!label, wrapperClassName)} htmlFor={name}>
        <ConditionalRender condition={!!label}>
          <label htmlFor={name} className={'mr-8'}>
            {label}
          </label>
        </ConditionalRender>
        <input
          className={'absolute opacity-0'}
          id={name}
          name={name}
          ref={ref}
          type="checkbox"
          checked={!!value}
          aria-invalid={!!error}
          disabled={disabled}
          defaultChecked={defaultChecked}
          {...rest}
        />
        <label htmlFor={name} className={getOrchestraCheckboxKindClass(kind, value, disabled, !!error, className)}>
          <ConditionalRender condition={!!value}>
            <Icon.Check className={cls('absolute-center text-white', checkClassName)} />
          </ConditionalRender>
          <ConditionalRender condition={typeof value === 'undefined'}>
            <Icon.Inderterminate className={cls('absolute-center text-white', checkClassName)} />
          </ConditionalRender>
        </label>
      </label>
    )
  })
)

OrchestraCheckbox.displayName = 'OrchestraCheckbox'
