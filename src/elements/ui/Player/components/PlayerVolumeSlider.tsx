import React, { memo } from 'react'

export interface PlayerVolumeSliderProps {
  volume: string
  onChangeVolumeStep?: (value: string) => void
}

const PlayerVolumeSlider: React.FC<PlayerVolumeSliderProps> = props => {
  const { volume, onChangeVolumeStep = () => null } = props

  return (
    <input
      style={{
        width: '40px',
        height: '2px',
        backgroundColor: 'white'
      }}
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={e => onChangeVolumeStep(e.target.value)}
    />
  )
}

export default memo(PlayerVolumeSlider)
