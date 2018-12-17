import React from 'react'
import { object, bool, func } from 'prop-types'
import { Loader, Progress, Button, Header } from 'semantic-ui-react'
import moment from 'moment'
import styles from './styles.module.scss'
import ModalPageTemplate from '../../templates/ModalPageTemplate'
import StrategyInfo from 'src/Containers/StrategyInfo'

class ObjectiveDetail extends React.Component {
  handleHorizontalWheel = e => {
    e.preventDefault()
    const area = document.querySelector('#horizontalWheel')
    if (e.deltaY < 0) {
      area.scrollLeft += e.deltaY
    } else {
      area.scrollLeft += e.deltaY
    }
  }
  render() {
    const {
      handleGoBack,
      item,
      isLoadingItem,
      handleOpenModalEditObjective,
      handleDeleteObjectiveAction,
      handleOpenModalCreateStrategy,
    } = this.props
    return (
      <ModalPageTemplate handleGoBack={handleGoBack} title="Objective detail">
        {isLoadingItem && <Loader active size="big" inline="centered" />}
        {!isLoadingItem &&
          item && (
            <div id={styles.objectiveWrap}>
              <div className={styles.InfoWrap}>
                <div className={styles.actionWrap}>
                  <Button
                    icon="edit"
                    circular
                    color="purple"
                    onClick={handleOpenModalEditObjective}
                  />
                  <Button
                    icon="delete"
                    circular
                    negative
                    onClick={handleDeleteObjectiveAction}
                  />
                </div>
                <div className={styles.item}>
                  <Header as="h3" textAlign="center">
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
                      color="purple"
                      percent={item.get('percent')}
                    />{' '}
                  </div>
                </div>
                <Button
                  fluid
                  color="purple"
                  onClick={handleOpenModalCreateStrategy}>
                  Add Strategy
                </Button>
              </div>
              <div
                className={styles.strategiesWrap}
                id="horizontalWheel"
                onWheel={this.handleHorizontalWheel}>
                <div className={styles.strategiesBox}>
                  {item.get('strategies') &&
                    item.get('strategies').size > 0 &&
                    item
                      .get('strategies')
                      .map(stra => (
                        <StrategyInfo item={stra} key={stra.get('_id')} />
                      ))}
                </div>
              </div>
            </div>
          )}
      </ModalPageTemplate>
    )
  }
}
ObjectiveDetail.propTypes = {
  handleGoBack: func.isRequired,
  item: object.isRequired,
  isLoadingItem: bool.isRequired,
  handleOpenModalEditObjective: func.isRequired,
  handleDeleteObjectiveAction: func.isRequired,
  handleOpenModalCreateStrategy: func.isRequired,
}
export default ObjectiveDetail
