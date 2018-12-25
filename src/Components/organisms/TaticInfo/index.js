import React from 'react'
import { object, func } from 'prop-types'
import moment from 'moment'
import { Link, withRouter } from 'react-router-dom'
import { Progress, Label, Button, Header } from 'semantic-ui-react'
import styles from './styles.module.scss'
const TaticInfo = ({
  item,
  history,
  handleOpenModalEditTatic,
  handleDeleteTaticAction,
}) => {
  return (
    <div className={styles.taticItem}>
      <div className={styles.taticInfo}>
        <Label
          className={styles.label}
          as={Link}
          to={{
            pathname: `/tatic/${item.get('_id')}`,
            state: { from: history.location.pathname },
          }}
          color="brown"
          ribbon>
          See Detail
        </Label>
        <div className={styles.actionWrap}>
          <Button
            icon="edit"
            circular
            color="brown"
            onClick={handleOpenModalEditTatic}
          />
          <Button
            icon="delete"
            circular
            negative
            onClick={handleDeleteTaticAction}
          />
        </div>
        <Header as="h4" textAlign="center" color="brown">
          {item.get('name')}
        </Header>
        <p>{moment(item.get('timeEnd')).format('DD/MM/YYYY')}</p>
        <p>{item.get('description')}</p>
        <div>
          <Progress
            style={{ margin: 0 }}
            progress
            color="brown"
            percent={
              item.get('completedAction') &&
              (
                (item.get('completedAction') / item.get('totalAction')) *
                100
              ).toFixed(0)
            }
          />{' '}
        </div>
      </div>
    </div>
  )
}

TaticInfo.propTypes = {
  item: object.isRequired,
  history: object.isRequired,
  handleOpenModalEditTatic: func.isRequired,
  handleDeleteTaticAction: func.isRequired,
}

export default withRouter(TaticInfo)
