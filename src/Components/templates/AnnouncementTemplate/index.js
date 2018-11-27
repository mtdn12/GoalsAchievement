import React from 'react'
import { node, object } from 'prop-types'
import injectSheet from 'react-jss'

const styles = {}

const AnnoucementTemplate = ({ classes, children, ...props }) => {
  return (
    <div className={classes.wrapper} {...props}>
      {children}
    </div>
  )
}

AnnoucementTemplate.propTypes = {
  children: node,
  classes: object,
}

export default injectSheet(styles)(AnnoucementTemplate)
