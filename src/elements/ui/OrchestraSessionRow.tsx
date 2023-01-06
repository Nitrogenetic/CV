import React, { FC } from 'react'
import { ClassName } from '~types'
import cls from 'classnames'
import * as Icon from '../svg/icons/EXPORT'
import { OrchestraAvatarChip, OrchestraButton, OrchestraCheckbox, OrchestraCheckboxProps } from '~ui'
interface OrchestraSessionRowProps {
  className?: ClassName
  title: string
  description?: string
  checkboxProps?: OrchestraCheckboxProps
}

export const OrchestraSessionRow: FC<OrchestraSessionRowProps> = props => {
  const { className, title, description, checkboxProps } = props
  return (
    <div className={cls('w-full pl-6 pr-11 flex items-center bg-white cursor-pointer hover:bg-gray-10', className)}>
      <div className={'flex items-center space-x-22'}>
        <OrchestraCheckbox {...checkboxProps} />
        <div>
          <h1 className={'text-private font-bold'}>{title}</h1>
          <small className={'text-gray-70 font-semibold'}>{description}</small>
        </div>
      </div>

      <div className={'flex items-center ml-auto py-6'}>
        <div className={'flex flex-wrap space-x-2'}>
          <OrchestraAvatarChip
            avatar={'../../static/images/imgAvatar.png'}
            name={'danger master'}
            className={'border-2 border-grape-100'}
            kind={'collaborator'}
            size={'sm'}
            withPreffix
          />
          <OrchestraAvatarChip avatar={'../../static/images/imgAvatar.png'} name={'danger master'} size={'sm'} />
          <OrchestraAvatarChip name={'danger master'} size={'sm'} />
          {/* TODO MoreChip */}
          <div
            className={
              'w-32 h-32 bg-[#1F1F1F] font-proxima-nova rounded-8 inline-flex justify-center items-center text-white font-extrabold'
            }
          >
            +3
          </div>
        </div>
        <OrchestraButton kind={'secondary'} size={'small'} className={'ml-16'}>
          Level up this session
        </OrchestraButton>
        <Icon.Close className={'w-20 h-20 ml-12 text-gray-80'} />
      </div>
    </div>
  )
}

OrchestraSessionRow.displayName = 'OrchestraSessionRow'
