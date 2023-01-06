import React, { memo, useEffect, useRef, Fragment } from 'react'
import cls from 'classnames'
import { TableColumnType, TableRowType } from '~ui'
import { get } from 'lodash'
import { useIntersection, useWindowSize } from '~hooks'
import { ClassName } from '~types'
import { Loader } from '~ux'

export type TableFilterType = { field: TableColumnType['key']; handleFilter: (...args: any) => boolean }

export interface TableBodyProps {
  columns: TableColumnType[]
  rows: TableRowType[]

  className?: ClassName
  rowClassName?: ClassName
  filters?: TableFilterType[]
  placeholder?: JSX.Element
  observe?: boolean
  lazyLoading?: boolean
  autoHeight?: boolean

  handleRowClick?(row: TableRowType): void
  onScrollToEnd?(): void
}

/*const TableBodyRowIndex: React.FC<{ index: number }> = props => {
  let { index } = props

  return (
    <td className={'table-body-tr-td'} key={index} style={{ width: '20px' }} data-testid={'tbody-row-index'}>
      <div className={'table-body-tr-td__inner'}>{++index}.</div>
    </td>
  )
}*/

export const TableBody: React.FC<TableBodyProps> = memo(props => {
  const {
    className,
    columns,
    rows,
    rowClassName,
    filters,
    placeholder,
    handleRowClick,
    observe,
    onScrollToEnd,
    lazyLoading,
    autoHeight = true
  } = props

  const windowSize = useWindowSize()
  const tableBodyRef = useRef<HTMLTableSectionElement>(null)
  const lastRowRef = useRef<HTMLTableRowElement | null>(null)

  const intersection = useIntersection(lastRowRef, { root: tableBodyRef.current, rootMargin: '0px 0px 0px 0px' })
  const isIntersecting = intersection?.isIntersecting

  useEffect(() => {
    if (observe && onScrollToEnd && isIntersecting) {
      onScrollToEnd()
    }
  }, [isIntersecting, intersection, observe])

  if (autoHeight) {
    useEffect(() => {
      const { current: tableBody } = tableBodyRef

      if (tableBody) {
        const windowHeight = window.innerHeight
        const { y } = tableBody.getBoundingClientRect()
        const tableBodyHeight = windowHeight - y

        tableBody.style.height = tableBodyHeight + 'px'
      }
    }, [tableBodyRef, windowSize])
  }

  const filteredRows = filters
    ? rows.filter((row: TableRowType) => {
        return filters.some(filter => {
          const { handleFilter, field } = filter
          return handleFilter(row[field])
        })
      })
    : rows

  return (
    <tbody className={cls(className)} ref={tableBodyRef}>
      {!filteredRows.length ? (
        <tr>
          <td colSpan={columns.length}>{placeholder}</td>
        </tr>
      ) : (
        filteredRows.map((row: TableRowType, index, self) => {
          const { disabled } = row
          const cells = columns

          return (
            <Fragment key={index}>
              <tr
                className={cls(rowClassName)}
                onClick={() => !disabled && handleRowClick && handleRowClick(row)}
                ref={observe && index === self.length - 1 ? lastRowRef : undefined}
              >
                {cells.map((cell, index) => {
                  const { key, tdClassName, tdRender } = cell
                  const field = get(row, key)
                  const isOption = typeof field === 'object'

                  const render = tdRender ? tdRender(field, row) : isOption ? field && field.label : field

                  const isFirstColumn = index === 0
                  const isLastColumn = index === cells.length - 1

                  return (
                    <td
                      className={cls(
                        {
                          // 'border-l': isFirstColumn,
                          'no-border-r': isLastColumn
                        },
                        tdClassName
                      )}
                      key={index + 'td'}
                      data-testid={'tbody-row'}
                    >
                      {render}
                    </td>
                  )
                })}
              </tr>
              {index === self.length - 1 && lazyLoading && (
                <tr className={cls(rowClassName)} key={self.length}>
                  <td key={'td children'} colSpan={columns.length} className={'flex items-center justify-center py-10'}>
                    <Loader key={'loader'} width={30} height={30} />
                  </td>
                </tr>
              )}
            </Fragment>
          )
        })
      )}
    </tbody>
  )
})

TableBody.displayName = 'TableBody'
