import cls from 'classnames'
import React, { memo, useCallback, useState } from 'react'
import { Children, ClassName } from '~types'
import { Popover, PopoverProps } from '~ux'
import { MeetingCalendarChipVariantType } from './MeetingCalendarChip'

export type ContextMenuVariantType = 'primary'

const contextMenuBaseVariant = 'px-10 pt-12 pb-10 rounded-8 bg-neutral-9 text-neutral-1'
const getContextMenuVariantClass = (variant: MeetingCalendarChipVariantType, className?: ClassName) =>
  cls(contextMenuBaseVariant, className)
export interface ContextMenuProps extends Omit<PopoverProps, 'show' | 'onHide' | 'children' | 'panel'> {
  variant?: ContextMenuVariantType
  children: ((show: boolean, setShow: (value: boolean) => void) => Children) | Children
  panel: ((show: boolean, setShow: (value: boolean) => void) => Children) | Children
}

export const ContextMenu: React.FC<ContextMenuProps> = memo(props => {
  const { className, variant = 'primary', children, panel, ...rest } = props

  const [show, setShow] = useState(false)

  const hidePopover = useCallback(() => setShow(false), [])

  return (
    <Popover
      show={show}
      onHide={hidePopover}
      containerClassName={'z-10'}
      panel={
        <div className={getContextMenuVariantClass(variant, className)}>
          {typeof panel === 'function' ? panel(show, setShow) : panel}
        </div>
      }
      {...rest}
    >
      {typeof children === 'function' ? children(show, setShow) : children}
    </Popover>
  )
})

ContextMenu.displayName = 'ContextMenu'
