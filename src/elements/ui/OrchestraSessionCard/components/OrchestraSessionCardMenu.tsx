import React, { useEffect, useMemo, useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import { useAlert } from 'react-alert'
import dayjs from 'dayjs'

import { Menu } from '~ui'
import { Popover } from '~ux'
import { MeetingType } from '~types'
import * as Icon from '~icons'
import { MINUTE } from '~utils'

export interface OrchestraSessionCardMenuProps {
  onPlan?: (session: MeetingType) => void
  onViewResponses?: (session: MeetingType) => void
  onDuplicate?: (session: MeetingType) => void
  onRemove?: (session: MeetingType) => void
  session: MeetingType
}

const OrchestraSessionCardMenu: React.FC<OrchestraSessionCardMenuProps> = props => {
  const { session, onPlan, onViewResponses, onDuplicate, onRemove } = props
  const { startTime, endTime } = session
  const [isShowPopover, setIsShowPopover] = useState(false)
  const alert = useAlert()
  const [state, copyToClipboard] = useCopyToClipboard()

  const is5MinutesBeforeStart = useMemo(() => +dayjs(startTime) - +dayjs() <= 5 * MINUTE, [startTime])
  const isPastSession = useMemo(() => dayjs(endTime).isBefore(dayjs()), [endTime])

  useEffect(() => {
    if (state.value === undefined) return

    if (state.error) alert.error(state.error.message)
    else if (state.value) alert.info('Copied!')
    else alert.error('Something went wrong')
  }, [state])

  const togglePopover = (value: boolean) => () => setIsShowPopover(value)
  const handleCopyLink = () => {
    copyToClipboard(location.origin + `/participant/meeting/${session.id}/welcome`)
  }
  const handlePlanSession = () => {
    onPlan && onPlan(session)
    togglePopover(false)()
  }
  const handleViewResponses = () => {
    onViewResponses && onViewResponses(session)
    togglePopover(false)()
  }
  const handleDuplicate = () => {
    onDuplicate && onDuplicate(session)
    togglePopover(false)()
  }
  const handleRemove = () => {
    onRemove && onRemove(session)
    togglePopover(false)()
  }
  return (
    <Popover
      show={isShowPopover}
      position={['right', 'left']}
      align={'start'}
      reposition
      onClickOutside={togglePopover(false)}
      childrenProps={{
        onClick: togglePopover(true)
      }}
      panel={
        <Menu
          style={{ boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 5px 8px rgba(0, 0, 0, 0.08)' }}
          className={'w-214 p-16 shadow-basic-1 bg-white'}
          items={[
            {
              items: [
                {
                  label: 'Plan Session',
                  id: 'plan_session',
                  onClick: handlePlanSession,
                  iconName: 'SettingsFilled',
                  isHide: !onPlan || isPastSession || is5MinutesBeforeStart
                },
                {
                  label: 'View responses',
                  id: 'view_responses',
                  onClick: handleViewResponses,
                  iconName: 'Placeholder',
                  isHide: !onViewResponses
                }
              ]
            },
            {
              items: [
                {
                  label: 'Copy link',
                  id: 'copy_link',
                  onClick: handleCopyLink,
                  iconName: 'CopyLink'
                },
                {
                  label: 'Duplicate',
                  id: 'duplicate',
                  onClick: handleDuplicate,
                  iconName: 'Duplicate',
                  isHide: !onDuplicate
                }
              ]
            },
            {
              items: [
                {
                  label: 'Delete',
                  id: 'delete',
                  onClick: handleRemove,
                  iconName: 'Delete',
                  isHide: !onRemove
                }
              ]
            }
          ]}
        />
      }
    >
      <div className={'mr-6 p-8 cursor-pointer rounded-8 hover:bg-gray-30'}>
        <Icon.ActionsVertical onClick={togglePopover(true)} className={'w-15 h-15 text-inherit'} />
      </div>
    </Popover>
  )
}

export default OrchestraSessionCardMenu
