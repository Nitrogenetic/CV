import React, { forwardRef, memo, useEffect, useLayoutEffect, useState } from 'react'
import { TextInput, TextInputProps } from '~ui'
import { ListBox } from '~ux'
import { Children, ClassName, OptionType } from '~types'

export interface MultiSelectProps {
  className?: ClassName
  name: string
  value: string[]
  options: OptionType[]
  loading?: boolean
  defaultSelected?: OptionType[]
  onChange: (value: string[], option?: OptionType) => void
  onInputChange?(value: string): void
  onSelectedOptionRender: (props: { onOptionRemove: (value: string) => void }, option: OptionType) => Children
  onOptionRender?: (option: OptionType) => Children
  textInputProps?: Omit<TextInputProps, 'name' | 'value' | 'onChange' | 'onClick'>
}

const MultiSelect = memo(
  forwardRef<HTMLInputElement, MultiSelectProps>((props, ref) => {
    const {
      className,
      name,
      value,
      options,
      loading,
      onChange,
      onSelectedOptionRender,
      onOptionRender,
      onInputChange,
      textInputProps,
      defaultSelected
    } = props

    const [show, onShow] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>(defaultSelected || [])
    const [filteredOptions, setFilteredOptions] = useState(options)
    const [autocompletedOptions, setAutocompletedOptions] = useState(options)
    const [textInputValue, setTextInputValue] = useState('')

    useEffect(() => {
      if (!value.length && !defaultSelected) setSelectedOptions([])
    }, [value, defaultSelected])

    useLayoutEffect(() => {
      if (!defaultSelected?.length) {
        const initialSelectedOptions = value.map(v => options.find(option => option?.value === v) as OptionType)
        setSelectedOptions(initialSelectedOptions)
      }
    }, [])

    useEffect(() => {
      if (!value) return

      const initialSelectedOptions = value.map(v => options.find(option => option?.value === v) as OptionType)
      setSelectedOptions(initialSelectedOptions)
    }, [value.length])

    const filterOptionsEffect = () =>
      setFilteredOptions(
        options.filter(option => !selectedOptions.find(selectedOption => option?.value === selectedOption?.value))
      )

    const autocompleteOptionsEffect = () => {
      setAutocompletedOptions(
        filteredOptions.filter(option => option.label.toLowerCase().includes(textInputValue.toLowerCase()))
      )
    }
    useEffect(filterOptionsEffect, [selectedOptions, options])
    useEffect(autocompleteOptionsEffect, [textInputValue, filteredOptions, options])

    const handleOptionRemove = (optionValue: string) => {
      setSelectedOptions(prevOptions => {
        const newOptions = prevOptions.filter(user => user.value !== optionValue)
        onChange(newOptions.map(option => option.value))
        return newOptions
      })
    }
    const handleTextInputChange = (value: string) => {
      setTextInputValue(value)
      onInputChange && onInputChange(value)
    }
    const handleListBoxChange = (value: string[]) => {
      const selectedOption = value.length ? options.find(option => option.value === value[value.length - 1]) : null

      if (selectedOption) {
        onInputChange && onInputChange('')
        onChange(value, selectedOption)
        setTextInputValue('')
        setSelectedOptions(prevOptions => [...prevOptions, selectedOption])
      } else {
        setTextInputValue('')
        onInputChange && onInputChange('')
        onChange([])
        setSelectedOptions([])
      }
    }

    return (
      <ListBox
        className={className}
        show={show}
        value={value}
        options={autocompletedOptions}
        onChange={v => handleListBoxChange(v as string[])}
        onHide={onShow}
        renderOption={onOptionRender}
      >
        <TextInput
          className={{ ring: show }}
          name={name}
          value={textInputValue}
          kind={'primary'}
          tabIndex={0}
          onChange={({ currentTarget: { value } }) => handleTextInputChange(value)}
          onFocus={() => onShow(true)}
          autoComplete={'off'}
          loading={loading}
          {...textInputProps}
          prefix={
            <div className={'inline-flex flex-wrap'}>
              {textInputProps?.prefix || null}
              {selectedOptions.map(option => onSelectedOptionRender({ onOptionRemove: handleOptionRemove }, option))}
            </div>
          }
        />
      </ListBox>
    )
  })
)

MultiSelect.displayName = 'MultiSelect'

export { MultiSelect }
