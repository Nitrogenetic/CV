import cls from 'classnames'
import React, { memo } from 'react'
import { ClassName, OptionType } from '~types'
import { ConditionalRender, List } from '~ux'

export type OrchestraTabOptionType = OptionType<string, { suffix?: any }>
export interface OrchestraTabsProps {
  tabOptions: OrchestraTabOptionType[]
  tab: string
  listClassName?: string
  liClassName?: ClassName
  linkClassName?: ClassName
  outlined?: boolean
  onChange: (value: string) => void
}

const getOrchestraTabsLinkClass = (optionTab: OptionType, value: string, className?: ClassName) => {
  const { value: OptionValue } = optionTab
  return cls(className, 'relative mx-12 text-14 font-bold leading-normal transition-colors', {
    'text-blue-70': OptionValue === value,
    'text-gray-80': OptionValue !== value
  })
}

export const OrchestraTabs: React.FC<OrchestraTabsProps> = memo(props => {
  const { tabOptions, tab, listClassName, outlined = true, liClassName, linkClassName, onChange } = props
  return (
    <List<OrchestraTabOptionType>
      listProps={{
        className: cls('flex flex-1 list-none flex-wrap bg-transparent border-solid', listClassName, {
          'border-b-2 border-gray-20': outlined
        }),
        role: 'tablist'
      }}
      items={tabOptions}
      itemKey={(_, index) => index}
      itemProps={{
        className: cls(liClassName)
      }}
      renderItem={optionTab => (
        <div className={cls('flex -mb-px text-left relative transition-colors', liClassName)}>
          <a
            className={getOrchestraTabsLinkClass(optionTab, tab, linkClassName)}
            onClick={e => {
              e.preventDefault()
              onChange && onChange(optionTab.value)
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            {optionTab.label}
            <ConditionalRender condition={optionTab?.suffix}>{`(${optionTab?.suffix})`}</ConditionalRender>
          </a>
          <ConditionalRender condition={optionTab.value === tab}>
            <div className={'absolute -bottom-1 w-full bg-blue-70 h-2 transition-colors'} />
          </ConditionalRender>
        </div>
      )}
    />
  )
})

OrchestraTabs.displayName = 'OrchestraTabs'
