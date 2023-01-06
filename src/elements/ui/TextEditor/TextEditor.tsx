import React, { FC, useEffect, useRef, useState } from 'react'
import * as Icon from '~icons'
import { ClassName } from '~types'
import cls from 'classnames'
import { TextEditorColorSelect, TextEditorStyleSelect } from './components'
import { useClickAway } from 'react-use'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { ConditionalRender } from '~ux'

interface TextEditorProps {
  className?: ClassName
  toolbarClassName?: ClassName
  inputAreaClassName?: ClassName
  value: string

  setValue(value: string): void
}

export const TextEditor: FC<TextEditorProps> = props => {
  const { className, toolbarClassName, inputAreaClassName, value, setValue } = props

  const [show, setShow] = useState(false)

  const areaRef = useRef(null)
  useClickAway(areaRef, () => setShow(false))

  const editor = document.getElementsByClassName('ql-editor')

  return (
    <div className={cls('w-full', className)} ref={areaRef}>
      <ConditionalRender
        condition={show}
        otherwise={
          <div
            onClick={() => setShow(true)}
            className={cls(
              'w-full bg-inherit h-40 py-10 px-12 inline-flex items-center rounded-8 cursor-text',
              'overflow-hidden orchestra-blue-ring hover:bg-gray-20',
              inputAreaClassName
            )}
          >
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
          </div>
        }
      >
        <div id="toolbar" className={cls('!p-0 !border-none', { 'opacity-50': !show }, { 'opacity-100': show })}>
          <div
            className={cls(
              'cursor-text font-bold text-14 text-gray-90 p-8 flex items-center bg-white shadow-xl border border-gray-20 rounded-12',
              toolbarClassName
            )}
          >
            <TextEditorStyleSelect />
            <div className="h-32 border-r border-gray-20 mr-6" />
            <div className="flex items-center h-40 px-10 mr-6 cursor-pointer rounded-12 hover:bg-gray-30">
              <Icon.CopyLink className={'h-16 w-16 mr-6'} />
              <span className="text-14 font-bold">Link</span>
            </div>
            <div className="h-32 border-r border-gray-20 mr-6" />
            <div className="flex items-center space-x-6 mr-6">
              <button
                className={
                  'ql-bold !flex !items-center !justify-center !rounded-8 !h-40 !w-40 !cursor-pointer !hover:bg-gray-30 !children:h-20'
                }
              >
                <Icon.IconB className={'h-15'} />
              </button>
              <button
                className={
                  'ql-italic !flex !items-center !justify-center !rounded-8 !h-40 !w-40 !cursor-pointer !hover:bg-gray-30 !children:h-20'
                }
              >
                <Icon.IconI className={'h-15'} />
              </button>
              <button
                className={
                  'ql-underline !flex !items-center !justify-center !rounded-8 !h-40 !w-40 !cursor-pointer !hover:bg-gray-30 !children:h-20'
                }
              >
                <Icon.IconU className={'h-16'} />
              </button>
              <button
                className={
                  'ql-strike !flex !items-center !justify-center !rounded-8 !h-40 !w-40 !cursor-pointer !hover:bg-gray-30 !children:h-20'
                }
              >
                <Icon.IconS className={'h-16'} />
              </button>
            </div>
            <div className="h-32 border-r border-gray-20 mr-6" />
            <TextEditorColorSelect />
          </div>
        </div>

        <div
          className={cls(
            'w-full bg-inherit inline-flex items-center rounded-8 cursor-pointer',
            'overflow-hidden orchestra-blue-ring hover:bg-gray-20 children:w-full !children:p-0',
            '!children:!children:border-none !children:!children:children:py-10 !children:!children:children:px-12',
            inputAreaClassName
          )}
        >
          <ReactQuill
            value={value}
            onChange={setValue}
            className="w-full"
            modules={{
              toolbar: {
                container: '#toolbar'
              },
              clipboard: {
                matchVisual: false
              }
            }}
            theme={'snow'}
          />
        </div>
      </ConditionalRender>
    </div>
  )
}

TextEditor.displayName = 'TextEditor'
