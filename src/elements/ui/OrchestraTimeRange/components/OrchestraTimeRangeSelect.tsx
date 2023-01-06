import React, { memo, forwardRef, useState } from 'react'
import * as Icon from '~icons'
import { Popover } from '~ux'
import { OrchestraButton } from '~ui'
import { Children, ClassName, OptionType } from '~types'
import { Listbox } from '@headlessui/react'
import cls from 'classnames'

export interface OrchestraTimeRangeSelectProps {
  selected: string
  timeOptions: OptionType[]
  children: Children
  className?: ClassName
  optionsClassName?: ClassName

  onSelect(value: string): void
}

export const OrchestraTimeRangeSelect = memo(
  forwardRef<HTMLDivElement, OrchestraTimeRangeSelectProps>((props, ref) => {
    const { selected, timeOptions, children, className, optionsClassName, onSelect } = props

    const [isPopover, setPopover] = useState(false)

    return (
      <Listbox value={selected} onChange={onSelect} as="div" className={cls(className)}>
        <Popover
          show={isPopover}
          containerStyle={{ top: '10px' }}
          panel={
            <div className="relative">
              <Listbox.Options
                className={cls(
                  'space-y-4 w-fit p-8 rounded-8 shadow-select bg-white border-b-2 border-gray-20 max-h-230 w-160 overflow-y-auto',
                  optionsClassName
                )}
              >
                {timeOptions.map(option => (
                  <Listbox.Option key={option.value} className={'cursor-pointer'} value={option.value}>
                    {({ selected }) => {
                      return (
                        <div
                          className={cls('flex items-center px-12 py-6 text-14 rounded-8 text-gray-80  font-semibold', {
                            'bg-gray-100 text-gray-10': selected
                          })}
                        >
                          <span className="mr-auto">{option.label}</span>
                          {selected && <Icon.OrchestraCheck />}
                        </div>
                      )
                    }}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          }
          position={'bottom'}
          align={'start'}
          onHide={() => setPopover(false)}
        >
          <OrchestraButton className={'text-gray-100'} kind="ghost" onClick={() => setPopover(true)}>
            {children}
          </OrchestraButton>
        </Popover>
      </Listbox>
    )
  })
)

OrchestraTimeRangeSelect.displayName = 'OrchestraTimeRangeSelect'
