import React from 'react'
import { object } from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  wrapper: { textAlign: 'center' },
  title: { fontSize: '2rem', fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: '1.1rem', color: '#fff', textTransform: 'uppercase' },
})

const LogoBox = ({ classes, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title} align="center" type="title">
        Template Pro
      </Typography>

      <Typography className={classes.subtitle} align="center">
        A product of Square Communication
      </Typography>
    </div>
  )
}

LogoBox.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(LogoBox)
