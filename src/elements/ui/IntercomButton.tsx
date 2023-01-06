import { FC, memo, useEffect, useState } from 'react'
import cls from 'classnames'
import * as Icon from '~icons'
import { ClassName, Children } from '~types'
import { useIntercom } from 'react-use-intercom'
import { ConditionalRender } from '../ux/ConditionalRender'

interface IntercomButtonProps {
  className?: ClassName
  isDefaultPosition?: boolean
  isDefaultClassName?: boolean
  isOpened?: boolean
  children?: Children
  onClick?: () => void
}

const IntercomButton: FC<IntercomButtonProps> = memo(props => {
  const { className, isDefaultPosition = true, isDefaultClassName = true, onClick, isOpened = false, children } = props

  const { boot, shutdown, hide, show, update } = useIntercom()
  const [opened, setOpened] = useState(isOpened)

  useEffect(() => {
    boot()
  }, [])

  const handleIntercomButtonClick = () => {
    onClick && onClick()
    if (opened) {
      // hide() //feature
      show()
      setOpened(false)
      return
    }
    show()
    setOpened(true)
    return
  }

  return (
    <div
      className={cls(
        { 'w-60 h-60 bg-[#F92D7A] rounded-full cursor-pointer hover:bg-[#C92362]': isDefaultClassName },
        { 'fixed bottom-30 right-30': isDefaultPosition },
        className
      )}
      onClick={handleIntercomButtonClick}
    >
      <ConditionalRender condition={!children} otherwise={children}>
        <ConditionalRender
          condition={false}
          // condition={opened} //feature
          otherwise={<Icon.Communication className={'absolute-center w-25 h-25 fill-white'} />}
        >
          <Icon.ArrowChevronDown className={'absolute-center w-17 h-10 fill-white'} />
        </ConditionalRender>
      </ConditionalRender>
    </div>
  )
})

IntercomButton.displayName = 'IntercomButton'

export { IntercomButton }
