import React, { forwardRef, memo } from 'react'
import cls from 'classnames'
import { Children, ClassName } from '~types'
import { ConditionalRender } from '~ux'
import './TextArea.css'

export type TextAreaKindType = 'primary' | 'light'

const getTextAreaClass = (variant: TextAreaKindType, error: boolean, noPrefix: boolean, className?: ClassName) => {
  const isPrimary = !variant || variant === 'primary'
  const isLight = variant === 'light'

  return cls(className, 'text-area', {
    'text-area-primary': isPrimary,
    'primary-violet-ring': isPrimary && !error,
    'error-primary-ring': isPrimary && error,

    'text-area-light': isLight,
    'light-violet-ring': isLight && !error,
    'error-light-ring': isLight && error,

    'pt-30': noPrefix
  })
}

export type HtmlTextAreaProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  'className' | 'ref' | 'prefix'
>
export interface TextAreaProps extends HtmlTextAreaProps {
  className?: ClassName
  wrapperClassName?: ClassName
  name: string
  value?: string
  resizableHeight?: boolean
  kind?: TextAreaKindType
  prefixes?: Children[]
  suffixes?: Children[]
  error?: string
}

export const TextArea = memo(
  forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const { className, wrapperClassName, kind = 'primary', prefixes, suffixes, error, resizableHeight, ...rest } = props

    const noPrefixes = prefixes ? prefixes?.length === 0 && !!suffixes : false

    // if autoresize
    // useEffect(() => {
    //   if (!autoHeight) return

    //   const textArea = document.getElementById(rest.name)

    //   if (!textArea) return

    //   const keyUpHandler = e => {
    //     const textarea = e.currentTarget as HTMLTextAreaElement
    //     const textAreaValueLength = textarea.value.length
    //     const textAreaWidth = textarea.scrollWidth - textarea.offsetLeft
    //     console.log(textAreaValueLength, textAreaWidth)
    //     if (textarea.scrollTop > 0) {
    //       textarea.style.height = textarea.scrollHeight + 'px'
    //     }
    //   }

    //   textArea.addEventListener('keyup', keyUpHandler)

    //   return () => {
    //     textArea.removeEventListener('keyup', keyUpHandler)
    //   }
    // }, [autoHeight])

    return (
      <label className={cls('w-full', wrapperClassName)}>
        <div className={getTextAreaClass(kind, !!error, noPrefixes, className)}>
          <ConditionalRender condition={!!prefixes}>
            <div className={'flex items-center space-x-12 w-3/4 overflow-x-auto no-scroll'}>
              {prefixes?.map((suffix, index) => (
                <div key={index} className="flex items-center text-neutral-5">
                  {suffix}
                </div>
              ))}
            </div>
          </ConditionalRender>
          <div className={'flex w-full'}>
            <textarea
              ref={ref}
              id={rest.name}
              className={cls('flex-1 resize-none w-full', {
                'bg-neutral-11': !kind || kind === 'primary',
                'bg-neutral-1': kind === 'light',
                'resize-y min-h-50 max-h-400': resizableHeight
              })}
              aria-errormessage={error}
              aria-invalid={!!error}
              data-kind={kind}
              {...rest}
            />
            <ConditionalRender condition={!!suffixes}>
              <div className={cls('flex items-start space-x-12 ml-auto')}>
                {suffixes?.map((suffix, index) => (
                  <div key={index} className="ml-8 flex items-center text-neutral-5">
                    {suffix}
                  </div>
                ))}
              </div>
            </ConditionalRender>
          </div>
        </div>
      </label>
    )
  })
)

TextArea.displayName = 'TextArea'
