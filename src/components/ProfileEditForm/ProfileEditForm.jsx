import React from 'react'
import Modal from '../../hocs/Modal/Modal'
import style from './ProfileEditForm.module.css'

const ProfileEditForm = () => {
  return (
    <Modal>
        <form action="post" method="get">
            <div className={style.main}>
                <input type="text" />
            </div>
        <div className={style.footer}>
            <button type='submit'>Submit</button>
        </div> 
        </form>
      
    </Modal>
  )
}

export default ProfileEditForm