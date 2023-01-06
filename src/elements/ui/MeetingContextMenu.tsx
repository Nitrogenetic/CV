import { navigate } from '@reach/router'
import cls from 'classnames'
import dayjs from 'dayjs'
import React, { FC, memo, useMemo } from 'react'
import { useFetchCurrentUser, useMeetingDrawerContext } from '~hooks'
import * as Icon from '~icons'
import { MeetingType } from '~types'
import { Button, ContextMenu } from '~ui'
import { MINUTE } from '~utils'
import { ConditionalRender } from '~ux'

export type IconRotateType = 'vertical' | 'horizontal'

export interface MeetingContextMenuProps {
  meeting: MeetingType
  iconRotate?: IconRotateType
  onRemoveClick: (meeting: MeetingType) => void
  onResultsClick: (meeting: MeetingType) => void
  onCloneClick: (meeting: MeetingType) => void
}

const MeetingContextMenu: FC<MeetingContextMenuProps> = memo(props => {
  const { meeting, iconRotate = 'vertical', onRemoveClick, onResultsClick, onCloneClick } = props
  const { owner, status, id, startTime, external } = meeting

  const isFinishedMeeting = status === 'ended'

  const onEnterMeeting = () => navigate(external?.link || `/facilitator/meeting/${id}/live`)
  const onDesignerClick = () => navigate(`/facilitator/meeting/${id}/designer/agenda`)

  const is5MinutesBeforeStart = useMemo(() => +dayjs(startTime) - +dayjs() <= 5 * MINUTE, [startTime])

  const { data: user } = useFetchCurrentUser()
  const { openMeetingCreateDrawer } = useMeetingDrawerContext(user!)

  if (!user || user.id !== owner.id) return null

  return (
    <ContextMenu
      position={'left'}
      align={'start'}
      panel={(show, setShow) => {
        const close = () => setShow(false)

        return (
          <div className={'flex flex-col'}>
            <ConditionalRender condition={is5MinutesBeforeStart && !isFinishedMeeting}>
              <Button
                className={'mb-12 justify-start inline-flex'}
                size={'sm'}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation()
                  onEnterMeeting()
                }}
              >
                <Icon.Rocket className={'w-20 h-22 pl-4 mr-8'} />
                <span className={'text-neutral-3 text-14 leading-19 font-bold mr-10'}>Enter</span>
                <Icon.External className={'w-12 h-12 text-neutral-3'} />
              </Button>
            </ConditionalRender>

            <ConditionalRender condition={!isFinishedMeeting}>
              <Button
                className={'mb-12 inline-flex'}
                size={'sm'}
                onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation()
                  await openMeetingCreateDrawer(meeting.id)
                  close()
                }}
              >
                <Icon.Pen className={'neutral-icon w-20 h-20 mr-8'} />
                <span className={'text-neutral-3 text-14 leading-19 font-bold'}>Quick Edit</span>
              </Button>
            </ConditionalRender>

            <Button
              className={'mb-12 justify-start inline-flex'}
              size={'sm'}
              onClick={e => {
                e.stopPropagation()
                onCloneClick(meeting)
                close()
              }}
            >
              <Icon.Copy className={'neutral-icon w-20 h-20 mr-8'} />
              <span className={'text-neutral-3 text-14 leading-19 font-bold'}>Clone</span>
            </Button>

            <ConditionalRender condition={!isFinishedMeeting}>
              <Button
                className={'items-center justify-start mb-12'}
                size={'sm'}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation()
                  onDesignerClick()
                }}
              >
                <Icon.Settings className={'neutral-icon w-20 h-20 mr-8'} />
                <span className={'text-neutral-3 text-14 leading-19 font-bold'}>Designer</span>
              </Button>
            </ConditionalRender>
            <Button
              className={'group mb-12 inline-flex justify-start'}
              size={'sm'}
              onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                onResultsClick(meeting)
                close()
              }}
            >
              <Icon.Result className={'neutral-icon w-20 h-20 mr-8 group-hover:text-violet-2'} />
              <span className={'text-neutral-3 text-14 leading-19 font-bold group-hover:text-violet-2'}>Results</span>
            </Button>
            <Button
              className={'group mb-12 justify-start inline-flex'}
              kind={'red'}
              size={'sm'}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                onRemoveClick(meeting)
                close()
              }}
            >
              <Icon.Trash className={'neutral-icon w-20 h-20 mr-8'} />
              <span className={'text-neutral-3 text-14 leading-19 font-bold'}>Delete</span>
            </Button>
          </div>
        )
      }}
    >
      {(show, setShow) => (
        <Icon.ActionsVertical
          className={cls('neutral-icon w-18 h-18', { 'transform rotate-90': iconRotate === 'horizontal' })}
          onClick={e => {
            e.stopPropagation()
            setShow(true)
          }}
        />
      )}
    </ContextMenu>
  )
})

MeetingContextMenu.displayName = 'MeetingContextMenu'

export { MeetingContextMenu }
