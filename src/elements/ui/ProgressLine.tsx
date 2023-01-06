import React, { memo, useState, useEffect, FC } from 'react'
export interface ProgressLineProps {
  scaleDivisions: number
  filledDivisions: number
}

const ProgressLine: FC<ProgressLineProps> = memo(props => {
  const { scaleDivisions, filledDivisions } = props
  const [filledDivisionsWidth, setFilledDivisionsWidth] = useState<number>(0)
  const [currentColorShade, setCurrentColorShade] = useState<string>('#443446')

  useEffect(() => {
    const divisionWidth = 100 / scaleDivisions
    setFilledDivisionsWidth(Math.round(divisionWidth * filledDivisions))
  }, [filledDivisions])

  useEffect(() => {
    const percentage = Math.trunc((filledDivisions / scaleDivisions) * 100)
    if (percentage && percentage <= 25) {
      setCurrentColorShade('#F92D7A')
    }
    if (percentage > 25 && percentage <= 75) {
      setCurrentColorShade('#F15590')
    }
    if (percentage > 75) {
      setCurrentColorShade('#FA96BB')
    }
  }, [filledDivisionsWidth])

  return (
    <>
      <div className={'bg-primary-6 rounded-4 h-12'}>
        <div
          className={'h-full rounded-4'}
          style={{ width: filledDivisionsWidth + '%', background: currentColorShade }}
        />
      </div>
    </>
  )
})

ProgressLine.displayName = 'ProgressLine'

export { ProgressLine }
