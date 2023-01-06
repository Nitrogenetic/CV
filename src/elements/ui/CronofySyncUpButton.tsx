import { useReactiveVar } from '@apollo/client'
import { useLocation } from '@reach/router'
import cls from 'classnames'
import React, { memo, useEffect } from 'react'
import { checkCronofyAuth } from '~cache'
import { useUrlSearchParams } from '~hooks'
import * as Icon from '~icons'
import { ClassName } from '~types'
import { Button } from '~ui'

export interface CronofySyncUpButtonProps {
  className?: ClassName
  onViewCronofyCalendarsDialog?: (value: boolean) => void
}

export const CronofySyncUpButton: React.FC<CronofySyncUpButtonProps> = memo(props => {
  const { className, onViewCronofyCalendarsDialog = () => null } = props

  const isCronofyAuth = useReactiveVar(checkCronofyAuth)

  const { href } = useLocation()

  const query = 'cronofy'
  const queryValue = 'syncup'

  const { getUrlSearchParam, deleteUrlSearchParam } = useUrlSearchParams(query)

  const showCronofyCalendarsDialog = getUrlSearchParam() === queryValue

  useEffect(() => {
    if (showCronofyCalendarsDialog) {
      onViewCronofyCalendarsDialog(true)
      deleteUrlSearchParam(query)
    }
  }, [showCronofyCalendarsDialog])

  const redirect_uri = href + `?${query}=${queryValue}`

  const cronofyUrl = `https://api.falco.team/auth/cronofy/link?redirect_uri=${redirect_uri}/callback&token=${localStorage.getItem(
    'token'
  )}`

  // there were button props instead of any
  let buttonProps: Omit<any, 'children' | 'ref'> = {
    className: cls(className),
    kind: 'violet',
    to: cronofyUrl,
    target: '_parent'
  }

  if (isCronofyAuth) {
    buttonProps = {
      ...buttonProps,
      to: undefined,
      onClick: () => onViewCronofyCalendarsDialog(true)
    }
  }

  return (
    <>
      <Button {...buttonProps} isRoutingLink={false}>
        <Icon.Cronofy className={'w-16 h-16 mr-8'} />
        {isCronofyAuth ? 'Import events' : 'Connect your Calendar'}
      </Button>
    </>
  )
})

CronofySyncUpButton.displayName = 'CronofySyncUpButton'
