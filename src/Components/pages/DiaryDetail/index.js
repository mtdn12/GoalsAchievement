import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Button } from 'semantic-ui-react'
import styles from './styles.module.scss'
import ModalPageTemplate from '../../templates/ModalPageTemplate'

const DiaryDetail = ({
  handleGoBack,
  item,
  isLoadingItem,
  handleEditItem,
  handleDeleteItem,
}) => {
  return (
    <ModalPageTemplate title="Diary Detail" handleGoBack={handleGoBack}>
      {isLoadingItem && <Loader active inline="centered" size="big" />}
      {!isLoadingItem && (
        <div className={styles.diaryWrap}>
          <div dangerouslySetInnerHTML={{ __html: item.get('content') }} />
        </div>
      )}
      <div className={styles.btnWrap}>
        <Button
          icon="edit"
          circular
          size="massive"
          primary
          onClick={handleEditItem(item)}
        />
        <Button
          icon="delete"
          circular
          size="massive"
          color="red"
          onClick={handleDeleteItem(item)}
        />
      </div>
    </ModalPageTemplate>
  )
}

DiaryDetail.propTypes = {
  handleGoBack: func.isRequired,
  item: object.isRequired,
  isLoadingItem: bool.isRequired,
  handleEditItem: func.isRequired,
  handleDeleteItem: func.isRequired,
}

export default DiaryDetail
