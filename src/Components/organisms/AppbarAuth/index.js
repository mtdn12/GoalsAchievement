import React from 'react'
import { func } from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const AppbarAuth = ({ handleLogout }) => {
  return (
    <Menu id={styles.AppbarAuth} fixed="top" borderless color="blue" inverted>
      <Menu.Item
        as={NavLink}
        to="/dashboard"
        className={styles.menuItem}
        activeClassName={styles.activeItem}>
        Dashboard
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className={styles.menuItem} onClick={handleLogout}>
          Log Out
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
AppbarAuth.propTypes = {
  handleLogout: func.isRequired,
}

export default AppbarAuth
