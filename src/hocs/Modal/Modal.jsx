import React from 'react'
import style from './Modal.module.css'
import {GrClose} from 'react-icons/gr'

const Modal = ({children}) => {
  return (
    <div className={style.modalbackdrop}>
        <div className={style.modal}>
        <div className={style.header}>header
        <span><GrClose/></span>
        </div>
          {children}
        </div>
    </div>
  )
}

export default Modal