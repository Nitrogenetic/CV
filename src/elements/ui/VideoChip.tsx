import React, { memo, useCallback, useState } from 'react'
import { AttachmentType } from '~types'
import { FilePopoverPanel, Player } from '~ui'
import { Popover, ConditionalRender } from '~ux'
import * as Icon from '~icons'
import { formattedTime, getMediaFileType } from '~utils'

interface VideoChipProps {
  media: AttachmentType
  popover: FilePopoverPanel
}

export const VideoChip: React.FC<VideoChipProps> = memo(props => {
  const { media, popover } = props

  const popoverStateManager = useState(false)
  const [showPopover, setPopoverState] = popoverStateManager

  const handleOpenPopover = useCallback(() => setPopoverState(true), [])
  const handleClosePopover = useCallback(() => setPopoverState(false), [])

  const { duration, type, filename } = media

  const currentType = getMediaFileType(type, filename)
  const isVideo = currentType === 'video'
  const isAudio = currentType === 'audio'

  // duration
  const currentDuration = formattedTime(duration)

  return (
    <div
      className={'w-full flex items-center justify-between bg-neutral-10 rounded-8 mb-20 p-4 pr-14 text-white text-12'}
    >
      <div className={'w-3/4 flex items-center'}>
        <div className={'mr-20 self-start rounded-8'}>
          {media && (
            <>
              {isVideo ? (
                <Player
                  url={(media.preview as string) || media.url}
                  videoDuration={duration}
                  className={'h-47 w-84'}
                  noControls
                  noStatic={false}
                />
              ) : isAudio ? (
                <div className={'w-47 h-47 flex justify-center rounded-8 bg-black'}>
                  <Icon.Union className={'h-20 m-auto w-20 text-white'} />
                </div>
              ) : null}
            </>
          )}
        </div>
        <div className={'mr-8 truncate'}>{media?.filename}</div>
        <div className={'text-neutral-4'}>{currentDuration}</div>
      </div>

      <ConditionalRender condition={!!popover}>
        <Popover
          show={showPopover}
          onHide={handleClosePopover}
          className={'ml-auto w-36 h-36 rounded-8 bg-neutral-11 transition hover:bg-neutral-8 cursor-pointer'}
          panel={typeof popover === 'function' ? popover(popoverStateManager) : popover}
        >
          <div className={'w-full h-full flex justify-center items-center'} onClick={handleOpenPopover}>
            <Icon.ActionsVertical className={'text-neutral-5 w-5 h-18'} />
          </div>
        </Popover>
      </ConditionalRender>
    </div>
  )
})

VideoChip.displayName = 'VideoChip'
