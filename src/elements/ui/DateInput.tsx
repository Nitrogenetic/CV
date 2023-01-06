import React, { memo, useCallback, useRef, useState } from 'react'
import cls from 'classnames'
import { DateTimePicker, TextInput, TextInputProps } from '~ui'
import { Popover, PopoverProps } from '~ux'

type DateInputSize = 'md' | 'sm'

export interface DateInputProps extends Omit<TextInputProps, 'value' | 'onChange' | 'onFocus'> {
  value: string[]
  fromTime?: string
  toTime?: string
  className?: string
  displayValue: (startTime: string, endTime: string) => string
  onChange: (value: string[]) => void
  inputSize?: DateInputSize
  popover?: Omit<PopoverProps, 'show' | 'onHide' | 'panel' | 'children' | 'containerParent'>
}

export const DateInput: React.FC<DateInputProps> = memo(props => {
  const { className, value, fromTime, toTime, displayValue, onChange, inputSize = 'md', popover, ...rest } = props
  const containerParentRef = useRef<HTMLDivElement>(null)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const hidePopover = useCallback(() => setShowDatePicker(false), [])
  const showPopover = useCallback(() => setShowDatePicker(true), [])

  return (
    <Popover
      show={showDatePicker}
      onHide={hidePopover}
      padding={16}
      containerParent={containerParentRef.current as HTMLElement}
      panel={
        <DateTimePicker
          startTime={value[0]}
          endTime={value[1]}
          fromTime={fromTime}
          toTime={toTime}
          onDateTimeChange={(startDateTime, endDateTime) => onChange([startDateTime, endDateTime])}
        />
      }
      {...popover}
    >
      <div ref={containerParentRef} className={'w-full'}>
        <TextInput
          value={displayValue(value[0], value[1])}
          readOnly
          className={cls(className, { 'py-20': inputSize === 'md', 'py-14': inputSize === 'sm' })}
          onFocus={showPopover}
          {...rest}
        />
      </div>
    </Popover>
  )
})

DateInput.displayName = 'DateInput'
