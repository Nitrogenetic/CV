import React, { memo } from 'react'
import cls from 'classnames'
import { TableColumnType } from '~ui'
import { ClassName } from '~types'

export interface TableHeadProps {
  className?: ClassName
  columns: TableColumnType[]
}

export const TableHead: React.FC<TableHeadProps> = memo(props => {
  const { className, columns } = props

  return (
    <thead key={'thead'} className={cls(className)}>
      <tr key={'thead-row'}>
        {columns.map((column, index) => {
          const { thClassName, thRender, title, key } = column
          const render = thRender ? thRender(title, key as string) : title

          return (
            <th className={cls(thClassName)} key={index}>
              {render}
            </th>
          )
        })}
      </tr>
    </thead>
  )
})

TableHead.displayName = 'TableHead'
