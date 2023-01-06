import React, { useState } from 'react'
import cls from 'classnames'
import { Popover, PopoverProps } from '~ux'
import { OrchestraAvatarChip, OrchestraAvatarChipProps } from '~ui'
import { Children } from '~types'

interface OrchestraAvatarChipDetailPopoverProps {
  avatarProps: Omit<OrchestraAvatarChipProps, 'ref'>
  popoverProps?: Omit<PopoverProps, 'children' | 'panel' | 'show'>
  children: Children
}

export const OrchestraAvatarChipDetailPopover: React.FC<OrchestraAvatarChipDetailPopoverProps> = props => {
  const {
    children,
    avatarProps: { wrapperClassName, ...avatarProps },
    popoverProps
  } = props
  const [show, setShow] = useState(false)
  const togglePopover = (value: boolean) => () => setShow(value)
  return (
    <Popover
      reposition
      position={['right', 'left']}
      align={'start'}
      padding={8}
      {...popoverProps}
      show={show}
      onClickOutside={togglePopover(false)}
      panel={
        <div className={'p-16 rounded-12 bg-white shadow-basic-1'}>
          <OrchestraAvatarChip {...avatarProps} size={'lg'} wrapperClassName={'mb-24 mr-46 rounded-16'} />
          <div className={'mb-4 font-semibold text-14'}>{avatarProps.name}</div>
          <div className={'text-11 font-semibold text-gray-70'}>Mural Member</div>
        </div>
      }
    >
      <div className={cls(wrapperClassName)} onMouseEnter={togglePopover(true)} onMouseLeave={togglePopover(false)}>
        {children}
      </div>
    </Popover>
  )
}

OrchestraAvatarChipDetailPopover.displayName = 'OrchestraAvatarChipDetailPopover'
