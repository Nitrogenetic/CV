import React, { memo, forwardRef } from 'react'
import { Switch as SwitchComponent } from '@headlessui/react'
import cls from 'classnames'
import { Children, ClassName } from '~types'

type SwitchSizeType = 'default' | 'sm' | 'md'

interface SwitchProps {
  className?: ClassName
  switchClassName?: ClassName
  value: boolean
  onChange: (value: boolean) => void
  children?: Children
  switchChildren?: Children
  size?: SwitchSizeType
}

const getSwitchClass = (size: SwitchSizeType, value: boolean, className?: ClassName, isParent?: boolean) => {
  if (isParent) {
    return cls(className, 'switcher-wrapper', {
      'switcher-wrapper-default': !size || size === 'default',
      'switcher-wrapper-sm': size === 'sm',
      'switcher-wrapper-md': size === 'md'
    })
  } else {
    return cls(className, 'switch transform transition ease-in-out duration-200', {
      'switch-default': !size || size === 'default',
      'switch-sm': size === 'sm',
      'switch-md': size === 'md'
    })
  }
}

export const Switch = memo(
  forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
    const { className, switchClassName, value, onChange, children, switchChildren, size = 'default' } = props

    return (
      <SwitchComponent
        ref={ref}
        checked={value}
        onChange={onChange}
        className={getSwitchClass(size, value, className, true)}
      >
        {switchChildren}
        <div className={cls('transition-all flex items-center justify-end', value && 'flex-grow')}>
          <span aria-hidden="true" className={getSwitchClass(size, value, switchClassName, false)}>
            {children}
          </span>
        </div>
      </SwitchComponent>
    )
  })
)

Switch.displayName = 'Switch'
