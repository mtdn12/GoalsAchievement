import React from 'react'
import styles from './styles.module.scss'
import moment from 'moment'
import { object, func } from 'prop-types'
import { Progress, Header, Button, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import StrategyInfo from 'src/Containers/StrategyInfo'

const ObjectiveInfo = ({
  item,
  handleOpenModalEditObjective,
  handleDeleteObjectiveAction,
  history,
}) => {
  return (
    <div id={styles.objectiveItem}>
      <div className={styles.generalInfo}>
        <Label
          className={styles.label}
          as={Link}
          to={{
            pathname: `/objective/${item.get('_id')}`,
            state: { from: history.location.pathname },
          }}
          color="purple"
          ribbon>
          See Detail
        </Label>
        <div className={styles.actionWrap}>
          <Button
            icon="edit"
            circular
            primary
            onClick={handleOpenModalEditObjective}
          />
          <Button
            icon="delete"
            circular
            negative
            onClick={handleDeleteObjectiveAction}
          />
        </div>
        <Header as="h4" textAlign="center" color="purple">
          {item.get('name')}
        </Header>
        <p>{moment(item.get('timeEnd')).format('DD/MM/YYYY')}</p>
        <p>{item.get('description')}</p>
        <div>
          <Progress
            style={{ margin: 0 }}
            progress
            color="purple"
            percent={item.get('perCent') && item.get('perCent').toFixed(0)}
          />{' '}
        </div>
      </div>
      <div className={styles.strategiesWrap}>
        {item.get('strategiesDetail') &&
          item.get('strategiesDetail').size > 0 &&
          item
            .get('strategiesDetail')
            .map(obj => <StrategyInfo item={obj} key={obj.get('_id')} />)}
      </div>
    </div>
  )
}

ObjectiveInfo.propTypes = {
  item: object.isRequired,
  handleOpenModalEditObjective: func.isRequired,
  handleDeleteObjectiveAction: func.isRequired,
  history: object.isRequired,
}

export default ObjectiveInfo
