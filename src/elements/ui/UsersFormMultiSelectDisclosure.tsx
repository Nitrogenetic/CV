import React, { FC, memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { ClassName, MeetingUserType, MuralEnterpriseUserType, OptionType, UserType } from '~types'
import { AvatarChip, MultiSelect, PlusChip, UserChip } from '~ui'
import { arrayToOptions } from '~utils'
import { Disclosure } from '~ux'
import cls from 'classnames'
import * as Icon from '~icons'
import { useClickAway } from 'react-use'
export interface UsersFormMultiSelectDisclosureProps {
  name: string
  defaultSelected?: (MeetingUserType | MuralEnterpriseUserType)[]
  falcoUsersData?: MeetingUserType[]
  loading?: boolean
  className?: ClassName
  setUsersSearch(value: string): void
  selectedUsers?(value: string[]): void
  // setUsersSearch(value: string): void
  onRemoveUser?(value: string): void
  disclosureType?: 'button' | 'input'
  placeholder?: string
}

export const UsersFormMultiSelectDisclosure: FC<UsersFormMultiSelectDisclosureProps> = memo(props => {
  const {
    name,
    defaultSelected,
    falcoUsersData,
    setUsersSearch,
    loading,
    className,
    selectedUsers,
    onRemoveUser,
    disclosureType = 'button',
    placeholder
  } = props

  const { watch, formState } = useFormContext()
  const isSubmitSuccessful = formState && formState.isSubmitSuccessful

  const selected: string[] = watch(name)
  const [show, setShow] = useState(disclosureType === 'input')
  const [chosenUsers, setChosenUsers] = useState<(MeetingUserType | MuralEnterpriseUserType)[]>([])

  useLayoutEffect(() => {
    if (defaultSelected) {
      setChosenUsers(defaultSelected)
    }
  }, [])

  useEffect(() => {
    if (isSubmitSuccessful) setShow(false)
  }, [isSubmitSuccessful])

  useEffect(() => {
    selectedUsers && selectedUsers(selected)
  }, [selected])

  const users = useMemo(() => {
    if (falcoUsersData) {
      return [...falcoUsersData]
    }

    return []
  }, [falcoUsersData])

  const usersOptions = arrayToOptions<
    MeetingUserType | MuralEnterpriseUserType,
    string,
    { user: MeetingUserType | MuralEnterpriseUserType }
  >(users, 'email', 'email', user => ({ user }))

  const defaultOptions = arrayToOptions(
    defaultSelected || [],
    user => user?.email,
    'email',
    user => ({ user })
  )

  const disclosureRef = useRef<HTMLDivElement>(null)
  useClickAway(disclosureRef, () => setShow(false))

  return (
    <Disclosure
      className={cls('mb-24', className)}
      show={show}
      ref={disclosureRef}
      panel={
        <Controller
          name={name}
          render={props => {
            const { field } = props
            const { name, value, onChange } = field

            const filteredValue = (value || []).filter((item: string) => item !== '')

            return (
              <MultiSelect
                textInputProps={{ placeholder: placeholder }}
                name={name}
                value={filteredValue}
                defaultSelected={defaultOptions}
                options={[...usersOptions, ...defaultOptions]}
                loading={loading}
                onChange={(
                  selectedUsers: string[],
                  selectedUser?: OptionType<string, { user: MeetingUserType | MuralEnterpriseUserType }>
                ) => {
                  selectedUser && setChosenUsers(prevState => [...prevState, selectedUser.user])
                  onChange(selectedUsers)
                }}
                onInputChange={setUsersSearch}
                onSelectedOptionRender={({ onOptionRemove }, option) => {
                  if (option) {
                    const { value } = option
                    return (
                      <UserChip
                        key={option?.value}
                        className={'mr-4 mb-4'}
                        user={(option as OptionType<string, { user: UserType }>)?.user}
                        onTimesClick={() => {
                          onOptionRemove(value)
                          onRemoveUser?.(value)
                        }}
                      />
                    )
                  }
                  return
                }}
              />
            )
          }}
        />
      }
    >
      <div className={'flex items-center flex-wrap mb-10'}>
        {selected?.map(email => {
          const user = chosenUsers.find(user => user.email === email)
          return (
            user && (
              <AvatarChip
                key={user.email}
                className={'w-36 h-36 mr-10 mb-10'}
                avatar={(user as MeetingUserType).avatar}
                name={user.fullName || user.email || 'Unknown user'}
              />
            )
          )
        })}

        {!show ? (
          <PlusChip className={'w-36 h-36'} onClick={() => setShow(true)} />
        ) : (
          <div className="w-36 h-36 rounded-full plus-chip" onClick={() => setShow(false)}>
            <Icon.MinusCircle className="text-transparent" />
          </div>
        )}
      </div>
    </Disclosure>
  )
})

UsersFormMultiSelectDisclosure.displayName = 'UsersFormMultiSelectDisclosure'
