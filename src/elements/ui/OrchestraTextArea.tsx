import React, { forwardRef, memo } from 'react'
import cls from 'classnames'
import { Children, ClassName } from '~types'
import { ConditionalRender } from '~ux'
import * as Icon from '../svg/icons'

export type OrchestraTextAreaKindType = 'primary'

const getOrchestraTextAreaClass = (
  kind: OrchestraTextAreaKindType,
  error: boolean,
  disabled: boolean,
  noPrefix: boolean,
  className?: ClassName
) => {
  return cls(className, 'orchestra-text-area', {
    'orchestra-blue-ring orchestra-text-area-valid': !error && !disabled,
    'orchestra-text-area-disabled': disabled,
    'orchestra-text-area-error': error,
    'pt-30': noPrefix
  })
}

export type HtmlTextAreaProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  'className' | 'ref' | 'prefix'
>
export interface OrchestraTextAreaProps extends HtmlTextAreaProps {
  className?: ClassName
  wrapperClassName?: ClassName
  labelClassName?: ClassName
  name: string
  label?: string
  value?: string
  resizableHeight?: boolean
  kind?: OrchestraTextAreaKindType
  prefixes?: Children[]
  suffixes?: Children[]
  error?: string
}

export const OrchestraTextArea = memo(
  forwardRef<HTMLTextAreaElement, OrchestraTextAreaProps>((props, ref) => {
    const {
      name,
      className,
      wrapperClassName,
      labelClassName,
      label,
      kind = 'primary',
      prefixes,
      suffixes,
      error,
      disabled,
      resizableHeight,
      ...rest
    } = props

    const noPrefixes = prefixes ? prefixes?.length === 0 && !!suffixes : false

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
        <div className={getOrchestraTextAreaClass(kind, !!error, disabled, noPrefixes, className)}>
          <ConditionalRender condition={!!prefixes}>
            <div className={'flex items-center space-x-12 w-3/4 overflow-x-auto no-scroll'}>
              {prefixes?.map((suffix, index) => (
                <div
                  key={index}
                  className={cls('flex items-center', {
                    'text-gray-90': !disabled,
                    'text-gray-40': disabled
                  })}
                >
                  {suffix}
                </div>
              ))}
            </div>
          </ConditionalRender>
          <div className={'flex w-full'}>
            <textarea
              ref={ref}
              id={name}
              className={cls('flex-1 resize-none w-full bg-inherit py-10 px-12', {
                'resize-y min-h-50 max-h-400': resizableHeight
              })}
              aria-errormessage={error}
              disabled={disabled}
              aria-invalid={!!error}
              data-kind={kind}
              {...rest}
            />
            <ConditionalRender condition={!!suffixes}>
              <div className={cls('flex items-start space-x-12 ml-auto')}>
                {suffixes?.map((suffix, index) => (
                  <div
                    key={index}
                    className={cls('ml-8 flex items-center', {
                      'text-gray-90': !disabled,
                      'text-gray-40': disabled
                    })}
                  >
                    {suffix}
                  </div>
                ))}
              </div>
            </ConditionalRender>
          </div>
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

OrchestraTextArea.displayName = 'OrchestraTextArea'
