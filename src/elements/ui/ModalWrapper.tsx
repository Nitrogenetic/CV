import { Dialog as DialogComponent, Transition } from '@headlessui/react'
import cls from 'classnames'
import React, { FC, Fragment, PropsWithChildren, Ref } from 'react'
import { OrchestraButton, OrchestraButtonProps } from './OrchestraButton'
import { ClassName } from '~types'
import * as Icons from '../svg/icons/EXPORT'

type ModalSizeType = 'small' | 'medium' | 'large'

export interface DialogProps {
  className?: ClassName
  show: boolean
  title: string
  titleClassName?: ClassName
  childrenClassName?: ClassName
  onHide: () => void
  size: ModalSizeType
  overlayClasses?: ClassName
  primaryButtonProps?: ControlButtonProps
  secondaryButtonProps?: ControlButtonProps
  tertiaryButtonProps?: ControlButtonProps
}

type ControlButtonProps = Omit<OrchestraButtonProps, 'kind'> & { ref?: Ref<HTMLButtonElement> }

const ModalWrapper: FC<PropsWithChildren<DialogProps>> = props => {
  const {
    className,
    show,
    children,
    title,
    titleClassName,
    onHide,
    size = 'small',
    overlayClasses,
    primaryButtonProps,
    secondaryButtonProps,
    tertiaryButtonProps
  } = props

  return (
    <Transition.Root as={Fragment} show={show}>
      <DialogComponent as="div" className={cls('flex fixed inset-0 z-1001', className)} onClose={onHide}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogComponent.Overlay className={cls('fixed inset-0', overlayClasses || 'opacity-60 bg-black')} />
        </Transition.Child>

        <Transition.Child
          as={'div'}
          enter="transform transition-all ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transform transition-all ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className={cls(getModalMaxWidth(size), 'flex flex-1 z-1 h-fit m-auto')}
        >
          <div
            className={cls(getModalWidth(size), 'bg-white mx-auto rounded-16 h-fit max-h-screen overflow-auto')}
            tabIndex={0}
          >
            <div className={'w-full py-24 flex items-center'}>
              <h2 className={cls(titleClassName)}>{title || 'Title'}</h2>
              <Icons.Times className={'w-12 h-12 cursor-pointer ml-auto'} onClick={onHide} />
            </div>
            <div className="pb-24">
              {children}
              {(primaryButtonProps || secondaryButtonProps || tertiaryButtonProps) && (
                <div className={'py-24 flex items-center'}>
                  {tertiaryButtonProps && (
                    <OrchestraButton
                      kind={'ghost'}
                      {...tertiaryButtonProps}
                      className={cls('mr-auto', tertiaryButtonProps.className)}
                    />
                  )}

                  {secondaryButtonProps && (
                    <OrchestraButton
                      kind={'secondary'}
                      {...secondaryButtonProps}
                      className={cls('ml-auto', secondaryButtonProps.className)}
                    />
                  )}

                  {primaryButtonProps && (
                    <OrchestraButton
                      kind={'primary'}
                      {...primaryButtonProps}
                      className={cls(secondaryButtonProps ? 'ml-8' : 'ml-auto', primaryButtonProps.className)}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </Transition.Child>
      </DialogComponent>
    </Transition.Root>
  )
}

const getModalMaxWidth = (size: ModalSizeType) => {
  switch (size) {
    case 'small':
      return 'max-w-400'
    case 'medium':
      return 'max-w-600'
    case 'large':
      return 'max-w-800'
  }
}
const getModalWidth = (size: ModalSizeType) => {
  switch (size) {
    case 'small':
      return 'w-400 px-24'
    case 'medium':
      return 'w-600 px-24'
    case 'large':
      return 'w-800 px-40'
  }
}

export { ModalWrapper }
