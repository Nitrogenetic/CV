import React, { forwardRef, memo, useState } from 'react'
import cls from 'classnames'
import { Children, ClassName, MeetingUserType, UserType } from '~types'
import { ConditionalRender } from '~ux'
import * as Icon from '~icons'
import { OrchestraSearch } from '~ui'
import { useFetchUserList } from '~hooks'

export type HtmlInputProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className' | 'ref' | 'prefix' | 'value'
>
export interface OrchestraSearchFalcoUsersProps extends HtmlInputProps {
  className?: ClassName
  selectedUsers: (UserType | MeetingUserType)[]
  optionsClassName?: ClassName
  hideSelectedUsers?: boolean
  suffixes?: Children[]

  setSelectedUsers(users: (UserType | MeetingUserType)[]): void
}

export const OrchestraSearchFalcoUsers = memo(
  forwardRef<HTMLDivElement, OrchestraSearchFalcoUsersProps>((props, ref) => {
    const { className, selectedUsers = [], optionsClassName, hideSelectedUsers, setSelectedUsers, ...rest } = props

    const [inputValue, setInputValue] = useState('')

    const { data: searchedUsers = [], loading } = useFetchUserList({
      variables: {
        offset: 0,
        limit: 10,
        search: inputValue
      },
      skip: inputValue.length < 3
    })

    const searchedUsersWithoutSelected = searchedUsers.filter(
      searchedUser => !selectedUsers.find(selectedUser => selectedUser.id === searchedUser.id)
    )

    const searchedUsersOptions = searchedUsersWithoutSelected.map(searchedUser => {
      const { id, avatar, fullName, email } = searchedUser
      return { value: id, label: fullName || email, image: avatar?.url }
    })

    const handleSelectUser = (id: string) => {
      const selectedUser = searchedUsersWithoutSelected.find(searchedUser => searchedUser.id === id)
      setSelectedUsers([...selectedUsers, selectedUser])
    }

    const handleRemoveUser = (idUserToRemove: string) => {
      const usersWithoutRemoved = selectedUsers.filter(selectedUser => selectedUser.id !== idUserToRemove)
      setSelectedUsers(usersWithoutRemoved)
    }
    const handleSelectFirstUser = () => {
      if (searchedUsersWithoutSelected[0]) {
        setSelectedUsers([...selectedUsers, searchedUsersWithoutSelected[0]])
      }
    }

    return (
      <div className={cls('space-y-16', className)}>
        <OrchestraSearch
          options={searchedUsersOptions}
          inputValue={inputValue}
          onInputChange={setInputValue}
          loading={loading}
          onItemSelect={handleSelectUser}
          onPressEnter={handleSelectFirstUser}
          iconName={'InviteAlt'}
          optionsClassName={cls(optionsClassName)}
          {...rest}
        />
        <ConditionalRender condition={!!selectedUsers?.length && !hideSelectedUsers}>
          <div className={'grid grid-cols-2 gap-8'}>
            {selectedUsers?.map(user => {
              const { id, avatar, email, fullName } = user
              return (
                <div key={id} className={cls('flex items-center p-4 bg-gray-10 rounded-8')}>
                  <ConditionalRender
                    condition={!!avatar?.url}
                    otherwise={
                      <div className={'min-h-32 min-w-32 rounded-8 mr-8 border-1 border-dotted border-black'} />
                    }
                  >
                    <img src={avatar?.url} className={'h-32 w-32 rounded-8 mr-8'} />
                  </ConditionalRender>
                  <span className="text-12 text-gray-100 font-bold mr-auto truncate">{fullName || email}</span>
                  <Icon.Delete
                    onClick={() => handleRemoveUser(id)}
                    className={'cursor-pointer h-13 w-13 fill-gray-50 mr-14 hover:fill-gray-100'}
                  />
                </div>
              )
            })}
          </div>
        </ConditionalRender>
      </div>
    )
  })
)

OrchestraSearchFalcoUsers.displayName = 'OrchestraSearchFalcoUsers'
