import React, { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

interface ModalCloseButtonProps {
  icon: ReactNode
  onClick?: () => void
}

const ModalCloseButton = ({ icon, onClick }: ModalCloseButtonProps) => (
  <div className="flex justify-end">
    <button className="appearance-none m-3" type="button" onClick={onClick}>
      {icon}
    </button>
  </div>
)

export interface ModalProps {
  show?: boolean
  onHideClick?: () => void
  children: ReactNode
  className?: string
}

export const Modal = ({
  show = false,
  onHideClick,
  children,
  className,
  ...rest
}: ModalProps) => {
  return (
    <div className={`relative ${!show && 'hidden'}`}>
      <div
        className={twMerge(
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[100vw] max-h-[100vh] overflow-auto z-[1050] bg-white rounded',
          className,
        )}
        {...rest}
      >
        <ModalCloseButton onClick={onHideClick} icon={<MdClose size={20} />} />
        {children}
      </div>
      {show && (
        <div
          onClick={onHideClick}
          className="
            fixed
            top-0
            bottom-0
            left-0
            right-0
            z-[9999999]
            bg-black
            opacity-50
            transition-opacity
          "
          {...rest}
        />
      )}
    </div>
  )
}

export default Modal
