import React, { FC, memo, useEffect, useRef } from 'react'
import { ClassName } from '~types'
import cls from 'classnames'

export interface RadiantFullIndicatorProps {
  className: ClassName
  filledDivisions: number
}

const RadiantFullIndicator: FC<RadiantFullIndicatorProps> = memo(props => {
  const { className, filledDivisions = 0, ...otherProps } = props

  const targetRef = useRef<SVGCircleElement | null>(null)

  const RADIUS = 13
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS

  useEffect(() => {
    const progress = filledDivisions / 100
    const dashoffset = CIRCUMFERENCE * (1 - progress)
    if (targetRef.current) {
      const circle = targetRef.current
      circle.style.strokeDashoffset = String(dashoffset)
      circle.style.strokeDasharray = String(CIRCUMFERENCE)
    }
  }, [filledDivisions])

  return (
    <>
      <svg className={cls('stroke-current transform -rotate-90', className)} viewBox="0 0 28 28" {...otherProps}>
        <circle cx="14" cy="14" r="13" strokeWidth="2" stroke="transparent" fill="none" />
        <circle ref={targetRef} cx="14" cy="14" r="13" strokeWidth="2" strokeLinecap="round" stroke="" fill="none" />
      </svg>
    </>
  )
})

RadiantFullIndicator.displayName = 'RadiantFullIndicator'

export { RadiantFullIndicator }
