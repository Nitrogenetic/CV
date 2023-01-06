import React, { FC, memo } from 'react'
import { OptionType } from '~types'
import cls from 'classnames'

export interface TabsSwitcherProps {
  options: OptionType[]
  value: string
  onChange: (value: string) => void
  className?: string
  tabClassName?: string
  kind?: 'neutral' | 'primary'
}

const getTabsSwitcherOptionClass = (
  value: string,
  option: OptionType,
  index: number,
  length: number,
  notEdge: boolean,
  kind: TabsSwitcherProps['kind'],
  tabClassName?: string
) => {
  const { value: optionValue } = option
  return cls('px-14 py-8 text-neutral-2 text-14 font-bold transition-colors', tabClassName, {
    'bg-neutral-11': value === optionValue && kind === 'neutral',
    'bg-primary-6 !text-primary-4': value === optionValue && kind === 'primary',
    'border border-neutral-9 rounded-l-lg': index === 0,
    'border-t border-r border-b border-neutral-9 rounded-r-lg': index === length - 1,
    'border-t border-b border-r border-neutral-9': notEdge
  })
}

export const TabsSwitcher: FC<TabsSwitcherProps> = memo(props => {
  const { options, value, onChange, className, kind = 'neutral', tabClassName } = props

  return (
    <div className={cls('flex items-center w-fit cursor-pointer', className)}>
      {options.map((option, index) => {
        const notEdgeOption = options.filter((_, index) => {
          return index !== 0 && index !== options.length - 1
        })
        const notEdge = notEdgeOption.includes(option)
        const optionsLength = options.length

        return (
          <div
            key={index}
            className={getTabsSwitcherOptionClass(value, option, index, optionsLength, notEdge, kind, tabClassName)}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </div>
        )
      })}
    </div>
  )
})

TabsSwitcher.displayName = 'TabsSwitcher'
