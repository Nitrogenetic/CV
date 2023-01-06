import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const OrchestraCheck: React.FC<IconProps> = memo(props => {
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
      <path d="M15.5957 7.5961L10.4801 12.7723L9.03176 14.2373C8.71518 14.5575 8.20132 14.5575 7.88474 14.2373L6.43645 12.7723L4.40394 10.7164C4.08736 10.3962 4.08736 9.87636 4.40394 9.55614L5.12111 8.83873C5.43768 8.5185 5.95155 8.5185 6.26812 8.83873L8.45825 11.0905L13.7421 5.77142C14.0587 5.4512 14.5726 5.4512 14.8892 5.77142L15.5957 6.43586C15.9123 6.75763 15.9123 7.27588 15.5957 7.5961Z" />
    </svg>
  )
})

OrchestraCheck.displayName = 'OrchestraCheck'
