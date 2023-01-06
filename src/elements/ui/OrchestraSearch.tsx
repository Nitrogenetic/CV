import React, { forwardRef, memo, RefObject, useEffect, useRef, useState } from 'react'
import cls from 'classnames'
import { Children, ClassName } from "~types";
import { ConditionalRender, ListBox } from '~ux'
import * as Icon from '~icons'
import { OrchestraTextInput } from './OrchestraTextInput'
import { useClickAway } from 'react-use'
import { TransitionRenderProps } from '../ux/TransitionRender'

export type SearchOptionType = {
  value: string
  label: string
  image?: string
}

export type HtmlInputProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className' | 'ref' | 'prefix' | 'value'
>
export interface OrchestraSearchProps extends HtmlInputProps {
  options: SearchOptionType[]
  inputValue: string
  name?: string
  className?: ClassName
  iconName?: Icon.AllIconNames
  iconClassName?: ClassName
  disabled?: boolean
  loading?: boolean
  optionsClassName?: ClassName
  suffixes?: Children[]

  onPressEnter?(): void
  onInputChange(value: string): void
  renderItem?(value: SearchOptionType): JSX.Element
  onItemSelect?(value: string): void
}

export const OrchestraSearch = memo(
  forwardRef<HTMLDivElement, OrchestraSearchProps>((props, ref) => {
    const {
      name,
      className,
      options,
      iconName,
      iconClassName,
      optionsClassName,
      disabled = false,
      renderItem,
      onItemSelect,
      inputValue,
      onInputChange,
      loading,
      onPressEnter,
      ...rest
    } = props

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      setIsOpen(!!inputValue)
    }, [inputValue])

    const transiotionRef = useRef(null)
    useClickAway(transiotionRef as RefObject<HTMLDivElement>, () => {
      setIsOpen(false)
    })

    const renderIcon = () => {
      const CurrentIcon = Icon[iconName]
      const iconDefaultStyles = 'w-22 h-22'

      return CurrentIcon ? <CurrentIcon className={cls(iconDefaultStyles, iconClassName)} /> : null
    }

    return (
      <div className={cls('relative w-full', className)}>
        <ListBox
          onHide={setIsOpen}
          onChange={onItemSelect}
          options={options}
          show={isOpen}
          value={inputValue}
          optionsClassName={cls(optionsClassName)}
          renderOption={option => {
            if (renderItem) renderItem(option)
            return (
              <div className={cls('cursor-pointer p-4 hover:bg-gray-20 rounded-8')}>
                <div className={'flex space-x-8 items-center'}>
                  <ConditionalRender
                    condition={!!option.image}
                    otherwise={<div className={'min-h-32 min-w-32 rounded-8 border-1 border-dotted border-black'} />}
                  >
                    <img src={option.image} className={'h-32 w-32 rounded-8'} />
                  </ConditionalRender>
                  <span className="text-12 text-gray-100 font-bold truncate">{option?.label}</span>
                </div>
              </div>
            )
          }}
        >
          <OrchestraTextInput
            onMouseDown={() => inputValue && setIsOpen(true)}
            onKeyDown={e => {
              if (e.key === 'Enter' && onPressEnter) onPressEnter()
            }}
            prefix={renderIcon()}
            suffixes={[<Icon.Close onClick={() => onInputChange('')} key="close" className={'h-20 w-20'} />]}
            name={name || 'search'}
            value={inputValue}
            onChange={e => onInputChange(e.target.value)}
            disabled={disabled}
            {...rest}
          />
        </ListBox>
      </div>
    )
  })
)

OrchestraSearch.displayName = 'OrchestraSearch'
