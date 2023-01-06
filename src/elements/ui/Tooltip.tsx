import cls from 'classnames'
import React, { FC, memo, PropsWithChildren, useCallback, useState } from 'react'
import { Popover as PopoverComponent } from 'react-tiny-popover'

type TooltipPositionType = 'top' | 'bottom' | 'right' | 'left'
type TooltipAlignType = 'start' | 'center' | 'end'

interface TooltipProps {
  text: string
  position?: TooltipPositionType
  align?: TooltipAlignType
  wrapperClassName?: string
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = memo(props => {
  const { text, position, align, children, wrapperClassName } = props

  const [show, setShow] = useState<boolean>(false)

  const showPopover = useCallback(() => setShow(true), [])
  const hidePopover = useCallback(() => setShow(false), [])

  const onEscPress = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key

    if (key !== 'Enter') return
    hidePopover()
  }, [])

  return (
    <PopoverComponent
      isOpen={show}
      padding={5}
      positions={[position]}
      reposition
      align={align}
      containerStyle={{ zIndex: '1002' }}
      content={
        <p
          className={cls('relative bg-black w-fit rounded-8 max-w-280 px-12 py-4 text-white text-12', {
            'before:(content-DEFAULT absolute border-3 border-black border-r-transparent border-t-transparent transform)':
              align || position,
            'before:(-bottom-3 -rotate-45)': position === 'top',
            'before:(-top-3 rotate-135)': position === 'bottom',
            'before:(left-1/2 -translate-x-1/2)': align === 'center',
            'before:right-12': align === 'end'
          })}
        >
          {text}
        </p>
      }
    >
      <div
        className={cls('h-fit w-fit', wrapperClassName)}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
        onFocus={showPopover}
        onKeyDown={onEscPress}
      >
        {children}
      </div>
    </PopoverComponent>
  )
})

Tooltip.displayName = 'Tooltip'
