import React from 'react'
import { node } from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({})

const PrintingTemplate = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

PrintingTemplate.propTypes = {
  children: node,
}

export default withStyles(styles)(PrintingTemplate)
