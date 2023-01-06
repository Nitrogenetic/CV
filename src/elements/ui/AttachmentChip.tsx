import React, { memo } from 'react'
import * as Icon from '~icons'
import { ClassName } from '~types'

export interface AttachmentChipProps {
  fileName: string
  fileSize: string
  className?: ClassName
}

export const AttachmentChip: React.FC<AttachmentChipProps> = memo(props => {
  const { fileName, fileSize, className = '' } = props
  return (
    <div
      className={
        'bg-neutral-9 text-neutral-3 text-10 rounded-6 inline-flex flex-row items-center p-4 border border-solid border-neutral-5 ' +
        className
      }
    >
      <Icon.PDF className={'w-18 h-18 text-red-1'} />
      <span className={'mx-6'}>{fileName}</span>
      <span>{fileSize}</span>
    </div>
  )
})

AttachmentChip.displayName = 'AttachmentChip'
