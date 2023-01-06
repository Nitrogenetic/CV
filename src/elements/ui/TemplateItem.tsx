import React, { useState, memo } from 'react'
import { ClassName, TemplateType } from '~types'
import cls from 'classnames'
import * as Icon from '~icons'
import { Popover } from '~ux'

export interface TemplateItemProps {
  className?: ClassName
  template: TemplateType
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const TemplateItem: React.FC<TemplateItemProps> = memo(props => {
  const { className, template, onClick } = props
  const { title, imageUrl, shortDescription } = template

  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className={cls(
        'w-240 h-170 rounded-8 relative bg-gradient-to-b from-gradient-1 to-gradient-2 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <img src={imageUrl} className={'w-full h-full absolute top-0 left-0'} />
      <span className={'w-full h-full bg-gradient-to-b from-gradient-1 to-gradient-2 absolute top-0 left-0'} />
      <Popover
        containerClassName={'z-1'}
        panel={
          <div className={'bg-neutral-13 px-10 py-8 w-160 text-12 text-white shadow rounded-8 opacity-95'}>
            {shortDescription}
          </div>
        }
        show={showTooltip}
        onHide={() => setShowTooltip(false)}
        position={'left'}
        align={'start'}
        padding={16}
      >
        <div onMouseOver={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
          <Icon.Info className={'w-15 h-15 absolute top-15 left-20 text-white'} />
        </div>
      </Popover>
      <span className={'text-white bottom-18 left-20 absolute'}>{title}</span>
    </div>
  )
})

TemplateItem.displayName = 'TemplateItem'
