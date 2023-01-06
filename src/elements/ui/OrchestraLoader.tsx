import { forwardRef, memo } from 'react'
import { ClassName } from '~types'
import cls from 'classnames'
import { Spinner } from '../svg/icons'

export type OrchestraLoaderType = 'spinner'

export type OrchestraLoaderKind = 'dark' | 'light'

export interface OrchestraLoaderProps {
  className?: ClassName
  loading?: boolean
  type?: OrchestraLoaderType
  kind?: OrchestraLoaderKind
  color?: string
}

const getSpinnerColor = (kind: OrchestraLoaderKind, color?: string) => {
  if (color) {
    return color
  }
  return cls({ '#4E4E4E': kind === 'dark', '#FFFFFF': kind === 'light' })
}

export const OrchestraLoader = memo(
  forwardRef<HTMLDivElement, OrchestraLoaderProps>((props, ref) => {
    const { className, loading = true, type = 'spinner', kind = 'dark', color } = props

    if (!loading) {
      return
    }

    switch (true) {
      case type === 'spinner':
        return (
          <Spinner
            color={getSpinnerColor(kind, color)}
            className={cls('m-auto', 'orchestra-loader-spinner', className)}
          />
        )
    }
  })
)

OrchestraLoader.displayName = 'OrchestraLoader'
