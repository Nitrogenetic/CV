import React, { memo } from 'react'
import cls from 'classnames'
import { Children, ClassName } from '~types'
import { TableHead, TableBody, TableFilterType } from './components'

export type TableColumnType = {
  title: string
  key: string | number
  thClassName?: ClassName
  tdClassName?: ClassName
  thRender?: (title: string, key: string) => Children
  tdRender?: (cell: any, row: TableRowType) => Children
}

export type TableRowType = {
  disabled?: boolean
  [column: string]: any
}

export interface TableProps {
  className?: ClassName
  wrapperClassName?: ClassName
  headClassName?: ClassName
  bodyClassName?: ClassName
  rowClassName?: ClassName
  columns: TableColumnType[]
  rows: TableRowType[]
  filters?: TableFilterType[]
  placeholder?: JSX.Element
  observe?: boolean
  autoHeight?: boolean
  lazyLoading?: boolean

  handleRowClick?(row: TableRowType): void
  onScrollToEnd?(): void
}

export const Table: React.FC<TableProps> = memo(props => {
  const {
    className,
    wrapperClassName,
    headClassName,
    bodyClassName,
    rowClassName,
    columns,
    rows,
    observe,
    lazyLoading,
    onScrollToEnd,
    filters,
    placeholder,
    handleRowClick,
    autoHeight
  } = props

  return (
    <div className={cls(wrapperClassName, 'w-full inline-flex overflow-x-auto')}>
      <table className={cls(className, 'table')}>
        <TableHead className={headClassName} columns={columns} />
        <TableBody
          observe={observe}
          lazyLoading={lazyLoading}
          onScrollToEnd={onScrollToEnd}
          autoHeight={autoHeight}
          className={bodyClassName}
          rowClassName={rowClassName}
          rows={rows}
          columns={columns}
          filters={filters}
          handleRowClick={handleRowClick}
          placeholder={placeholder}
        />
      </table>
    </div>
  )
})

Table.displayName = 'Table'
