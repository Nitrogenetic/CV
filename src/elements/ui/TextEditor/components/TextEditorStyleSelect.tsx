import { Listbox, Transition } from '@headlessui/react'
import React, { FC, useState } from 'react'
import * as Icon from '~icons'
import { OrchestraSelect } from '~ui'
import { ClassName } from '~types'
import './styleOptions.css'

import cls from 'classnames'

interface TextEditorStyleSelectProps {
  className?: ClassName
}

export const TextEditorStyleSelect: FC<TextEditorStyleSelectProps> = props => {
  const { className } = props

  const GetIcon = ({ value }) => {
    switch (value) {
      case 'text':
        return <Icon.IconT />
      case 'heading-1':
        return <Icon.Placeholder />
      case 'heading-2':
        return <Icon.Placeholder />
      case 'heading-3':
        return <Icon.Placeholder />
      case 'bulleted-list':
        return <Icon.BulletedList />
      case 'numbered-list':
        return <Icon.NumberedList />
    }
  }

  return (
    <div className="style-select">
      <select className={cls('ql-header', className)} defaultValue={'3'} onChange={e => e.persist()}>
        {TEXT_OPTIONS.map(option => {
          // const isSelected = option.value === selected
          return (
            <option key={option.value} value={option.value}>
              {/* <div
                onClick={() => onSelect(option.value)}
                className={cls(
                  'flex items-center px-12 py-6 text-14 rounded-8 text-gray-80  font-semibold hover:bg-gray-20',
                  {
                    'bg-gray-100 text-gray-10 hover:bg-gray-90': isSelected
                  }
                )}
              >
                <div
                  className={cls('flex justify-center w-20 mr-8 text-gray-80', {
                    'text-gray-10': isSelected
                  })}
                >
                  <GetIcon value={option.value} />
                </div> */}
              {option.label}
              {/* <span className="mr-auto min-w-168">{option.label}</span>
              {isSelected && <Icon.OrchestraCheck />} */}
              {/* </div> */}
            </option>
          )
        })}
      </select>
    </div>
  )
}

TextEditorStyleSelect.displayName = 'TextEditorStyleSelect'

const TEXT_OPTIONS = [
  { value: '3', label: 'Text' },
  { value: '1', label: 'Heading 1' },
  { value: '2', label: 'Heading 2' }
  // { value: '3', label: 'Heading 3' }
  // { value: 'bulleted-list', label: 'Bulleted list' },
  // { value: 'numbered-list', label: 'Numbered list' }
]
