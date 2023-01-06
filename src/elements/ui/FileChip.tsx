import { truncate } from 'lodash'
import React, { FC, memo, useCallback, useState } from 'react'
import { PopoverPosition } from 'react-tiny-popover'
import { AttachmentType } from '~types'
import { Popover } from '~ux'
import * as Icon from '~icons'

export type FilePopoverPanel =
  | ((stateManager: [state: boolean, handler: React.Dispatch<React.SetStateAction<boolean>>]) => JSX.Element)
  | JSX.Element
  | undefined

interface FileChipProps {
  file: AttachmentType
  className?: string
  position?: Exclude<PopoverPosition, 'custom'>
  popover: FilePopoverPanel
}

const FileChip: FC<FileChipProps> = memo(props => {
  const { file, className, popover, position } = props
  const { byteSize, type, filename } = file

  const popoverStateManager = useState(false)
  const [showPopover, setPopoverState] = popoverStateManager

  const handleOpenPopover = useCallback(() => setPopoverState(true), [])
  const handleClosePopover = useCallback(() => setPopoverState(false), [])

  const BYTE = 1
  const KILOBYTE = BYTE * 1024
  const MEGABYTE = KILOBYTE * 1024
  const GIGABYTE = MEGABYTE * 1024

  let fileSize

  switch (true) {
    case byteSize < KILOBYTE:
      fileSize = byteSize.toFixed(1) + ' BT'
      break
    case byteSize < MEGABYTE:
      fileSize = (byteSize / KILOBYTE).toFixed(1) + ' KB'
      break
    case byteSize < GIGABYTE:
      fileSize = (byteSize / MEGABYTE).toFixed(1) + ' MB'
      break
  }

  const text = truncate(filename, { length: 60 })

  return (
    <div className={'bg-neutral-9 rounded-8 p-15 flex ' + className}>
      <div className={'relative flex items-center justify-center w-fit'}>
        <Icon.File className={'text-violet-1'} />
        <span className={'absolute uppercase top-1/2 text-violet-3 text-10 font-bold'}>{type.split('/')[1]}</span>
      </div>
      <div className={'text-12 flex flex-col h-full ml-20'}>
        <span className={'font-bold text-white'}>{text}</span>
        <span className={'text-neutral-4'}>{fileSize}</span>
      </div>
      {!!popover && (
        <Popover
          show={showPopover}
          onHide={handleClosePopover}
          containerClassName={'z-30'}
          className={'ml-auto w-36 h-36 rounded-8 bg-neutral-11 transition hover:bg-neutral-8 cursor-pointer'}
          panel={typeof popover === 'function' ? popover(popoverStateManager) : popover}
          position={position}
        >
          <div className={'w-full h-full flex justify-center items-center'} onClick={handleOpenPopover}>
            <Icon.ActionsVertical className={'text-neutral-5 w-5 h-18'} onClick={handleOpenPopover} />
          </div>
        </Popover>
      )}
    </div>
  )
})

FileChip.displayName = 'FileChip'

export { FileChip }
