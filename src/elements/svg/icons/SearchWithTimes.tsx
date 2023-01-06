import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const SearchWithTimes: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M36.3679 13.125C28.3689 13.125 21.8608 19.6331 21.8608 27.6321C21.8608 31.2308 23.1857 34.5205 25.3633 37.0588L23.8463 38.5757L23.0573 37.7868C22.6214 37.3509 21.9152 37.3509 21.4793 37.7868L13.4519 45.8141C13.016 46.25 13.016 46.9562 13.4519 47.3921L16.6079 50.5481C17.0438 50.984 17.75 50.984 18.1859 50.5481L26.2133 42.5207C26.6492 42.0849 26.6492 41.3786 26.2133 40.9427L25.4243 40.1538L26.9413 38.6367C29.4795 40.8144 32.7693 42.1393 36.3679 42.1393C44.3669 42.1393 50.875 35.6311 50.875 27.6321C50.875 19.6331 44.3669 13.125 36.3679 13.125ZM41.8909 31.5771C42.3268 32.013 42.3268 32.7192 41.8909 33.1551C41.455 33.591 40.7489 33.591 40.3129 33.1551L36.3679 29.2101L32.4229 33.1551C31.987 33.591 31.2808 33.591 30.8449 33.1551C30.409 32.7192 30.409 32.013 30.8449 31.5771L34.7899 27.6321L30.8449 23.6871C30.409 23.2512 30.409 22.545 30.8449 22.1091C31.2808 21.6733 31.987 21.6733 32.4229 22.1091L36.3679 26.0541L40.3129 22.1091C40.7488 21.6733 41.455 21.6733 41.8909 22.1091C42.3268 22.545 42.3268 23.2512 41.8909 23.6871L37.9459 27.6321L41.8909 31.5771Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="32" y1="64" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC9DC" />
          <stop offset="1" stopColor="#FFECF3" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="32" y1="50.875" x2="32" y2="13.125" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9F9F" />
          <stop offset="1" stopColor="#F92D7A" />
        </linearGradient>
      </defs>
    </svg>
  )
})

SearchWithTimes.displayName = 'SearchWithTimes'
