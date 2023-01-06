import React, { memo } from 'react'
import cls from 'classnames'
import { ClassName } from '~types'
import { Popover } from '~ux'
import { Button } from '~ui'
import * as Icon from '~icons'

type RecordingMediaInfoPopoverTheme = 'light' | 'neutral'
interface RecordingMediaInfoPopoverProps {
  show: boolean
  theme?: RecordingMediaInfoPopoverTheme
  className?: ClassName
  triggerClassName?: ClassName
  onHide?(): void
  onClick?(): void
  onRecordVideo?(): void
}

const getPopoverTriggerClass = (theme: RecordingMediaInfoPopoverTheme, show: boolean, className?: ClassName) => {
  const isLightTheme = theme === 'light'
  const isNeutralTheme = theme === 'neutral'

  const defaultStyles =
    'flex items-center text-violet-3 px-12 py-20 w-165 h-36 mt-16 bold rounded-8 cursor-pointer transition'

  return cls(className, defaultStyles, {
    'bg-violet-1 text-violet-3': show && isLightTheme,
    'bg-rgba-4 hover:bg-violet-1 hover:text-violet-3': !show && isLightTheme,
    'bg-neutral-9 border-2 border-violet-3': show && isNeutralTheme,
    'bg-neutral-11 border-2 border-violet-3': !show && isNeutralTheme
  })
}

export const RecordingMediaInfoPopover: React.FC<RecordingMediaInfoPopoverProps> = memo(props => {
  const { show, theme = 'light', onHide = () => null, onClick, className, triggerClassName, onRecordVideo } = props

  return (
    <Popover
      show={show}
      onHide={onHide}
      className={cls(className)}
      containerStyle={{ zIndex: '20' }}
      panel={
        <div
          className={cls('px-24 py-18 border border-gradient-5 rounded-8 shadow-popover', {
            'bg-white': theme === 'light'
          })}
        >
          <div className={'flex items-center justify-between mb-20'}>
            <div className={'flex items-center justify-center w-36 h-36 bg-primary-1 rounded-8'}>
              <Icon.Record className={'w-15 h-15 text-primary-4'} />
            </div>
            <Icon.Times
              className={'w-16 h-16 transform text-neutral-2 cursor-pointer hover:text-red-2 hover:scale-110'}
              onClick={onHide}
            />
          </div>
          <div className={'font-bold text-neutral-7 mb-12'}>Record a video</div>
          <div className={'text-14 text-neutral-5 mb-24'}>
            Record a short video to share with your
            <br />
            teammates. Try introducing yourself or
            <br />
            explain important points.
          </div>
          <Button kind="red" onClick={onRecordVideo}>
            Start Recording
          </Button>
        </div>
      }
    >
      <div className={getPopoverTriggerClass(theme, show, triggerClassName)} onClick={onClick}>
        <Icon.Record className={'w-15 h-15 mr-8'} />
        <div className={'text-14 font-bold'}>Record an answer</div>
      </div>
    </Popover>
  )
})

RecordingMediaInfoPopover.displayName = 'RecordingMediaInfoPopover'
