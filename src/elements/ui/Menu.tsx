import React, { CSSProperties } from 'react'
import cls from 'classnames'
import { MenuItem, MenuItemProps } from '~ui'

export type MenuItemType = Omit<MenuItemProps & { isHide?: boolean }, 'selected'>
export type GroupMenuItemType = { title?: string; items: MenuItemType[] }

interface MenuProps {
  className?: string
  items: MenuItemType[] | GroupMenuItemType[]
  onItemClick?: (item: MenuItemProps) => void
  selectedItemId?: string | null
  style?: CSSProperties
}

const Menu: React.FC<MenuProps> = props => {
  const { className, items, onItemClick, selectedItemId, style } = props

  const renderMenuItems = (items: MenuProps['items']) => {
    return items.map((item, index) => {
      const isLastItem = index === items.length - 1
      // render group
      if (Object.hasOwn(item, 'items')) {
        const groupMenuItem = item as unknown as GroupMenuItemType
        const visibleMenuItems = groupMenuItem.items.filter(item => item && !item.isHide)
        if (visibleMenuItems.length === 0) return null
        return (
          <div key={index}>
            {groupMenuItem.title && (
              <div className="mb-12 pl-12 font-bold text-14 text-gray-100">{groupMenuItem.title}</div>
            )}
            {renderMenuItems(groupMenuItem.items)}
            {!isLastItem && <hr className="w-full my-12 border border-gray-20" />}
          </div>
        )
      }

      // render item
      const menuItem = item as unknown as MenuItemType
      if (menuItem.isHide) return null
      return (
        <MenuItem
          key={menuItem.id}
          className={cls({ 'mb-4': !isLastItem })}
          onClick={onItemClick}
          selected={item.id === selectedItemId}
          {...menuItem}
        />
      )
    })
  }

  return (
    <div style={style} className={cls('rounded-12 shadow-basic-1', className)}>
      {renderMenuItems(items)}
    </div>
  )
}

export { Menu }
