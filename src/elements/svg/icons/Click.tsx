import cls from 'classnames'
import React, { FC } from 'react'
import { IconProps } from '~icons'

export const Click: FC<IconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.10775 0.335629C8.49285 0.302986 8.83235 0.578993 8.86604 0.95211L8.98805 2.30328C9.02174 2.6764 8.73687 3.00533 8.35177 3.03798C7.96667 3.07062 7.62718 2.79461 7.59348 2.42149L7.47147 1.07032C7.43778 0.697206 7.72265 0.368273 8.10775 0.335629ZM11.6684 2.79086C11.9169 2.50395 11.8782 2.07619 11.5821 1.83544C11.286 1.59469 10.8445 1.63211 10.596 1.91903L9.69616 2.95804C9.44768 3.24495 9.48631 3.67271 9.78244 3.91346C10.0786 4.15421 10.5201 4.11679 10.7685 3.82987L11.6684 2.79086ZM9.18495 5.27354C9.27463 5.00998 9.18953 4.72007 8.97012 4.54169C8.7507 4.36331 8.44125 4.33245 8.18893 4.46379L0.702017 8.36104C0.461697 8.48613 0.31829 8.73512 0.33459 8.99896C0.350889 9.26281 0.523924 9.49344 0.777929 9.58987L1.93383 10.0287L0.880892 11.2445C0.63241 11.5314 0.671036 11.9592 0.967165 12.1999L2.57573 13.5077C2.87186 13.7484 3.31336 13.711 3.56184 13.4241L4.61478 12.2083L5.26153 13.235C5.40365 13.4606 5.66812 13.5857 5.93914 13.5554C6.21015 13.5251 6.43832 13.3451 6.52374 13.094L9.18495 5.27354ZM3.35154 9.11017L2.69764 8.86193L7.30618 6.46299L5.66809 11.2769L5.30221 10.6961C5.18481 10.5097 4.98197 10.3895 4.75725 10.3731C4.53253 10.3567 4.31342 10.4462 4.16856 10.6134L2.93938 12.0327L2.40319 11.5968L3.63237 10.1775C3.77723 10.0103 3.8301 9.78565 3.77444 9.57407C3.71877 9.36249 3.56136 9.18983 3.35154 9.11017ZM12.9057 4.32285C13.2908 4.29021 13.6303 4.56621 13.664 4.93933C13.6977 5.31245 13.4128 5.64138 13.0277 5.67402L11.6331 5.79223C11.248 5.82488 10.9085 5.54887 10.8748 5.17575C10.8411 4.80264 11.126 4.4737 11.5111 4.44106L12.9057 4.32285Z"
        fill=""
      />
    </svg>
  )
}