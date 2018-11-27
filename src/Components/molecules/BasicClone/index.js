import React from 'react'
import { object } from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({})

const BasicClone = ({ classes, ...props }) => {
  return <div />
}

BasicClone.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(BasicClone)
