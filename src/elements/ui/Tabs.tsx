import cls from 'classnames'
import React, { memo } from 'react'
import { ClassName, OptionType } from '~types'
import { ConditionalRender, List } from '~ux'

export interface TabsProps {
  tabOptions: OptionType[]
  tab: string
  onChange: (value: string) => void
  listClassName?: string
  liClassName?: ClassName
  linkClassName?: ClassName
  outlined?: boolean
}

const getTabsLinkClass = (optionTab: OptionType, value: string, className?: ClassName) => {
  const { value: OptionValue } = optionTab
  return cls(
    className,
    'relative mx-auto text-14 shadow-lg rounded block leading-normal border-bottom border-solid transition-colors',
    {
      'border-violet-2 text-white': OptionValue === value,
      'text-neutral-5': OptionValue !== value
    }
  )
}

export const Tabs: React.FC<TabsProps> = memo(props => {
  const { tabOptions, onChange, tab, listClassName, outlined = true, liClassName, linkClassName } = props
  return (
    <div className={'flex bg-transparent'}>
      <List<OptionType>
        listProps={{
          className: cls('flex flex-1 list-none flex-wrap border-solid', listClassName, {
            'border-neutral-9 border-b': outlined
          }),
          role: 'tablist'
        }}
        items={tabOptions}
        itemKey={(_, index) => index}
        renderItem={optionTab => (
          <div className={cls('flex -mb-px mr-20 flex-auto text-left relative transition-colors', liClassName)}>
            <a
              className={getTabsLinkClass(optionTab, tab, linkClassName)}
              onClick={e => {
                e.preventDefault()
                onChange && onChange(optionTab.value)
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              {optionTab.label}
            </a>
            <ConditionalRender condition={optionTab.value === tab}>
              <div className={'absolute bottom-0 w-full bg-violet-3 h-1 transition-colors'} />
            </ConditionalRender>
          </div>
        )}
      />
    </div>
  )
})

Tabs.displayName = 'Tabs'
