import React, { memo, useState, useRef, useEffect } from 'react'
import cls from 'classnames'
import { useTheme } from '~hooks'
import { Children, ClassName } from '~types'
import ReactPlayer from 'react-player'
import PlayerControls from './components/PlayerControls'
import * as Icon from '~icons'
import { ConditionalRender } from '~ux'
import { SourceProps } from 'react-player/base'

export type PlayerType = 'video' | 'audio'

export interface PlayerProps {
  id?: string
  type?: PlayerType
  className?: ClassName
  playerClassName?: ClassName
  controlsClassName?: ClassName
  url: string | string[] | SourceProps[] | MediaStream
  noControls?: boolean
  removeButton?: Children
  isStream?: boolean
  noStatic?: boolean
  audioDevice?: MediaDeviceInfo | null
  autoPlay?: boolean
  videoDuration?: number
  onViewVideo?: () => void
  onViewDuration?: (duration: number) => void
}

export const Player: React.FC<PlayerProps> = memo(props => {
  const {
    id,
    type = 'video',
    className,
    controlsClassName,
    playerClassName,
    noControls = false,
    removeButton,
    url,
    isStream = false,
    noStatic = true,
    autoPlay = false,
    videoDuration = 0,
    onViewVideo = () => null,
    onViewDuration = () => null
  } = props

  const [playerState, setPlayerState] = useState({
    isReady: false,
    playing: autoPlay,
    isPlayIcon: false,
    loop: false,
    volume: 1,
    muted: false,
    playedSeconds: 0,
    pointVideo: 0,
    duration: videoDuration || 0,
    nowTime: 0,
    rate: 1,
    readyToReplyIcon: false
  })

  const { isReady, playing, isPlayIcon, loop, volume, muted, playedSeconds, duration, rate, readyToReplyIcon } =
    playerState

  const { theme } = useTheme()

  const refPlayer = useRef<ReactPlayer | null>(null)

  useEffect(() => {
    if (isStream || loop) {
      setPlayerState({ ...playerState, playing: true, isPlayIcon: isStream && !isStream, loop: loop && !loop })
    }
  }, [loop, isStream])

  useEffect(() => {
    if (playing) onViewVideo()
  }, [playing])

  useEffect(() => {
    onViewDuration(duration)
  }, [duration])

  useEffect(() => {
    if (isLoom && isURLWithIframe) isLoomIframeLayout(url as string)
  }, [url])

  const handleReady = () => {
    setPlayerState({ ...playerState, playedSeconds: 0, isReady: !isReady })
  }

  const handleEnded = () => {
    setPlayerState({ ...playerState, playing: false, loop: false, readyToReplyIcon: true })
  }

  const handlePlayClick = () => {
    playing
      ? setPlayerState({ ...playerState, playing: false, isPlayIcon: true })
      : setPlayerState({ ...playerState, playing: true, isPlayIcon: false })
  }

  const handleReplyClick = () => {
    setPlayerState({
      ...playerState,
      readyToReplyIcon: false,
      loop: true
    })
  }

  const handleProgress = (value: any) => {
    const playedSeconds = Math.floor(value.playedSeconds)
    setPlayerState({
      ...playerState,
      playedSeconds
    })
  }

  const handlePlaybackRate = (value: boolean) => {
    setPlayerState({ ...playerState, rate: value ? 2 : 1 })
  }

  const handleMutedVolume = (value: boolean) => {
    setPlayerState({ ...playerState, muted: value })
  }

  const handleChangeVolumeStep = (value: string) => {
    setPlayerState({ ...playerState, volume: +value })
  }

  const handleProgressTrack = (value: number) => {
    refPlayer.current ? refPlayer.current.seekTo(value) : null
    setPlayerState({ ...playerState, playedSeconds: value })
  }

  const isStringURL = typeof url === 'string'
  const isURLWithIframe = isStringURL && (url as string).includes('iframe')
  const isLoom = isStringURL && (url as string).includes('www.loom.com')
  const isYouTube = isStringURL && (url as string).includes('www.youtube.com')

  const isLoomLinkLayout = (src: string) => {
    const modifiedSrc = src.replace('share', 'embed')
    return (
      <div>
        <iframe
          src={modifiedSrc}
          frameBorder="0"
          allowFullScreen={true}
          className="absolute z-2 top-0 left-0 w-full h-full"
        />
      </div>
    )
  }

  const isLoomIframeLayout = (url: string) => {
    const result = document.getElementById('result')
    result?.insertAdjacentHTML('afterbegin', url as string)
    const content = result?.getElementsByTagName('div')[0]
    if (content) {
      content.style.position = 'static'
      content.style.paddingBottom = '0'
      content.style.height = '0'
    }
  }

  return (
    <div
      id={id}
      className={cls(
        'w-full flex flex-col justify-center relative rounded-8 overflow-hidden z-1',
        { 'bg-black': type === 'video' },
        { 'h-36 border': type === 'audio' },
        { 'bg-black border-violet-3': type === 'audio' && theme === 'neutral' },
        { 'bg-white border-neutral-2': type === 'audio' && theme === 'light' },
        className
      )}
      onClick={!readyToReplyIcon && handlePlayClick}
    >
      {/* PlAY MEDIA CONTROLS */}
      <ConditionalRender condition={noStatic}>
        <ConditionalRender condition={isPlayIcon && !readyToReplyIcon}>
          <div
            className={cls(
              'absolute m-auto top-0 bottom-0 left-0 right-0 z-4 flex items-center justify-center w-26 h-26 rounded-full cursor-pointer',
              { 'bg-rgba-4': type === 'video' && theme === 'light' },
              { 'bg-transparent': type === 'video' && theme === 'neutral' },
              { 'bg-neutral-5': theme === 'neutral' },
              { hidden: type === 'audio' }
            )}
            onClick={handlePlayClick}
          >
            <Icon.PlayTriangle
              className={cls(
                'w-10 h-10 pl-2 m-auto neutral-icon',
                { 'text-neutral-5 ': theme === 'light' },
                { 'text-white': theme === 'neutral' }
              )}
            />
          </div>
        </ConditionalRender>
        <ConditionalRender condition={readyToReplyIcon}>
          <div
            className={cls(
              'group transition absolute m-auto top-0 bottom-0 left-0 right-0 z-4 px-12 py-14 flex items-center' +
                ' w-93 h-36 text-white rounded-8 cursor-pointer',
              { 'bg-neutral-6 hover:opacity-80': type === 'video' },
              { 'bg-transparent': type === 'audio' },
              { 'text-white': type === 'audio' && theme === 'neutral' },
              { 'text-violet-2': type === 'audio' && theme === 'light' }
            )}
            onClick={handleReplyClick}
          >
            <Icon.ArrowRotate className={'w-12 h-12 mr-8 transition transform group-hover:rotate-360 duration-1000'} />
            <div className={'text-14 font-bold'}>Replay</div>
          </div>
        </ConditionalRender>
      </ConditionalRender>

      {/* WITH LOOM */}
      <ConditionalRender condition={isLoom && isURLWithIframe}>
        <div id="result"></div>
      </ConditionalRender>

      <ConditionalRender condition={isLoom && !isURLWithIframe}>
        <>{isLoom && isLoomLinkLayout(url as string)}</>
      </ConditionalRender>

      {/* WITHOUT LOOM */}
      <ConditionalRender condition={!isLoom}>
        <>
          {removeButton && type === 'video' && (
            <div onClick={e => e.stopPropagation()} className={'absolute top-10 right-10 flex z-3'}>
              {removeButton}
            </div>
          )}
          <ReactPlayer
            className={cls('z-2 absolute top-0 bottom-0 left-0 right-0', { hidden: type === 'audio' }, playerClassName)}
            url={url as string}
            ref={ref => (refPlayer.current = ref)}
            playing={playing}
            loop={loop}
            volume={volume}
            muted={muted}
            playbackRate={rate}
            width="100%"
            height="100%"
            style={{ objectFit: 'cover' }}
            onReady={handleReady}
            onProgress={handleProgress}
            onEnded={handleEnded}
          />
          <PlayerControls
            className={cls(
              'absolute bottom-0 z-3',
              { hidden: readyToReplyIcon || noControls || isYouTube },
              { 'bg-black': type === 'audio' && theme === 'neutral' },
              { 'bg-transparent text-neutral-14': type === 'audio' && theme === 'light' },
              controlsClassName
            )}
            type={type}
            playing={playing}
            playedSeconds={playedSeconds}
            volume={volume.toString()}
            muted={muted}
            duration={duration}
            rate={rate}
            onPlayClick={handlePlayClick}
            onProgressChange={handleProgressTrack}
            onChangeVolumeStep={handleChangeVolumeStep}
            onPlaybackRate={handlePlaybackRate}
            onMutedVolume={handleMutedVolume}
            removeButton={removeButton}
          />
        </>
      </ConditionalRender>
    </div>
  )
})

Player.displayName = 'Player'
