import React from 'react'
import { object, func } from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import classNames from 'classnames'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import CommentIcon from '@material-ui/icons/Comment'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  card: {
    // marginBottom: theme.spacing.unit * 3,
  },
  paperDisable: {
    backgroundColor: '#EEE',
    margin: -15,
    padding: 15,
  },
  button: {
    margin: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  example: {
    fontStyle: 'italic',
  },
  answer: {},
})

const ResponseTemplateItem = ({
  classes,
  item,
  doEditItem,
  doUpdateData,
  doShowHideModalConfirm,
  ...props
}) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <div
          className={classNames({
            [classes.paperDisable]: !item.get('active'),
          })}>
          <div>
            <Typography className={classes.example}>
              {item.get('example')}
            </Typography>
            <Typography className={classes.answer}>
              {item.get('content')}
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => doEditItem(item)}>
          <CommentIcon
            className={classNames(classes.iconSmall, classes.leftIcon)}
          />
          Edit
        </Button>
        <Button
          color="default"
          size="small"
          onClick={doShowHideModalConfirm(true, item.get('templateId'))}>
          <DeleteIcon className={classNames(classes.iconSmall)} />
        </Button>
      </CardActions>
    </Card>
  )
}

ResponseTemplateItem.propTypes = {
  item: ImmutablePropTypes.map.isRequired,
  classes: object.isRequired,
  doEditItem: func,
  doUpdateData: func,
  doShowHideModalConfirm: func,
}

export default withStyles(styles)(ResponseTemplateItem)
