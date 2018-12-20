import React from 'react'
import { object, bool, func } from 'prop-types'
import { Loader, Button, Progress, Header } from 'semantic-ui-react'
import moment from 'moment'
import styles from './styles.module.scss'
import ModalPageTemplate from '../../templates/ModalPageTemplate'

const TaticDetail = ({
  item,
  isLoadingItem,
  handleGoBack,
  handleOpenModalCreateAction,
  actions,
  isLoadingActions,
  handleOpenModalEditAction,
  handleDeleteAction,
}) => {
  return (
    <ModalPageTemplate title="Tatic detail" handleGoBack={handleGoBack}>
      {isLoadingItem && <Loader active size="big" inline="centered" />}
      {!isLoadingItem && (
        <div id={styles.taticDetail}>
          <div className={styles.infoWrap}>
            <div className={styles.item}>
              <Header as="h2" textAlign="center" color="brown">
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
                  color="brown"
                  percent={item.get('percent')}
                />{' '}
              </div>
            </div>
          </div>
          <div className={styles.acionWrap}>
            <Button color="brown" onClick={handleOpenModalCreateAction}>
              Create Action
            </Button>
            <div className={styles.actionList}>
              {isLoadingActions && (
                <Loader active size="medium" inline="centered" />
              )}
              {!isLoadingActions &&
                (actions && actions.size > 0 ? (
                  actions.map(ac => (
                    <div key={ac.get('_id')} className={styles.actionItem}>
                      <p>{ac.get('action')}</p>
                      <div>
                        <Button
                          icon="edit"
                          circular
                          color="brown"
                          onClick={handleOpenModalEditAction({
                            id: ac.get('_id'),
                            taticId: ac.get('tatic'),
                            action: ac.get('action'),
                          })}
                        />
                        <Button
                          icon="delete"
                          circular
                          negative
                          onClick={handleDeleteAction(ac)}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No actions exist</p>
                ))}
            </div>
          </div>
          <Button color="brown" fluid>
            Show History
          </Button>
        </div>
      )}
    </ModalPageTemplate>
  )
}

TaticDetail.propTypes = {
  item: object.isRequired,
  isLoadingItem: bool.isRequired,
  handleGoBack: func.isRequired,
  handleOpenModalCreateAction: func.isRequired,
  actions: object.isRequired,
  isLoadingActions: bool.isRequired,
  handleOpenModalEditAction: func.isRequired,
  handleDeleteAction: func.isRequired,
}

export default TaticDetail
