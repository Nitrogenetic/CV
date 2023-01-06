import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Smile: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33398 7.99967C1.33398 11.6816 4.31875 14.6663 8.00065 14.6663C11.6825 14.6663 14.6673 11.6816 14.6673 7.99967C14.6673 4.31778 11.6825 1.33301 8.00065 1.33301C4.31875 1.33301 1.33398 4.31778 1.33398 7.99967ZM2.66732 7.99967C2.66732 5.05416 5.05513 2.66634 8.00065 2.66634C10.9462 2.66634 13.334 5.05416 13.334 7.99967C13.334 10.9452 10.9462 13.333 8.00065 13.333C5.05513 13.333 2.66732 10.9452 2.66732 7.99967ZM6.00065 8.66634C6.00065 8.29815 5.70217 7.99967 5.33398 7.99967C4.96579 7.99967 4.66732 8.29815 4.66732 8.66634C4.66732 10.5073 6.1597 11.9997 8.00065 11.9997C9.8416 11.9997 11.334 10.5073 11.334 8.66634C11.334 8.29815 11.0355 7.99967 10.6673 7.99967C10.2991 7.99967 10.0007 8.29815 10.0007 8.66634C10.0007 9.77091 9.10522 10.6663 8.00065 10.6663C6.89608 10.6663 6.00065 9.77091 6.00065 8.66634ZM5.33398 6.66634C5.70217 6.66634 6.00065 6.36786 6.00065 5.99967C6.00065 6.36786 6.29913 6.66634 6.66732 6.66634C7.03551 6.66634 7.33398 6.36786 7.33398 5.99967C7.33398 5.26329 6.73703 4.66634 6.00065 4.66634C5.26427 4.66634 4.66732 5.26329 4.66732 5.99967C4.66732 6.36786 4.96579 6.66634 5.33398 6.66634ZM10.0007 5.99967C10.0007 6.36786 9.70218 6.66634 9.33398 6.66634C8.96579 6.66634 8.66732 6.36786 8.66732 5.99967C8.66732 5.26329 9.26427 4.66634 10.0007 4.66634C10.737 4.66634 11.334 5.26329 11.334 5.99967C11.334 6.36786 11.0355 6.66634 10.6673 6.66634C10.2991 6.66634 10.0007 6.36786 10.0007 5.99967Z"
        fill=""
      />
    </svg>
  )
})

Smile.displayName = 'Smile'