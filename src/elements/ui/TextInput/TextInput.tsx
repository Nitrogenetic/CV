import cls from 'classnames'
import React, { forwardRef, memo } from 'react'
import { Children, ClassName } from '~types'
import { Loader } from '~ux'

export type TextInputKindType = 'primary' | 'light' | 'primary-inline' | 'empty'

const getTextInputClass = (variant: TextInputKindType, error: boolean, className?: ClassName) => {
  const isPrimary = !variant || variant === 'primary'
  const isPrimaryInline = variant === 'primary-inline'
  const isLight = variant === 'light'
  const isEmpty = variant === 'empty'

  return cls(className, 'text-input', {
    'text-input-primary': isPrimary,
    'text-input-primary-inline': isPrimaryInline,
    'text-input-light': isLight,
    'text-input-empty': isEmpty,
    'primary-violet-ring': isPrimary && !isEmpty && !error,
    'error-primary-ring': isPrimary && !isEmpty && error,
    'light-violet-ring': isLight && !isEmpty && !error,
    'error-light-ring': isLight && !isEmpty && error,
    'neutral-violet-border': isPrimaryInline && !isEmpty && !error
  })
}

export type HtmlInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className' | 'ref' | 'prefix'
>
export interface TextInputProps extends HtmlInputProps {
  className?: ClassName
  name: string
  нф?: string
  kind?: TextInputKindType
  label?: string
  labelClassName?: string
  wrapperClassName?: string
  prefixClassName?: string
  error?: string
  loading?: boolean
  prefix?: Children
  suffixes?: Children[]
  placeholder?: string
  pattern?: string
  inputClassName?: ClassName
}

export const TextInput = memo(
  forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
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
      inputClassName,
      ...rest
    } = props

    return (
      <label className={cls('w-full', wrapperClassName)}>
        {label && <div className={labelClassName}>{label}</div>}
        <div className={getTextInputClass(kind, !!error, className)}>
          {prefix && (
            <div className={cls('mr-8 flex items-center text-neutral-5 whitespace-nowrap w-fit', prefixClassName)}>
              {prefix}
            </div>
          )}
          <input
            ref={ref}
            id={rest.name}
            className={cls('w-full bg-inherit', inputClassName)}
            aria-errormessage={error}
            aria-invalid={!!error}
            data-kind={kind}
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
              <div key={index} className="ml-8 flex items-center text-neutral-5">
                {suffix}
              </div>
            ))}
        </div>
      </label>
    )
  })
)

TextInput.displayName = 'TextInput'
