import React from 'react'
import { func, string, object, bool } from 'prop-types'
import { Loader } from 'semantic-ui-react'
import styles from './styles.module.scss'
import moment from 'moment'
import cx from 'classnames'
import ModalPageTemplate from '../../templates/ModalPageTemplate'

const ActionHistory = ({ handleGoBack, histories, isLoadingHistories }) => {
  return (
    <ModalPageTemplate title="Action History" handleGoBack={handleGoBack}>
      {isLoadingHistories && <Loader inline="centered" size="big" active />}
      {!isLoadingHistories && (
        <div className={styles.historyList}>
          {histories.map(his => (
            <div
              className={cx(styles.historyItem, {
                [styles.isDone]: his.get('isDone'),
              })}
              key={his.get('_id')}>
              {his.get('action')} ----{' '}
              {moment(his.get('timeAction')).format('DD/MM/YYYY')}
            </div>
          ))}
        </div>
      )}
    </ModalPageTemplate>
  )
}

ActionHistory.propTypes = {
  handleGoBack: func.isRequired,
  histories: object.isRequired,
  isLoadingHistories: bool.isRequired,
}

export default ActionHistory
