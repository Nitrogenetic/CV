import React, { memo } from 'react'
import * as Icon from '~icons'
import 'emoji-mart/css/emoji-mart.css'
import { Picker, emojiIndex, EmojiData } from 'emoji-mart'
import cls from 'classnames'
import { ClassName } from '~types'

type EmojiPickerProps = {
  className?: ClassName
  onChange(value: string): void
  setRandomEmoji?(value: string): void
}

export const EmojiPicker: React.FC<EmojiPickerProps> = memo(props => {
  const { className, onChange, setRandomEmoji = onChange } = props

  const allEmoji = Object.values(emojiIndex.emojis)

  const handleGetRandomEmoji = () => {
    const randomEmojiNumber = Math.floor(Math.random() * allEmoji.length)
    const isOneEmoji = 'id' in allEmoji[randomEmojiNumber]
    if (isOneEmoji) {
      return allEmoji[randomEmojiNumber]
    }

    const arrayOfEmojis = Object.values(allEmoji[randomEmojiNumber])
    const arrayOfEmojisLength = Object.keys(allEmoji[randomEmojiNumber]).length
    const randomNumberInArrayOfEmojis = Math.floor(Math.random() * arrayOfEmojisLength)
    return arrayOfEmojis[randomNumberInArrayOfEmojis]
  }

  return (
    <div className={cls('flex flex-col bg-[#222] rounded-5', className)}>
      <div className={'flex flex-grow justify-end p-10 border-b-[1px] border-[#555453]'}>
        <div
          onClick={() => {
            setRandomEmoji(handleGetRandomEmoji().native)
          }}
          className={'flex items-center cursor-pointer text-white w-fit'}
        >
          <Icon.Smile className={'w-16 h-16 mr-5'} />
          <p>Random</p>
        </div>
      </div>
      <Picker
        showPreview={false}
        emoji={''}
        showSkinTones={false}
        title={''}
        style={{ border: 'none' }}
        theme={'dark'}
        onSelect={(emoji: EmojiData & { native: string }) => {
          onChange(emoji.native)
        }}
      />
    </div>
  )
})

EmojiPicker.displayName = 'EmojiPicker'
