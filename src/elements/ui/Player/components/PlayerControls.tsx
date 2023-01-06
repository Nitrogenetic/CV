import cls from 'classnames'
import React, { memo, useState } from 'react'
import { useTheme } from '~hooks'
import * as Icon from '~icons'
import { Children, ClassName } from '~types'
import { PlayerType } from '~ui'
import { ConditionalRender } from '~ux'
import PlayerProgressSlider from './PlayerProgressSlider'
import PlayerVolumeSlider from './PlayerVolumeSlider'

export interface PlayerControlsProps {
  className?: ClassName
  type?: PlayerType
  playing: boolean
  volume?: string
  muted?: boolean
  playedSeconds?: number
  duration: number
  rate?: number
  removeButton?: Children
  onPlayClick?: () => void
  onRemoveClick?: () => void
  onChangeVolumeStep?: (value: string) => void
  onMutedVolume?: (value: boolean) => void
  onProgressChange?: (value: number) => void
  onPlaybackRate?: (value: boolean) => void
}

const PlayerControls: React.FC<PlayerControlsProps> = props => {
  const {
    className,
    type = 'default',
    playing,
    volume = '0',
    muted = false,
    duration = 0,
    rate = 1,
    playedSeconds = 0,
    onPlayClick = () => null,
    onChangeVolumeStep = () => null,
    onMutedVolume = () => null,
    onProgressChange = () => null,
    onPlaybackRate = () => null,
    removeButton
  } = props

  const [viewVolumeLine, setViewVolumeLine] = useState<boolean>(false)

  const { theme } = useTheme()

  let thisTimeHours, thisTimeMinutes, thisTimeSeconds, durationTimeHours, durationTimeMinutes, durationTimeSeconds

  if (!duration && !playedSeconds) {
    thisTimeHours =
      thisTimeMinutes =
      thisTimeSeconds =
      durationTimeHours =
      durationTimeMinutes =
      durationTimeSeconds =
        0
  } else {
    thisTimeHours = Math.trunc(playedSeconds / 60 / 60)
    durationTimeHours = Math.trunc(duration / 60 / 60)
    thisTimeMinutes = Math.trunc(playedSeconds / 60) - thisTimeHours * 60
    durationTimeMinutes = Math.trunc(duration / 60) - durationTimeHours * 60
    thisTimeSeconds = Math.trunc(playedSeconds % 60)
    durationTimeSeconds = Math.trunc(duration % 60)
  }

  const formattedThisHours = thisTimeHours.toString().padStart(2, '0')
  const formattedThisMin = thisTimeMinutes.toString().padStart(2, '0')
  const formattedThisSec = thisTimeSeconds.toString().padStart(2, '0')

  const formattedThisTime = durationTimeHours
    ? [formattedThisHours, formattedThisMin, formattedThisSec].join(':')
    : [formattedThisMin, formattedThisSec].join(':')

  const formattedDurationHours = durationTimeHours.toString().padStart(2, '0')
  const formattedDurationMin = durationTimeMinutes.toString().padStart(2, '0')
  const formattedDurationSec = durationTimeSeconds.toString().padStart(2, '0')

  const formattedDurationTime = durationTimeHours
    ? [formattedDurationHours, formattedDurationMin, formattedDurationSec].join(':')
    : [formattedDurationMin, formattedDurationSec].join(':')

  const handleViewVolumeLine = () => setViewVolumeLine(!viewVolumeLine)

  const booleanRate = rate === 2

  return (
    <div className={cls('flex flex-col w-full', className)}>
      <PlayerProgressSlider duration={duration} playedSeconds={playedSeconds} onProgressChange={onProgressChange} />
      <div
        className={cls('flex items-center justify-between w-full h-36 px-16 py-10', {
          'bg-rgba-6': type === 'video'
        })}
      >
        <div className={'flex items-center text-white cursor-pointer'}>
          <div>
            {playing && (
              <Icon.Pause
                className={cls('w-16 h-16 mr-10 hover:scale-105', {
                  'text-violet-2': type === 'audio' && theme === 'light'
                })}
                onClick={onPlayClick}
              />
            )}
            {!playing && (
              <Icon.Play
                className={cls('w-16 h-16 mr-10 hover:scale-105', {
                  'text-violet-2': type === 'audio' && theme === 'light'
                })}
                onClick={onPlayClick}
              />
            )}
          </div>
          <div className={cls('text-10 font-bold', { 'text-neutral-4': type === 'audio' && theme === 'light' })}>
            <ConditionalRender condition={!!formattedDurationTime} otherwise={formattedThisTime}>
              {formattedThisTime} / {formattedDurationTime}
            </ConditionalRender>
          </div>
        </div>
        <div className={'flex items-center text-white'}>
          <div
            className={cls(
              'flex items-center',
              { 'mr-6': viewVolumeLine },
              { 'mr-14': !viewVolumeLine },
              { 'text-violet-2': type === 'audio' && theme === 'light' }
            )}
          >
            <div onMouseEnter={handleViewVolumeLine}>
              <Icon.Volume
                className={cls('w-16 h-16 hover:scale-105', { 'text-red-1': muted }, { 'mr-6': viewVolumeLine })}
                onClick={() => onMutedVolume(!muted)}
              />
            </div>
            {viewVolumeLine && <PlayerVolumeSlider volume={volume} onChangeVolumeStep={onChangeVolumeStep} />}
          </div>
          <Icon.DoubleSpeed
            className={cls(
              'w-16 h-16 cursor-pointer hover:scale-105',
              { 'text-neutral-4': type === 'audio' && theme === 'light' },
              { 'text-violet-2': booleanRate, 'mr-14': removeButton && type === 'audio' }
            )}
            onClick={() => onPlaybackRate(!booleanRate)}
          />
          {type === 'audio' && removeButton}
        </div>
      </div>
    </div>
  )
}

export default memo(PlayerControls)
