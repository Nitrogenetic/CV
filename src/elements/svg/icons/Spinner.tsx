import React, { FC, memo, useId } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Spinner: FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  const randomId = useId()

  return (
    <svg
      className={cls('fill-current', className)}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M15.5 3.20577C15.7761 2.72748 15.6138 2.11069 15.1106 1.88308C10.4831 -0.209974 4.93267 1.50893 2.33975 6C-0.421677 10.7829 1.21707 16.8988 6.00001 19.6603C10.7829 22.4217 16.8988 20.7829 19.6603 16C21.3299 13.1081 21.3909 9.72896 20.121 6.89859C19.8927 6.38971 19.2681 6.22869 18.7882 6.51297V6.51297C18.3172 6.79199 18.164 7.39576 18.3757 7.90061C19.3092 10.1268 19.2284 12.7481 17.9282 15C15.7191 18.8263 10.8263 20.1373 7.00001 17.9282C3.17367 15.7191 1.86267 10.8263 4.0718 7C6.11195 3.46636 10.4408 2.07795 14.1049 3.62618C14.6136 3.84114 15.2239 3.68406 15.5 3.20577V3.20577Z"
        fill={'url(#' + randomId + ')'}
      />
      <defs>
        <radialGradient id={randomId} cx="0.93" cy="0.52" r="0.7">
          <stop offset="0" stopColor={otherProps.color} stopOpacity="0" />
          <stop offset="0.35" stopColor={otherProps.color} stopOpacity="0" />
          <stop offset="0.4" stopColor={otherProps.color} stopOpacity="0.1" />
          <stop offset="0.44" stopColor={otherProps.color} stopOpacity="0.2" />
          <stop offset="0.6" stopColor={otherProps.color} stopOpacity="0.5" />
          <stop offset="0.7" stopColor={otherProps.color} stopOpacity="0.9" />
          <stop offset="0.8" stopColor={otherProps.color} />
          <stop offset="0.9" stopColor={otherProps.color} />
          <stop offset="1" stopColor={otherProps.color} />
        </radialGradient>
      </defs>
    </svg>
  )
})

Spinner.displayName = 'Spinner'
