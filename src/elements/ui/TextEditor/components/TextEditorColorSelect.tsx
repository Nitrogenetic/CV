import React, { FC } from 'react'
import { ClassName } from '~types'
import './colorOptions.css'

import cls from 'classnames'

interface TextEditorColorSelectProps {
  className?: ClassName
}

export const TextEditorColorSelect: FC<TextEditorColorSelectProps> = props => {
  const { className } = props

  return (
    <div className="color-select">
      <select className={cls('ql-color', className)}>
        {COLOR_OPTIONS.map(option => {
          return <option key={option.value} value={option.value} />
        })}
      </select>
    </div>
  )
}

TextEditorColorSelect.displayName = 'TextEditorColorSelect'

const COLOR_OPTIONS = [
  { value: 'red', label: 'red' },
  { value: 'green', label: 'green' },
  { value: 'blue', label: 'blue' },
  { value: 'orange', label: 'orange' },
  { value: 'violet', label: 'violet' },
  { value: '#0d1d2', label: '#0d1d2' }
]
