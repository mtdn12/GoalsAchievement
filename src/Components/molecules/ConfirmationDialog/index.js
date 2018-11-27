import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

class ConfirmationDialog extends React.Component {
  state = {}

  componentWillMount() {}

  componentWillUpdate(nextProps) {}

  handleEntering = () => {}

  render() {
    const {
      title,
      content,
      classes,
      open,
      onClose,
      onConfirm,
      loading,
    } = this.props

    return (
      <Dialog
        /* disableBackdropClick
        disableEscapeKeyDown */
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        classes={{
          paper: classes.dialog,
        }}
        open={open}
        onClose={onClose}>
        <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{content}</Typography>
        </DialogContent>
        <DialogActions>
          {loading && <CircularProgress className={classes.progress} />}
          <Button disabled={loading} onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button disabled={loading} onClick={onConfirm} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

ConfirmationDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  classes: PropTypes.object,
}

ConfirmationDialog.defaultProps = {
  loading: false,
}
const styles = theme => ({
  dialog: {
    width: '80%',
    maxHeight: 435,
  },
  progress: { margin: `0 ${theme.spacing.unit * 2}px`, minWidth: 25 },
})

export default withStyles(styles)(ConfirmationDialog)
