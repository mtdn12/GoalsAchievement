import React from 'react'
import { node, func, object, bool } from 'prop-types'
import AppbarNonAuth from 'src/Components/organisms/AppbarNonAuth'
import AppbarAuth from '../../organisms/AppbarAuth'
import styles from './styles.module.scss'
import Modal from 'src/Containers/ModalManager'
import { Redirect } from 'react-router-dom'

const Template = ({
  children,
  auth,
  handleLogout,
  handleOpenModal,
  match,
  ...props
}) => {
  return (
    <div id={styles.pageWrap}>
      {auth && match.path === '/welcome' && <Redirect to="/book" />}
      {!auth && <AppbarNonAuth handleOpenModal={handleOpenModal} />}
      {auth && <AppbarAuth handleLogout={handleLogout} />}
      <main className={styles.mainContent}>{children}</main>
      <Modal />
    </div>
  )
}

Template.propTypes = {
  children: node,
  auth: object,
  handleLogout: func,
  handleOpenModal: func,
  match: object,
}

export default Template
