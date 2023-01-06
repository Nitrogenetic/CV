import React, { FC, memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Chat: FC<IconProps> = memo(props => {
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
        d="M12.5002 1.66602C14.3411 1.66602 15.8335 3.1584 15.8335 4.99935V5.83268H11.6668C8.90541 5.83268 6.66683 8.07126 6.66683 10.8327L4.87812 12.6214C4.61564 12.8839 4.16683 12.698 4.16683 12.3268V9.99935C2.32588 9.99935 0.833496 8.50697 0.833496 6.66602V4.99935C0.833496 3.1584 2.32588 1.66602 4.16683 1.66602H12.5002Z"
        fill=""
      />
      <path
        d="M8.43851 9.99935C8.80855 8.56166 10.1136 7.49935 11.6668 7.49935H15.8335C17.6744 7.49935 19.1668 8.99173 19.1668 10.8327V12.4994C19.1668 14.3403 17.6744 15.8327 15.8335 15.8327V18.1601C15.8335 18.5313 15.3847 18.7172 15.1222 18.4547L12.5002 15.8327H11.6668C9.82588 15.8327 8.3335 14.3403 8.3335 12.4994V10.8327C8.3335 10.5449 8.36996 10.2657 8.43851 9.99935Z"
        fill=""
      />
    </svg>
  )
})

Chat.displayName = 'Chat'
