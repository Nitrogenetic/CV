import React, { memo } from 'react'
import cls from 'classnames'
import { Children, ClassName } from '~types'
import './MoreChip.css'

export type MoreChipKindType = 'primary' | 'neutral'

const getMoreChipClass = (kind: MoreChipKindType, className?: ClassName) => {
  const isPrimary = !kind || kind === 'primary'
  const isNeutral = kind === 'neutral'
  return cls(className, 'more-chip', {
    'more-chip-primary': isPrimary,
    'more-chip-neutral': isNeutral
  })
}
export interface MoreChipProps {
  className?: ClassName
  kind?: MoreChipKindType
  children: Children
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const MoreChip: React.FC<MoreChipProps> = memo(props => {
  const { className, kind = 'primary', children, onClick = () => null } = props

  return (
    <div className={getMoreChipClass(kind, className)} onClick={onClick}>
      <h6>{children}</h6>
    </div>
  )
})

MoreChip.displayName = 'MoreChip'
