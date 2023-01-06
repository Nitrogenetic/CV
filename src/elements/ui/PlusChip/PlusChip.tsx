import React, { memo } from 'react'
import * as Icon from '~icons'
import { ClassName } from '~types'
import cls from 'classnames'
import './PlusChip.css'

export type PlusChipKindType = 'primary'

const getPlusChipClass = (kind: PlusChipKindType, className?: ClassName) => cls(className, 'plus-chip')

export interface PlusChipProps {
  className?: ClassName
  kind?: PlusChipKindType
  onClick?: () => void
}

export const PlusChip: React.FC<PlusChipProps> = memo(props => {
  const { className, kind = 'primary', onClick } = props

  return (
    <div className={getPlusChipClass(kind, className)} onClick={onClick}>
      <Icon.Plus className={'w-12 h-12 text-neutral-4'} />
    </div>
  )
})

PlusChip.displayName = 'PlusChip'
