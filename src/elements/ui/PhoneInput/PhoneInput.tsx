import React, { forwardRef, memo, useCallback, useEffect, useState } from 'react'
import { OptionType } from '~types'
import { HtmlInputProps, TextInput } from '~ui'
import { countryFlagsArray, countryPhonesArray, phoneNumberPattern } from '~utils'
import { ListBox } from '~ux'
import cls from 'classnames'
import * as Icon from '~icons'
interface PhoneInputProps extends Omit<HtmlInputProps, 'value' | 'onChange' | 'ref'> {
  name: string
  currentAnswer: string
  readonly?: boolean
  onChange: (value: string) => void
}

export type CountryTypeValue = typeof countryFlagsArray[number]['value']

export const PhoneInput = memo(
  forwardRef<HTMLInputElement, PhoneInputProps>((props, ref) => {
    const { name, currentAnswer, readonly, onChange, ...rest } = props

    const basicCountryState = countryFlagsArray.find(country => country.value === 'United States')?.value || null

    const [value, setValue] = useState<string>(currentAnswer.split(' ')[2] || '')
    const [showPhoneList, setShowPhoneList] = useState(false)
    const [currentCountryValue, setCurrentCountryValue] = useState<CountryTypeValue | null>(basicCountryState)

    const currentCountryFlag = countryFlagsArray.find(country => country.value === currentCountryValue)

    const currentCountryPhoneCode =
      countryPhonesArray.find(country => {
        return country.value === currentCountryValue
      })?.label || '+1'

    const setValidPhoneValue = (value: string) => {
      let validValue = value
      const firstThreeNumbers = value.slice(0, 3)
      const secondThreeNumbers = value.slice(4, 7)
      if (value.length >= 8) {
        validValue = firstThreeNumbers + '-' + secondThreeNumbers + '-' + value.slice(8)
      } else if (value.length >= 4) {
        validValue = firstThreeNumbers + '-' + value.slice(4)
      }
      return validValue
    }

    const handleChangeValue = (value: string) => {
      const validValue = setValidPhoneValue(value)
      setValue(validValue)
    }

    const handleChangeCountry = useCallback((value: string) => {
      setCurrentCountryValue(value)
      setShowPhoneList(false)
    }, [])

    useEffect(() => {
      const phone = setValidPhoneValue(value)
      const fullPhoneNumber = currentCountryPhoneCode + ' ' + phone
      if (phoneNumberPattern.test(phone) && phone.length === 12) onChange(fullPhoneNumber)
      else if (!!currentAnswer && phone.length < 12) onChange('')
    }, [value])

    const countryOption = ({ label, value }: OptionType) => {
      return (
        <>
          <span className={'flex justify-center items-center rounded-7 mr-8 text-28'}>{label}</span>
          <span className={'text-14 text-neutral-4'}>{value.slice(0, 1).toUpperCase() + value.slice(1)}</span>
        </>
      )
    }

    return (
      <TextInput
        ref={ref}
        type={'text'}
        maxLength={12}
        name={!readonly ? name : 'phone input answer'}
        className={cls('mb-20 z-20 overflow-visible', {
          'z-30': showPhoneList
        })}
        value={value}
        wrapperClassName={cls('px-5', { 'px-0': !readonly })}
        kind={!readonly ? 'light' : 'primary'}
        placeholder={'000 000 0000'}
        onChange={e => (!readonly ? handleChangeValue(e.target.value) : null)}
        prefixClassName={'flex items-center space-x-24 w-fit pl-10'}
        prefix={
          <>
            <ListBox
              value={currentCountryValue}
              show={showPhoneList}
              theme={!readonly ? 'light' : 'neutral'}
              optionsClassName={'top-60 -left-24 w-188 h-200'}
              optionClassName={'flex items-center py-0 px-10'}
              options={countryFlagsArray.filter(country => country.value !== currentCountryValue)}
              onHide={setShowPhoneList}
              renderOption={countryOption}
              onChange={value => handleChangeCountry(value as string)}
            >
              <div className={'flex items-center space-x-12'} onClick={() => setShowPhoneList(!showPhoneList)}>
                <span className={'text-28'}>{currentCountryFlag?.label}</span>
                <Icon.ArrowChevronDown
                  className={cls('w-14 h-14 text-neutral-5', { 'transform rotate-180': showPhoneList })}
                />
              </div>
            </ListBox>
            <span className={readonly ? 'text-neutral-2' : 'text-neutral-14'}>{currentCountryPhoneCode}</span>
          </>
        }
        {...rest}
      />
    )
  })
)

PhoneInput.displayName = 'PhoneInputWrapper'
