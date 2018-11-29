import React from 'react'
import { node, func, object, bool } from 'prop-types'
import AppbarNonAuth from 'src/Components/organisms/AppbarNonAuth'
import AppbarAuth from '../../organisms/AppbarAuth'
import styles from './styles.module.scss'
import Modal from 'src/Containers/ModalManager'

const Template = ({
  children,
  isAuthenticated,
  profile,
  handleLogout,
  handleOpenModal,
  ...props
}) => {
  return (
    <div id={styles.pageWrap}>
      {!isAuthenticated && <AppbarNonAuth handleOpenModal={handleOpenModal} />}
      {isAuthenticated && <AppbarAuth handleLogout={handleLogout} />}
      <main className={styles.mainContent}>{children}</main>
      <Modal />
    </div>
  )
}

Template.propTypes = {
  children: node,
  isAuthenticated: bool,
  profile: object,
  handleLogout: func,
  handleOpenModal: func,
}

export default Template
