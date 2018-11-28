import React from 'react'
import { func } from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const AppbarNonAuth = ({ handleOpenModal }) => {
  return (
    <Menu
      id={styles.AppbarNonAuth}
      fixed="top"
      borderless
      color="blue"
      inverted>
      <Menu.Item
        as={NavLink}
        to="/dashboard"
        className={styles.menuItem}
        activeClassName={styles.activeItem}>
        Dashboard
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          className={styles.menuItem}
          onClick={() => handleOpenModal('RegisterModal', {})}>
          Register
        </Menu.Item>
        <Menu.Item
          className={styles.menuItem}
          onClick={() => handleOpenModal('LoginModal', {})}>
          Log In
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
AppbarNonAuth.propTypes = {
  handleOpenModal: func.isRequired,
}

export default AppbarNonAuth
