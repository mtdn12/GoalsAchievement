import React from 'react'
import { NavLink } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'

export const MainMenu = ({ classes, ...props }) => {
  return (
    <div>
      <ListItem button>
        <NavLink exact style={{ display: 'flex' }} to={'/'}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </NavLink>
      </ListItem>
      <ListItem button>
        <NavLink exact style={{ display: 'flex' }} to={'/template/response'}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="List Items" />
        </NavLink>
      </ListItem>
    </div>
  )
}

export const SecondaryMenu = ({ classes, ...props }) => {
  return (
    <div>
      <ListItem button>
        <NavLink exact style={{ display: 'flex' }} to={'/'}>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </NavLink>
      </ListItem>
    </div>
  )
}
