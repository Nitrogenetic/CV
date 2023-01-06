import React, { forwardRef, memo } from 'react'
import { ClassName } from '~types'
import { Autocomplete, TextInputProps } from '~ui'
import { getZones } from '~utils'

export interface TimezonePickerProps {
  className?: ClassName
  name: string
  value: string
  onChange: (value: string) => void
  textInputProps: Omit<TextInputProps, 'name' | 'value' | 'onChange' | 'onClick'>
}

const zones = getZones()
export const TimezonePicker = memo(
  forwardRef<HTMLInputElement, TimezonePickerProps>((props, ref) => {
    return <Autocomplete options={zones} ref={ref} {...props} />
  })
)

TimezonePicker.displayName = 'TimezonePicker'
