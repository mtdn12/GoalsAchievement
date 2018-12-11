import React from 'react'
import { node, func, object, bool } from 'prop-types'
import AppbarNonAuth from 'src/Components/organisms/AppbarNonAuth'
import AppbarAuth from '../../organisms/AppbarAuth'
import styles from './styles.module.scss'
import Modal from 'src/Containers/ModalManager'
import { Redirect } from 'react-router-dom'

const Template = ({
  children,
  isAuthenticated,
  profile,
  handleLogout,
  handleOpenModal,
  match,
  ...props
}) => {
  return (
    <div id={styles.pageWrap}>
      {isAuthenticated &&
        match.path === '/welcome' && <Redirect to="/dashboard" />}
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
  match: object,
}

export default Template
