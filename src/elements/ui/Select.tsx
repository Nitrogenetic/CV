import { forwardRef, memo, useEffect, useState } from 'react'
import { TextInput, TextInputProps } from '~ui'
import { ListBox, ListBoxProps } from '~ux'
import cls from 'classnames'
import { Children, ClassName, OptionType } from '~types'

export interface SelectProps {
  className?: ClassName
  inputClassName?: ClassName
  optionsClassName?: ClassName
  label?: string
  labelClassName?: string
  name: string
  value: string | number
  options: OptionType[]
  listBoxProps?: Pick<ListBoxProps, 'optionClassName' | 'optionsClassName'>
  textInputProps?: Omit<TextInputProps, 'name' | 'value' | 'onChange'>
  isInputSearchable?: boolean
  onOptionRender?: (option: OptionType) => Children
  onChange: (value: string) => void
}

const Select = memo(
  forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
    const {
      optionsClassName,
      inputClassName,
      className,
      name,
      value,
      options,
      onChange,
      onOptionRender,
      textInputProps,
      listBoxProps,
      label,
      labelClassName,
      isInputSearchable
    } = props
    const [show, onShow] = useState(false)

    const [textInputValue, setTextInputValue] = useState<string>('')

    const [textSearch, setTextSearch] = useState<string | null>(null)
    const [searchedOptions, setSearchedOptions] = useState<OptionType[]>(options)

    useEffect(() => {
      if (isInputSearchable) {
        textSearch &&
          setSearchedOptions(options.filter(option => option.label.toLowerCase().includes(textSearch.toLowerCase())))
        !textSearch && setSearchedOptions(options)
      }
    }, [textSearch])

    useEffect(() => {
      const option = searchedOptions.find(option => option.value === value)

      if (option) {
        setTextInputValue(option.label)
      } else {
        setTextInputValue('')
      }
    }, [value])

    const handleListBoxChange = (value: string) => {
      const option = searchedOptions.find(option => option.value === value)

      if (option) {
        setTextInputValue(option.label)
        onChange(value)
      } else {
        setTextInputValue('')
        onChange('')
      }

      setTextSearch(null)
      onShow(false)
    }

    return (
      <ListBox
        childrenClassName={inputClassName}
        optionsClassName={cls(optionsClassName)}
        className={className}
        show={show}
        value={value + ''}
        options={searchedOptions}
        onChange={v => handleListBoxChange(v as string)}
        renderOption={onOptionRender}
        onHide={onShow}
        {...listBoxProps}
      >
        <div>
          {label && (
            <label htmlFor={name} className={labelClassName}>
              {label}
            </label>
          )}
          <TextInput
            className={{ ring: show }}
            wrapperClassName={'px-4'}
            name={name}
            ref={ref}
            value={textSearch === null ? textInputValue : textSearch}
            kind={'primary'}
            tabIndex={0}
            onChange={e => isInputSearchable && setTextSearch(e.target.value)}
            onFocus={() => onShow(true)}
            onClick={() => onShow(true)}
            autoComplete={'off'}
            placeholder={'Select an option...'}
            {...textInputProps}
          />
        </div>
      </ListBox>
    )
  })
)

Select.displayName = 'Select'

export { Select }
