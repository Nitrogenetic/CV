import { FC, useMemo } from 'react'
import dayjs from 'dayjs'

import { ClassName, MeetingType, UserType } from '~types'
import { SmallOrchestraSessionCard } from './components/SmallOrchestraSessionCard'
import { MediumOrchestraSessionCard } from './components/MediumOrchestraSessionCard'
import { LargeOrchestraSessionCard } from './components/LargeOrchestraSessionCard'

export type SessionCardSizeType = 'sm' | 'md' | 'lg'
export interface OrchestraSessionCardProps {
  session: MeetingType
  className?: ClassName
  currentUser: UserType
  size?: SessionCardSizeType
  onPlan?: (session: MeetingType) => void
  onJoin?: (session: MeetingType) => void
  onViewResponses?: (session: MeetingType) => void
  onDuplicate?: (session: MeetingType) => void
  onRemove?: (session: MeetingType) => void
}

export const OrchestraSessionCard: FC<OrchestraSessionCardProps> = props => {
  const { size = 'lg', ...otherProps } = props
  const session = props.session || ({} as MeetingType)

  const { startTime, endTime } = session

  const description = useMemo(() => {
    const startDate = dayjs(startTime).local()

    const day = dayjs(startTime).local().get('date')
    const monthNum = dayjs(startTime).local().get('month')
    const month = dayjs().local().month(monthNum).format('MMM')
    const startDateTime = dayjs(startTime).local().format('HH:mm a')
    const endDateTime = dayjs(endTime).local().format('HH:mm a')

    const isToday = dayjs().isSame(startDate, 'day')
    const isYesterday = dayjs().add(-1, 'day').isSame(startDate, 'day')
    const isTomorrow = dayjs().add(1, 'day').isSame(startDate, 'day')

    let firstPartOfDescription = `${month} ${day}`
    if (isToday) firstPartOfDescription = 'Today'
    if (isYesterday) firstPartOfDescription = 'Yesterday'
    if (isTomorrow) firstPartOfDescription = 'Tomorrow'

    return `${firstPartOfDescription} — ${startDateTime} - ${endDateTime}`
  }, [startTime, endTime])

  const cardProps = { ...otherProps, description }

  if (size === 'sm') return <SmallOrchestraSessionCard {...cardProps} />
  if (size === 'md') return <MediumOrchestraSessionCard {...cardProps} />
  if (size === 'lg') return <LargeOrchestraSessionCard {...cardProps} />
  return null
}

OrchestraSessionCard.displayName = 'OrchestraSessionCard'
