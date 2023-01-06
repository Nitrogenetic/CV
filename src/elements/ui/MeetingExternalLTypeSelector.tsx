import React, { FC, memo, useState } from 'react'
import * as Icon from '~icons'
import cls from 'classnames'
import { MeetingExternalKindType, OptionType } from '~types'
import { ConditionalRender, List, Popover } from '~ux'
interface MeetingExternalTypeSelectorProps {
  type: MeetingExternalKindType
  setExternalType: (type: MeetingExternalKindType) => void
}

const basicConferenceKinds = ['zoom', 'google_meets', 'ms_teams']
const basicConferenceLabels = ['Zoom', 'Meet', 'Teams']

const basicConferenceList = new Array(3).fill(0).map((_, index) => {
  return {
    value: basicConferenceKinds[index],
    label: basicConferenceLabels[index]
  }
}) as OptionType<MeetingExternalKindType>[]

const MeetingExternalTypeSelector: FC<MeetingExternalTypeSelectorProps> = memo(props => {
  const { type, setExternalType } = props

  const [showPopover, setShowPopover] = useState<boolean>(false)

  return (
    <div className={'my-20'}>
      <h5 className={'text-white mb-20 flex items-center'}>
        <Icon.Place className={'w-20 h-20 text-violet-4 mr-10'} />
        Where is the session taking place?
      </h5>
      <div className={'flex rounded-10 border-neutral-10 border text-center text-neutral-3 overflow-hidden'}>
        <List
          items={basicConferenceList}
          listProps={{ className: 'flex flex-grow' }}
          itemKey={(_, index) => index}
          renderItem={({ value, label }) => {
            return (
              <span
                className={cls(
                  'flex justify-center items-center text-14 font-600 flex-1 py-8 border-r border-neutral-10 cursor-pointer',
                  { 'bg-violet-5 text-violet-0.5': type === value }
                )}
                onClick={() => setExternalType(value)}
              >
                <ConditionalRender condition={value === 'zoom'}>
                  <Icon.ZoomIcon
                    className={cls('w-17 h-9 mr-12', value === 'zoom' ? 'text-violet-0.5' : 'text-white')}
                  />
                </ConditionalRender>

                <ConditionalRender condition={value === 'google_meets'}>
                  <Icon.GoogleMeet className={'w-18 h-18 mr-10'} />
                </ConditionalRender>

                <ConditionalRender condition={value === 'ms_teams'}>
                  <Icon.MSTeams className={'w-20 h-20 mr-8'} />
                </ConditionalRender>
                {/* <ConditionalRender condition={value === 'webex'}>
                  <Icon.Webex className={'w-20 h-20 mr-8'} />
                </ConditionalRender> */}
                {label}
              </span>
            )
          }}
        />
        <Popover
          show={showPopover}
          onHide={() => setShowPopover(!showPopover)}
          containerClassName={'z-20'}
          containerStyle={{ zIndex: '1000' }}
          className={'flex justify-center items-center flex-shrink-0 px-10 cursor-pointer'}
          panel={
            <ul className={'mt-25 text-14 text-neutral-3 bg-neutral-13 cursor-pointer rounded-8 overflow-hidden z-50'}>
              <li className={'px-15 py-5 flex items-center space-x-5 hover:bg-neutral-10'} onClick={() => null}>
                <Icon.Webex className={'w-15 h-15 text-neutral-5'} />
                <span>Webex</span>
              </li>
            </ul>
          }
        >
          <Icon.ActionsVertical className={'w-16 h-16 text-neutral-5'} onClick={() => null} />
        </Popover>
      </div>
    </div>
  )
})

MeetingExternalTypeSelector.displayName = 'MeetingExternalTypeSelector'

export { MeetingExternalTypeSelector }
