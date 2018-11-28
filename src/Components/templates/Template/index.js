import React from 'react'
import AppbarNonAuth from 'src/Components/organisms/AppbarNonAuth'
import styles from './styles.module.scss'
import Modal from 'src/Containers/ModalManager'

const Template = ({ children, isAuth, handleOpenModal, ...props }) => {
  return (
    <div id={styles.pageWrap}>
      {!isAuth && <AppbarNonAuth handleOpenModal={handleOpenModal} />}
      <main className={styles.mainContent}>{children}</main>
      <Modal />
    </div>
  )
}

export default Template
