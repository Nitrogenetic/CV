import React, { useRef, useState } from 'react'
import { Children, ClassName, OptionType } from '~types'
import cls from 'classnames'
import { Listbox } from '@headlessui/react'
import { useClickAway } from 'react-use'
import { Popover } from '~ux'
import * as Icon from '~icons'
export interface OrchestraSelectProps {
  options: OptionType[]
  optionClassName?: ClassName
  optionsClassName?: ClassName
  title?: string
  titleClassName?: string
  selected: string
  className?: ClassName
  transitionClassName?: ClassName
  defaultShow?: boolean
  closeDropdownOnSelect?: boolean
  containerPopoverStyle?: Partial<CSSStyleDeclaration>

  renderLabel?(): Children
  renderOption?(option: OptionType): Children
  onSelect(value: string, optionValue?: OptionType): void
  onHide?(): void
  onOpen?(): void
}

export const OrchestraSelect: React.FC<OrchestraSelectProps> = props => {
  const {
    options,
    optionClassName,
    title,
    titleClassName,
    selected,
    className,
    optionsClassName,
    defaultShow = false,
    renderLabel,
    renderOption,
    onSelect,
    closeDropdownOnSelect = false,
    onHide = () => null,
    onOpen = () => null,
    containerPopoverStyle = {}
  } = props
  const [show, setShow] = useState(defaultShow)
  const selectedOption = options.find(option => option.value === selected)

  const divRef = useRef<HTMLDivElement>(null)
  useClickAway(divRef, () => {
    setShow(false)
    onHide()
  })

  const toggleDropdown = () => {
    if (show) onHide()
    if (!show) onOpen()

    setShow(!show)
  }
  const handleSelect = (value: string) => {
    const optionValue = options.find(option => option.value === value)
    console.log('=> value', value)

    onSelect(value, optionValue)
    if (closeDropdownOnSelect) {
      setShow(false)
    }
  }

  return (
    <div className={cls(className)}>
      <Listbox value={selected} onChange={handleSelect}>
        <Popover
          show={show}
          reposition={true}
          position={['bottom', 'left', 'right', 'top']}
          align={'start'}
          padding={4}
          containerStyle={containerPopoverStyle}
          panel={
            <div className="relative" ref={divRef}>
              <Listbox.Options
                className={cls(
                  'space-y-4 w-fit p-8 rounded-8 shadow-select bg-white border-b-2 border-gray-20',
                  optionsClassName
                )}
              >
                {options.map(option => (
                  <Listbox.Option key={option.value} className={'cursor-pointer'} value={option.value}>
                    {({ selected }) => {
                      if (renderOption) {
                        renderOption(option)
                      }

                      return (
                        <div
                          className={cls(
                            'flex items-center px-12 py-6 text-14 rounded-8 text-gray-80  font-semibold',
                            { 'bg-gray-100 text-gray-10': selected },
                            optionClassName
                          )}
                        >
                          <span className="mr-auto min-w-168">{option.label}</span>
                          {selected && <Icon.OrchestraCheck />}
                        </div>
                      )
                    }}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
              {/*</Transition>*/}
            </div>
          }
        >
          <div onClick={toggleDropdown}>
            {renderLabel ? (
              renderLabel()
            ) : (
              <div
                className={cls(
                  'flex items-center space-x-14 text-12 text-gray-100 font-semibold w-fit cursor-pointer',
                  titleClassName
                )}
              >
                <span>
                  {title}
                  {selectedOption?.label}
                </span>
                <Icon.ArrowChevronDownFilled />
              </div>
            )}
          </div>
        </Popover>
      </Listbox>
    </div>
  )
}

OrchestraSelect.displayName = 'OrchestraSelect'
