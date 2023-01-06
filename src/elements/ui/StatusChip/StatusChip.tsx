import React, { FC, memo } from 'react'
import cls from 'classnames'
import { ClassName, MeetingStatusType } from '~types'
import './StatusChip.css'

export type StatusChipKindType = 'green' | 'violet' | 'gray' | 'primary'

const getStatusChipClass = (kind: StatusChipKindType, className?: ClassName) =>
  cls(className, 'status-chip', {
    'status-chip-green': !kind || kind === 'green',
    'status-chip-violet': kind === 'violet',
    'status-chip-gray': kind === 'gray',
    'status-chip-primary': kind === 'primary'
  })

export interface StatusChipProps {
  className?: ClassName
  status: MeetingStatusType
  kind?: StatusChipKindType
}

export const StatusChip: FC<StatusChipProps> = memo(props => {
  const { className, status } = props

  if (!status) return null

  let { kind } = props

  switch (status) {
    case 'upcoming':
      kind = 'violet'
      break
    case 'ended':
      kind = 'gray'
      break
    case 'live':
    case 'ready to start':
      kind = 'primary'
      break
    default:
      kind = 'gray'
      break
  }

  return (
    <div className={getStatusChipClass(kind, className)}>
      <small className={'xs-bold uppercase'}>{status}</small>
    </div>
  )
})

StatusChip.displayName = 'StatusChip'
