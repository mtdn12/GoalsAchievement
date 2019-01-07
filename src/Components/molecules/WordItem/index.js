import React from 'react'
import { Button } from 'semantic-ui-react'
import { object, func } from 'prop-types'
import styles from './styles.module.scss'
import moment from 'moment'

const WordItem = ({
  item,
  openModalEditWord,
  openModalDeleteWord,
  seeWordDetail,
  handleCheckRecall,
  isLoadingCheck,
}) => {
  return (
    <div className={styles.itemWrap} onClick={seeWordDetail}>
      <p>{item.get('word')}</p>
      <pre>{item.get('description')}</pre>
      <p>Next recall: {moment(item.get('nextRecall')).format('DD-MM-YYYY')}</p>
      <div className={styles.actionWrap}>
        <Button
          icon="checkmark"
          primary
          circular
          onClick={handleCheckRecall}
          loading={isLoadingCheck.get(item.get('_id'))}
          disabled={isLoadingCheck.get(item.get('_id'))}
        />
        <Button icon="edit" primary circular onClick={openModalEditWord} />
        <Button icon="delete" negative circular onClick={openModalDeleteWord} />
      </div>
    </div>
  )
}
WordItem.propTypes = {
  item: object.isRequired,
  openModalEditWord: func.isRequired,
  openModalDeleteWord: func.isRequired,
  seeWordDetail: func.isRequired,
  handleCheckRecall: func.isRequired,
  isLoadingCheck: object.isRequired,
}

export default WordItem
