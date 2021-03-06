import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // Show notification with message
    showNotification: ['title', 'message', 'color'],
    // Hide Notification
    hideNotification: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const NotificationTypes = Types
export const NotificationActions = Creators
