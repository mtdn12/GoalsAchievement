import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Button, Label } from 'semantic-ui-react'
import styles from './styles.module.scss'
import ModalPageTemplate from '../../templates/ModalPageTemplate'

const DiaryDetail = ({ handleGoBack, item, isLoadingItem }) => {
  return (
    <ModalPageTemplate title="Diary Detail" handleGoBack={handleGoBack}>
      {isLoadingItem && <Loader active inline="centered" size="big" />}
      {!isLoadingItem && (
        <div className={styles.bookWrap}>
          <h1>Diary detail</h1>
        </div>
      )}
    </ModalPageTemplate>
  )
}

DiaryDetail.propTypes = {
  handleGoBack: func.isRequired,
  item: object.isRequired,
  isLoadingItem: bool.isRequired,
}

export default DiaryDetail
