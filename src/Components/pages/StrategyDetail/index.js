import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Button, Header, Progress } from 'semantic-ui-react'
import moment from 'moment'
import styles from './styles.module.scss'
import ModalPageTemplate from '../../templates/ModalPageTemplate'
import TaticInfo from '../../organisms/TaticInfo'

const StrategyDetail = ({
  item,
  isLoadingItem,
  handleGoBack,
  handleOpenModalEditStrategy,
  handleDeleteStrategyAction,
  handleOpenModalCreateTatic,
}) => {
  return (
    <ModalPageTemplate title="Strategy Detail" handleGoBack={handleGoBack}>
      {isLoadingItem && <Loader active size="big" inline="centered" />}
      {!isLoadingItem &&
        item && (
          <div id={styles.strategyWrap}>
            <div className={styles.infoWrap}>
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
              <div className={styles.item}>
                <Header as="h2" textAlign="center" color="teal">
                  {item.get('name')}
                </Header>
                <p>
                  <b className={styles.subtitle}>Time End: </b>{' '}
                  {moment(item.get('timeEnd')).format('DD/MM/YYYY')}
                </p>
                <p>
                  <b>Description: </b>
                  <br />
                  {item.get('description')}
                </p>
                <div>
                  <b
                    className={styles.subtitle}
                    style={{ marginBottom: '.5em', display: 'inline-block' }}>
                    Completed:
                  </b>
                  <Progress
                    progress
                    color="teal"
                    percent={item.get('percent')}
                  />{' '}
                </div>
              </div>
              <Button fluid color="teal" onClick={handleOpenModalCreateTatic}>
                Add Tatic
              </Button>
            </div>
            <div>
              {item.get('tatics') &&
                item.get('tatics').size > 0 &&
                item
                  .get('tatics')
                  .map(tatic => (
                    <TaticInfo item={tatic} key={tatic.get('_id')} />
                  ))}
            </div>
          </div>
        )}
    </ModalPageTemplate>
  )
}

StrategyDetail.propTypes = {
  item: object.isRequired,
  isLoadingItem: bool.isRequired,
  handleGoBack: func.isRequired,
  handleOpenModalEditStrategy: func.isRequired,
  handleDeleteStrategyAction: func.isRequired,
  handleOpenModalCreateTatic: func.isRequired,
}

export default StrategyDetail
