import React, { forwardRef, memo } from 'react'
import cls from 'classnames'
import { Children, ClassName } from '~types'

export type IconButtonVariantType = 'primary' | 'neutral' | 'violet' | 'red' | 'inline'

export interface IconButtonProps {
  className?: ClassName
  children: Children
  onClick?: () => void
}

const IconButton = memo(
  forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    const { className, children, ...rest } = props

    return (
      <button
        ref={ref}
        className={cls(
          className,
          'inline-flex items-center justify-center h-36 w-36 bg-neutral-9 text-neutral-4 rounded-6 hover:bg-neutral-7 cursor-pointer'
        )}
        {...rest}
      >
        {children}
      </button>
    )
  })
)

IconButton.displayName = 'Button'

export { IconButton }
