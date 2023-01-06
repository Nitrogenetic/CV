import React, { FC, memo } from 'react'
import cls from 'classnames'
import { ClassName, MeetingType } from '~types'
import { getDateHoursMinutesFormat } from '~utils'
import { MeetingStatusType } from '~types'

export type MeetingChipVariantType = 'primary'

const meetingChipBaseVariant =
  'w-full h-24 inline-flex items-center rounded-4 px-6 py-3 transition-colors bg-neutral-12 hover:bg-neutral-9 cursor-pointer'

const getMeetingChipVariantClass = (variant: MeetingChipVariantType, className?: ClassName) =>
  cls(className, meetingChipBaseVariant)

export interface MeetingChipProps {
  className?: ClassName
  variant?: MeetingChipVariantType
  meeting: MeetingType
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const MeetingChip: FC<MeetingChipProps> = memo(props => {
  const { className, variant = 'primary', meeting, onClick } = props
  const { startTime, title, status } = meeting

  const time = getDateHoursMinutesFormat(new Date(startTime))

  const getMeetingChipStatusColor = (status: MeetingStatusType) => {
    switch (status) {
      case 'upcoming':
        return 'bg-violet-3'
      case 'live':
      case 'ready to start':
        return 'bg-primary-4'
      case 'ended':
        return 'bg-neutral-8'
      default:
        return 'bg-transparent'
    }
  }
  return (
    <div className={getMeetingChipVariantClass(variant, className)} onClick={onClick} id={meeting.id}>
      <div className={cls('w-8 h-8 rounded-50 mr-6', getMeetingChipStatusColor(status))} />
      <small className={'text-neutral-3 mr-6'}>{time}</small>
      <h6 className={'w-90 text-neutral-1 block truncate'}>{title}</h6>
    </div>
  )
})

MeetingChip.displayName = 'MeetingChip'

export { MeetingChip }
