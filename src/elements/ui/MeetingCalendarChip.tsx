import React, { FC, memo } from 'react'
import { ClassName, OptionType } from '~types'
import { Checkbox } from '~ui'
import cls from 'classnames'

export type MeetingCalendarChipType = 'status-filter' | 'view-filter' | 'default'
export type MeetingCalendarChipVariantType = 'primary'

const meetingCalendarChipBaseVariant =
  'w-full inline-flex items-center justify-between whitespace-nowrap mb-5 px-8 py-3 text-white bg-neutral-12 rounded-6 hover:text-primary-4'
const checkedMeetingCalendarChipBaseVariant =
  'w-full inline-flex items-center justify-between whitespace-nowrap mb-5 px-8 py-3 bg-primary-6 rounded-6 text-primary-4'

const getMeetingCalendarChipVariantClass = (variant: MeetingCalendarChipVariantType, className?: ClassName) =>
  cls(className, meetingCalendarChipBaseVariant)

const getCheckedMeetingCalendarChipVariantClass = (variant: MeetingCalendarChipVariantType, className?: ClassName) =>
  cls(className, checkedMeetingCalendarChipBaseVariant)

export interface MeetingCalendarChipProps {
  className?: ClassName
  variant?: MeetingCalendarChipVariantType
  chipType?: MeetingCalendarChipType
  option: OptionType
  checked: boolean
  meetingsLength?: number
  onChange?: (option: OptionType, checked: boolean) => void
}

const MeetingCalendarChip: FC<MeetingCalendarChipProps> = memo(props => {
  const {
    className,
    variant = 'primary',
    chipType = 'default',
    option,
    checked,
    meetingsLength,
    onChange = () => null
  } = props

  const setPointColor = (value: string) => {
    switch (value) {
      case 'upcoming':
        return 'bg-violet-3'
      case 'draft':
        return 'bg-green-1'
      case 'live':
        return 'bg-red-1'
      case 'ended':
        return 'bg-neutral-3'
    }
  }

  const renderLabel = (label: string) => {
    switch (label) {
      case 'Daily view':
        return 'Day'
      case 'Weekly view':
        return 'Week'
      case 'Monthly view':
        return 'Month'
    }
  }

  const StartFilter = () => (
    <label
      className={
        checked
          ? getCheckedMeetingCalendarChipVariantClass(variant, className)
          : getMeetingCalendarChipVariantClass(variant, className)
      }
      onClick={() => onChange(option, checked)}
    >
      <div className={'flex items-center text-12'}>
        {!checked && <div className={'w-6 h-6 rounded-3 mr-8 ' + setPointColor(option.value)} />}
        {option.label}
      </div>
      <Checkbox
        className={checked ? 'visible' : 'invisible'}
        name={option.value}
        kind={'primary'}
        value={checked}
        onChange={({ currentTarget: { checked } }) => onChange(option, checked)}
        outlined
      />
      {!checked && <div>{meetingsLength}</div>}
    </label>
  )

  const ViewFilter = () => (
    <label
      className={
        checked
          ? getCheckedMeetingCalendarChipVariantClass(variant, className)
          : getMeetingCalendarChipVariantClass(variant, className)
      }
      onClick={() => onChange(option, checked)}
    >
      <div className={'flex items-center text-12'}>{renderLabel(option.label)}</div>
      <Checkbox
        className={checked ? 'visible' : 'invisible'}
        name={option.value}
        kind={'primary'}
        value={checked}
        onChange={({ currentTarget: { checked } }) => onChange(option, checked)}
        outlined
      />
    </label>
  )

  const DefaultFilter = () => (
    <label
      className={
        checked
          ? getCheckedMeetingCalendarChipVariantClass(variant, className)
          : getMeetingCalendarChipVariantClass(variant, className)
      }
      onClick={() => onChange(option, checked)}
    >
      <div className={'flex items-center text-12'}>{option.label}</div>
      <Checkbox
        className={checked ? 'visible' : 'invisible'}
        name={option.value}
        kind={'primary'}
        value={checked}
        onChange={({ currentTarget: { checked } }) => onChange(option, checked)}
        outlined
      />
    </label>
  )

  return (
    <>
      {chipType === 'status-filter' && <StartFilter />}
      {chipType === 'view-filter' && <ViewFilter />}
      {chipType === 'default' && <DefaultFilter />}
    </>
  )
})

MeetingCalendarChip.displayName = 'MeetingCalendarChip'

export { MeetingCalendarChip }
