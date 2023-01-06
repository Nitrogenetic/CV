import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const IconT: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M7.63167 13.6673C8.19167 13.6673 8.65167 13.2073 8.65167 12.6473C8.65167 12.0873 8.19167 11.6273 7.63167 11.6273H7.19167V2.37398H9.79334V3.31398C9.79334 3.87398 10.2533 4.33398 10.8133 4.33398C11.3733 4.33398 11.8333 3.87398 11.8333 3.31398V1.31398C11.8333 0.773985 11.3533 0.333984 10.8133 0.333984H1.18992C0.629922 0.333984 0.169922 0.773985 0.169922 1.31398V3.31398C0.169922 3.87398 0.629922 4.33398 1.18992 4.33398C1.74992 4.33398 2.20992 3.87398 2.20992 3.31398V2.37398H4.87167V11.6273H4.43167C3.87167 11.6273 3.41167 12.0873 3.41167 12.6473C3.41167 13.2073 3.87167 13.6673 4.43167 13.6673H7.63167Z"
        fill=""
      />
    </svg>
  )
})

IconT.displayName = 'IconT'
