import React from 'react'
import { Link } from '@reach/router'
import cls from 'classnames'
import * as Icon from '~icons'

export type BreadcrumbType = {
  label: string
  link: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbType[]
  className?: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <div className={cls('flex', className)}>
      {items.map(({ label, link }, index) => {
        const isLastItem = index === items.length - 1

        if (isLastItem) {
          return (
            <div key={label} className={'text-12 text-gray-100 font-bold select-none'}>
              {label}
            </div>
          )
        }
        return (
          <Link key={label} className={'flex items-center mr-8 text-gray-80 text-12 font-semibold'} to={link}>
            <div>{label}</div>
            <Icon.ArrowChevronRight className={'w-4 ml-8'} />
          </Link>
        )
      })}
    </div>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'
