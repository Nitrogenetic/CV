import cls from 'classnames'
import React, { FC, memo } from 'react'
import * as Icon from '~icons'
import { AgendaBlockKind } from '~types'
import { ConditionalRender } from '~ux'

interface AgendaBlockIconProps {
  className?: string
  kind: AgendaBlockKind
}

export const AgendaBlockIcon: FC<AgendaBlockIconProps> = memo(props => {
  const { className, kind } = props

  return (
    <>
      <ConditionalRender condition={kind === 'CanvasBlock'}>
        <Icon.MiniLogo className={cls(className, 'rounded-6')} />
      </ConditionalRender>

      <ConditionalRender condition={kind === 'StageBlock'}>
        <Icon.StageBlock className={className} />
      </ConditionalRender>

      <ConditionalRender condition={kind === 'RoomBlock'}>
        <Icon.RoomsBlock className={className} />
      </ConditionalRender>

      <ConditionalRender condition={kind === 'ConversationBlock'}>
        <Icon.ConversationBlock className={className} />
      </ConditionalRender>
    </>
  )
})

AgendaBlockIcon.displayName = 'AgendaBlockIcon'
