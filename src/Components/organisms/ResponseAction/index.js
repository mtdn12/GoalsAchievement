import React from 'react'
import { object, func, number } from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
// import Typography from '@material-ui/core/Typography'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
// import classNames from 'classnames'

import {
  ResponseActionTag,
  ResponseActionRespond,
  ResponseActionEscalate,
  ResponseActionActivies,
} from '../../'

const styles = theme => ({
  container: {
    position: 'relative',
  },
  content: {
    minHeight: 200,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  closeIcon: {
    position: 'absolute',
    color: '#000',
    right: -20,
    top: -20,
  },
})

class ResponseAction extends React.Component {
  state = {}

  componentWillMount() {}

  componentWillUpdate(nextProps) {}

  componentWillReceiveProps(nextProps) {}

  getHeight(index) {
    if (index === 1) return { height: 380 }
    else if (index === 2) return { height: 380 }
    else if (index === 3) return { height: 380, backgroundColor: '#EEE' }
  }

  render() {
    const { classes, item, doOpen, doClose, indexTab } = this.props

    if (!item) return <div />
    return (
      <Grid item xs={12} sm={8}>
        <Paper className={classes.container}>
          <Button
            onClick={doClose}
            mini
            variant="fab"
            aria-label="Close"
            className={classes.closeIcon}>
            <CloseIcon />
          </Button>
          <AppBar position="static" color="default">
            <Tabs
              value={indexTab}
              onChange={doOpen}
              indicatorColor="primary"
              textColor="primary"
              fullWidth>
              <Tab label="Respond" />
              <Tab label="Sentiment" />
              <Tab label="Escalate" />
              <Tab
                label={
                  <Badge
                    className={classes.padding}
                    color="secondary"
                    badgeContent={4}>
                    Activies
                  </Badge>
                }
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            slideStyle={this.getHeight(indexTab)}
            className={classes.content}
            axis={'x-reverse'}
            index={indexTab}
            /* onChangeIndex={doOpen} */
          >
            <ResponseActionRespond item={item} />
            <ResponseActionTag item={item} />
            <ResponseActionEscalate item={item} />
            <ResponseActionActivies item={item} />
          </SwipeableViews>
        </Paper>
      </Grid>
    )
  }
}

ResponseAction.propTypes = {
  item: object.isRequired,
  indexTab: number,
  classes: object.isRequired,
  doOpen: func.isRequired,
  doClose: func.isRequired,
}

export default withStyles(styles)(ResponseAction)
