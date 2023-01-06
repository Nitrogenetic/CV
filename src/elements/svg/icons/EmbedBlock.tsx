import React, { memo } from 'react'
import { IconProps } from '~icons'

export const EmbedBlock = memo(() => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" rx="4" fill="url(#pattern0)" />
      <rect width="20" height="20" rx="4" fill="url(#pattern1)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_3724_81829" transform="scale(0.00434783)" />
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_3724_81829" transform="scale(0.00434783)" />
        </pattern>
        <image id="image0_3724_81829" width="230" height="230" />
        <image id="image1_3724_81829" width="230" height="230" />
      </defs>
    </svg>
  )
})

EmbedBlock.displayName = 'StageBlock'
