import React from 'react'
import { object, func } from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Progress, Label, Button, Header } from 'semantic-ui-react'
import styles from './styles.module.scss'
import TaticInfo from 'src/Containers/TaticInfo'

const StrategyInfo = ({
  item,
  history,
  handleOpenModalEditStrategy,
  handleDeleteStrategyAction,
}) => {
  return (
    <div className={styles.strategyItem}>
      <div className={styles.strategyInfo}>
        <Label
          className={styles.label}
          as={Link}
          to={{
            pathname: `/strategy/${item.get('_id')}`,
            state: { from: history.location.pathname },
          }}
          color="teal"
          ribbon>
          See Detail
        </Label>
        <div className={styles.actionWrap}>
          <Button
            icon="edit"
            circular
            color="teal"
            onClick={handleOpenModalEditStrategy}
          />
          <Button
            icon="delete"
            circular
            negative
            onClick={handleDeleteStrategyAction}
          />
        </div>
        <Header as="h4" textAlign="center" color="teal">
          {item.get('name')}
        </Header>
        <p>{moment(item.get('timeEnd')).format('DD/MM/YYYY')}</p>
        <p>{item.get('description')}</p>
        <div>
          <Progress
            style={{ margin: 0 }}
            progress
            color="teal"
            percent={item.get('perCent') && item.get('perCent').toFixed(0)}
          />{' '}
        </div>
      </div>
      <div className={styles.taticsWrap}>
        {item.get('taticsDetail') &&
          item.get('taticsDetail').size > 0 &&
          item
            .get('taticsDetail')
            .map(obj => <TaticInfo item={obj} key={obj.get('_id')} />)}
      </div>
    </div>
  )
}

StrategyInfo.propTypes = {
  item: object.isRequired,
  history: object.isRequired,
  handleOpenModalEditStrategy: func.isRequired,
  handleDeleteStrategyAction: func.isRequired,
}

export default StrategyInfo
