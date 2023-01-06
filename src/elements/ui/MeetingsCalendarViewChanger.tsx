import cls from 'classnames'
import React, { FC, memo, useCallback, useState } from 'react'
import { useMeetingsPage } from '~hooks'
import * as Icon from '~icons'
import { ClassName, OptionType } from '~types'
import { MeetingCalendarChip } from '~ui'
import { Popover } from '~ux'

export type MeetingCalendarViewKindType = 'primary'
export interface MeetingsCalendarViewChangerProps {
  className?: ClassName
  kind?: MeetingCalendarViewKindType
}

const MeetingsCalendarViewChanger: FC<MeetingsCalendarViewChangerProps> = memo(props => {
  const { className, kind = 'primary' } = props

  const [show, onHide] = useState(false)

  const hidePopover = useCallback(() => onHide(false), [])

  const {
    filter: { view },
    viewOptions,
    changeMeetingsPageView
  } = useMeetingsPage()

  const handleMeetingViewChange = (option: OptionType, checked: boolean) => {
    if (checked) {
      changeMeetingsPageView(option)
    }
    return null
  }

  return (
    <div className={'relative inline-flex items-center mr-27 cursor-pointer'}>
      <Popover
        show={show}
        onHide={hidePopover}
        position={'bottom'}
        containerStyle={{ zIndex: '10' }}
        align={'start'}
        panel={
          <div className={cls('w-120 p-10 rounded-8 bg-neutral-12 mt-16', className)}>
            {viewOptions.map((option, index) => {
              const checked = option.value === view.value
              return (
                <MeetingCalendarChip
                  key={index}
                  chipType={'view-filter'}
                  option={option}
                  checked={checked}
                  onChange={handleMeetingViewChange}
                />
              )
            })}
          </div>
        }
      >
        <div
          className={'inline-flex items-center text-14 text-white hover:text-primary-4'}
          onClick={() => onHide(!show)}
        >
          {view.label}
          <Icon.ArrowChevronDown className={'w-12 h-6 ml-6 ' + (show ? 'transform rotate-180' : '')} />
        </div>
      </Popover>
    </div>
  )
})

MeetingsCalendarViewChanger.displayName = 'MeetingsCalendarViewChanger'

export { MeetingsCalendarViewChanger }
