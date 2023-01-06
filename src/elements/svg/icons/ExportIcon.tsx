import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const ExportIcon: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8814 3.62285C13.2278 3.92592 13.2629 4.45239 12.9598 4.79876C12.6568 5.14512 12.1303 5.18022 11.7839 4.87715L9.83268 3.16981V11.3333C9.83268 11.7936 9.45959 12.1667 8.99935 12.1667C8.53911 12.1667 8.16602 11.7936 8.16602 11.3333V3.16981L6.21477 4.87715C5.86841 5.18022 5.34194 5.14512 5.03887 4.79876C4.7358 4.45239 4.7709 3.92592 5.11726 3.62285L8.45059 0.706186C8.76478 0.431271 9.23392 0.431271 9.5481 0.706186L12.8814 3.62285ZM2.33268 11.3333C2.33268 10.8731 1.95959 10.5 1.49935 10.5C1.03911 10.5 0.666016 10.8731 0.666016 11.3333V13.8333C0.666016 14.7538 1.41221 15.5 2.33268 15.5H15.666C16.5865 15.5 17.3327 14.7538 17.3327 13.8333V11.3333C17.3327 10.8731 16.9596 10.5 16.4993 10.5C16.0391 10.5 15.666 10.8731 15.666 11.3333V13.8333H2.33268V11.3333Z"
        fill=""
      />
    </svg>
  )
})

ExportIcon.displayName = 'ExportIcon'
