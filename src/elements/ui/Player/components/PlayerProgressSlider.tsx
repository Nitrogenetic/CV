import React, { memo, useLayoutEffect, useRef, useState } from 'react'
import cls from 'classnames'
export interface PlayerVolumeSliderProps {
  duration: number
  playedSeconds: number
  onProgressChange?: (value: number) => void
}

const PlayerProgressSlider: React.FC<PlayerVolumeSliderProps> = props => {
  const { duration, playedSeconds, onProgressChange = () => null } = props

  const [progressWidth, setProgressWidth] = useState(0)
  const scaleRef = useRef<HTMLInputElement | null>(null)

  useLayoutEffect(() => {
    if (scaleRef && scaleRef.current) {
      const scaleRefWidth = scaleRef.current.offsetWidth
      const scaleStepWidth = scaleRefWidth / duration
      setProgressWidth(scaleStepWidth * playedSeconds)
    }
  }, [playedSeconds, scaleRef])

  return (
    <>
      <input
        ref={scaleRef}
        className={'relative h-2 m-0 p-0 cursor-pointer'}
        type="range"
        min="0"
        max={duration}
        step="1"
        value={playedSeconds}
        onChange={e => onProgressChange(+e.target.value)}
      />
      <div
        className={cls('cursor-pointer absolute h-2 bg-violet-2 z-4', { [`w-${progressWidth}px`]: progressWidth })}
      ></div>
    </>
  )
}

export default memo(PlayerProgressSlider)
