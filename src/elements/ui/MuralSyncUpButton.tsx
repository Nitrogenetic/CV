import { useReactiveVar } from '@apollo/client'
import { useLocation } from '@reach/router'
import cls from 'classnames'
import { FC, memo, useEffect } from 'react'
import { checkMuralAuth } from '~cache'
import { useUrlSearchParams } from '~hooks'
import { ClassName } from '~types'
import { Button, ButtonProps } from '~ui'
import * as Icon from '~icons'

// import { MuralAuthModal } from '~modals'

export interface MuralSyncUpButtonProps {
  className?: ClassName
  onClick(): void
}

const MuralSyncUpButton: FC<MuralSyncUpButtonProps> = memo(props => {
  const { className, onClick } = props

  const isMuralAuth = useReactiveVar(checkMuralAuth)

  const { href } = useLocation()

  const query = 'mural'
  const queryValue = 'syncup'

  const { getUrlSearchParam, deleteUrlSearchParam } = useUrlSearchParams(query)

  const showMuralOAuthDialog = getUrlSearchParam() === queryValue

  useEffect(() => {
    if (showMuralOAuthDialog) {
      onClick()
      deleteUrlSearchParam(query)
    }
  }, [showMuralOAuthDialog])

  const redirect_uri = href + `?${query}=${queryValue}`
  const muralUrl = `https://pigeon.falco-api.c66.me/auth/mural/link?redirect_uri=${redirect_uri}&token=${localStorage.getItem(
    'token'
  )}`

  let buttonProps: Omit<ButtonProps, 'children' | 'ref'> = {
    className: cls(className),
    kind: 'primary',
    to: muralUrl
  }

  if (isMuralAuth) {
    buttonProps = {
      ...buttonProps,
      to: undefined,
      onClick
    }
  }

  return (
    <>
      {/*<MuralAuthModal show={show} onHide={setShow} />*/}
      <Button {...buttonProps}>
        <Icon.Calendar className={'w-12 h-12 mr-8'} />
        Sync up with Mural
      </Button>
    </>
  )
})

MuralSyncUpButton.displayName = 'MuralSyncUpButton'

export { MuralSyncUpButton }
