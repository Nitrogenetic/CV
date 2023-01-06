import axios from 'axios'
import cls from 'classnames'
import dayjs from 'dayjs'
import React, { memo, useEffect, useState } from 'react'
import { useFetchCurrentUser } from '~hooks'
import * as Icon from '~icons'
import { ConferenceMetaType, ZoomMeetingType } from '~types'
import { Radio, TextInput } from '~ui'

interface ZoomLinkProps {
  conferenceMeta: ConferenceMetaType
  setConferenceMeta: (meta: ConferenceMetaType) => void
}

export const ZoomLink: React.FC<ZoomLinkProps> = memo(props => {
  const { conferenceMeta, setConferenceMeta } = props
  const { data: currentUser } = useFetchCurrentUser()

  const [zoomMeetings, setZoomMeetings] = useState<ZoomMeetingType[]>([])
  const [isZoomAccountLinked, setIsZoomAccountLinked] = useState<boolean>(false)

  // Listen for localStorage change from zoom page.
  // Zoom page is supposed to update localStorage after zoom account linking process.
  useEffect(() => {
    if (window.localStorage.getItem('zoom')) setIsZoomAccountLinked(true)
    window.addEventListener('storage', storageChange)
    return () => {
      window.removeEventListener('storage', storageChange)
    }
  }, [])

  const storageChange = (e: StorageEvent) => {
    if (e.key === 'zoom') setIsZoomAccountLinked(true)
  }

  // start Zoom OAuth2 to link zoom account
  const linkZoomAccount = () => {
    window.open(
      'https://zoom.us/oauth/authorize?response_type=code&client_id=' +
        import.meta.env.VITE_ZOOM_CLIENT_ID +
        '&redirect_uri=' +
        import.meta.env.VITE_ZOOM_REDIRECT_URL,
      'Zoom Authentication',
      'height=500; width=500'
    )
  }

  // Call zoom proxy server to read existing meetings for user to select
  const readExistingMeetings = async () => {
    setConferenceMeta({ ...conferenceMeta, option: 'existing' })
    if (zoomMeetings.length < 1) {
      const data = await axios.post(`${import.meta.env.VITE_ZOOM_NODE_SERVER}/meetingsList`, {
        falcoUserId: currentUser?.id
      })
      setZoomMeetings(data?.data.meetings)
    }
  }

  // Meeting duration, ex: 3 January, 12:30pm - 14pm
  const meetingDurationLabel = (meeting: ZoomMeetingType) => {
    const startTime = dayjs(meeting.start_time)
    const endTime = startTime.add(meeting.duration, 'm')
    return `${startTime.format('D MMMM, H:mm')} - ${endTime.format('H:mm a')}`
  }

  return (
    <>
      {!isZoomAccountLinked && (
        <div className={'flex items-center'}>
          <span className={'bg-violet-3 flex items-center mr-10 p-6 px-12 rounded-10 w-2/5 cursor-pointer'}>
            <Icon.Zoom className={'w-20 h-20 text-white mr-5'} />
            <span className={'text-white text-14'} onClick={linkZoomAccount}>
              Link Zoom Account
            </span>
          </span>
          <span className={'border-l border-neutral-10 text-wrap text-neutral-5 flex-1 pl-10 w-3/5 text-12'}>
            Once you link your Zoom account, we can automatically generate Zoom meetings for you.
          </span>
        </div>
      )}
      {isZoomAccountLinked && (
        <>
          <div className={'px-10'}>
            <Radio
              name={'new-meeting'}
              className={'mr-12 my-10'}
              color={'white'}
              label={'Create a new Zoom meeting for me'}
              value={conferenceMeta.option === 'create'}
              onChange={() => setConferenceMeta({ ...conferenceMeta, option: 'create' })}
            />
            <Radio
              name={'use-existing'}
              className={'mr-12 my-10'}
              color={'white'}
              label={'Use an existing Zoom meeting'}
              value={conferenceMeta.option === 'existing'}
              onChange={readExistingMeetings}
            />
            {conferenceMeta.option === 'existing' && zoomMeetings && (
              <div className={''}>
                {zoomMeetings.map(meeting => (
                  <div className={'bg-neutral-10 p-2 rounded-6 border border-neutral-7'} key={meeting.id}>
                    <div
                      className={cls(
                        'border rounded-6 flex items-center justify-between cursor-pointer px-20',
                        conferenceMeta.url === meeting.join_url ? 'border-violet-3' : 'border-neutral-10'
                      )}
                      onClick={() => setConferenceMeta({ ...conferenceMeta, url: meeting.join_url })}
                    >
                      <div className={'flex-grow py-12'}>
                        <span className={'bg-neutral-7 rounded-8 px-8 py-4 text-white text-10 font-bold'}>
                          {meetingDurationLabel(meeting)}
                        </span>
                        <h5 className={'font-bold text-12 text-white mt-8'}>{meeting.topic}</h5>
                      </div>
                      {conferenceMeta.url === meeting.join_url && (
                        <Icon.CheckInCircleOutlined className={'w-20 h-20 text-violet-3'} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <Radio
              name={'manual'}
              className={'mr-12 my-10'}
              color={'white'}
              label={'Enter Zoom information manually?'}
              value={conferenceMeta.option === 'manual'}
              onChange={() => setConferenceMeta({ ...conferenceMeta, url: '', option: 'manual' })}
            />
            {conferenceMeta.option === 'manual' && (
              <TextInput
                name={'manual-zoom-link'}
                autoComplete={'off'}
                placeholder={'Add Zoom link for your event'}
                className={'mb-10'}
                value={conferenceMeta.url}
                onChange={value => setConferenceMeta({ ...conferenceMeta, url: value.target.value })}
              />
            )}
          </div>
        </>
      )}
    </>
  )
})

ZoomLink.displayName = 'ZoomLink'
