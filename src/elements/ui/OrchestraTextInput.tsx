import cls from 'classnames'
import React, { forwardRef, memo } from 'react'
import { Children, ClassName } from '~types'
import { ConditionalRender, Loader } from '~ux'
import * as Icon from '../svg/icons'

export type OrchestraTextInputKindType = 'primary' | 'ghost'

const getOrchestraTextInputClass = (
  kind: OrchestraTextInputKindType,
  disabled: boolean,
  error: boolean,
  className?: ClassName
) => {
  const isPrimaryKind = kind === 'primary'
  const isGhost = kind === 'ghost'
  return cls(className, 'orchestra-text-input', {
    'orchestra-text-input-valid orchestra-text-input-primary orchestra-blue-ring': isPrimaryKind && !error && !disabled,
    'orchestra-text-input-disabled orchestra-text-input-primary': isPrimaryKind && disabled,
    'orchestra-text-input-primary-error': isPrimaryKind && error,
    'orchestra-text-input-ghost orchestra-blue-ring': isGhost
  })
}

export type HtmlInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className' | 'ref' | 'prefix'
>
export interface OrchestraTextInputProps extends HtmlInputProps {
  className?: ClassName
  name: string
  value?: string
  kind?: OrchestraTextInputKindType
  label?: string
  labelClassName?: string
  wrapperClassName?: string
  prefixClassName?: string
  suffixesClassName?: string
  error?: string
  loading?: boolean
  prefix?: Children
  suffixes?: Children[]
  placeholder?: string
  pattern?: string
  inputClassName?: ClassName
}

export const OrchestraTextInput = memo(
  forwardRef<HTMLInputElement, OrchestraTextInputProps>((props, ref) => {
    const {
      className,
      kind = 'primary',
      error,
      loading,
      prefix,
      suffixes,
      placeholder,
      pattern,
      label,
      labelClassName,
      wrapperClassName,
      prefixClassName,
      suffixesClassName,
      inputClassName,
      disabled,
      ...rest
    } = props

    return (
      <label className={cls('w-full', wrapperClassName)}>
        {label && (
          <div
            className={cls(
              'text-14 font-semibold mb-4',
              {
                'text-gray-90': !disabled,
                'text-gray-40': disabled
              },
              labelClassName
            )}
          >
            {label}
          </div>
        )}
        <div className={getOrchestraTextInputClass(kind, disabled, !!error, className)}>
          {prefix && (
            <div
              className={cls(
                'mr-8 flex items-center whitespace-nowrap w-fit',
                {
                  'text-gray-90': !disabled,
                  'text-gray-40': disabled
                },
                prefixClassName
              )}
            >
              {prefix}
            </div>
          )}
          <input
            ref={ref}
            id={rest.name}
            className={cls('w-full bg-inherit', inputClassName)}
            aria-invalid={!!error}
            data-kind={kind}
            disabled={disabled}
            placeholder={placeholder}
            pattern={pattern}
            {...rest}
          />
          {loading && (
            <div className="ml-8 flex items-center text-neutral-5">
              <Loader height={22} width={22} />
            </div>
          )}
          {suffixes &&
            suffixes.length > 0 &&
            suffixes.map((suffix, index) => (
              <div
                key={index}
                className={cls('ml-8 flex items-center', {
                  'text-gray-90': !disabled && !suffixesClassName,
                  'text-gray-40': disabled && !suffixesClassName,
                  [`${suffixesClassName}`]: !!suffixesClassName
                })}
              >
                {suffix}
              </div>
            ))}
        </div>
        <ConditionalRender condition={!!error}>
          <div className={'flex items-center space-x-12 mt-8'}>
            <Icon.Error className={'w-14 h-14 text-error'} />
            <span className={'text-14 text-gray-90 font-semibold'}>{error}</span>
          </div>
        </ConditionalRender>
      </label>
    )
  })
)

OrchestraTextInput.displayName = 'OrchestraOrchestraTextInput'
