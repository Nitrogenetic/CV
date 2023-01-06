import React, { memo, forwardRef, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import * as Icon from '~icons'
import { Popover } from '../ux/Popover'
import { DatePicker, OrchestraButton } from '~ui'

export interface OrchestraDatePickerProps {
  selectedDate: Dayjs
  setSelectedDate(date: Dayjs): void
}

export const OrchestraDatePicker = memo(
  forwardRef<HTMLDivElement, OrchestraDatePickerProps>((props, ref) => {
    const { selectedDate, setSelectedDate } = props

    const dateForDisplay = selectedDate.format('dddd, MMMM D')

    const [isPopover, setPopover] = useState(true)

    return (
      <Popover
        show={isPopover}
        containerStyle={{ top: '10px' }}
        panel={
          <div>
            <DatePicker dates={[selectedDate]} onDateChange={(_, date) => setSelectedDate(dayjs(date))} />
          </div>
        }
        position={'bottom'}
        align={'start'}
        onHide={() => setPopover(false)}
      >
        <OrchestraButton className={'text-gray-100'} kind="ghost" onClick={() => setPopover(true)}>
          <Icon.OrchestraCalendar className={'h-20 w-20 mr-11 fill-gray-100'} />
          {dateForDisplay}
        </OrchestraButton>
      </Popover>
    )
  })
)

OrchestraDatePicker.displayName = 'OrchestraDatePicker'
