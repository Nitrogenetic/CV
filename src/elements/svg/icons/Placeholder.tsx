import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Placeholder: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33333 0C1.49238 0 0 1.49238 0 3.33333V16.6667C0 18.5076 1.49238 20 3.33333 20H16.6667C18.5076 20 20 18.5076 20 16.6667V3.33333C20 1.49238 18.5076 0 16.6667 0H3.33333ZM16.6667 1.66667H3.33333C3.18403 1.66667 3.03932 1.6863 2.90163 1.72312L9.81513 8.63662L16.7812 1.67054C16.7434 1.66797 16.7052 1.66667 16.6667 1.66667ZM8.63661 9.81513L1.72312 2.90163C1.6863 3.03932 1.66667 3.18403 1.66667 3.33333V16.6667C1.66667 16.7052 1.66797 16.7434 1.67054 16.7812L8.63661 9.81513ZM9.81513 10.9936L17.0984 18.2769C16.9607 18.3137 16.816 18.3333 16.6667 18.3333H3.33333C3.0822 18.3333 2.84403 18.2778 2.63045 18.1783L9.81513 10.9936ZM18.2769 17.0984L10.9936 9.81513L18.1783 2.63045C18.2778 2.84403 18.3333 3.08219 18.3333 3.33333V16.6667C18.3333 16.816 18.3137 16.9607 18.2769 17.0984Z"
        fill=""
      />
    </svg>
  )
})

Placeholder.displayName = 'Placeholder'
