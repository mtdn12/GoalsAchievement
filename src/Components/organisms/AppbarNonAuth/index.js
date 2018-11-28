import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const AppbarNonAuth = () => {
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
        activeClassName={styles.activeItem}>
        Dashboard
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Sign Up</Menu.Item>
        <Menu.Item>Sign In</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default AppbarNonAuth
