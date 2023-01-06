import React, { HTMLAttributes } from 'react'
import { ClassName } from '~types'
import * as Icons from './icons/EXPORT'

export type AllIconTypes = typeof Icons
export type AllIconNames = keyof AllIconTypes

export type IconProps = {
  className?: ClassName
  onClick?(e: React.MouseEvent<HTMLOrSVGElement>): void
} & Partial<HTMLAttributes<SVGElement>>

export * from './icons/EXPORT'
