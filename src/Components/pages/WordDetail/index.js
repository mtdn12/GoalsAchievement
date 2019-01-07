import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Button, Label, Image } from 'semantic-ui-react'
import styles from './styles.module.scss'
import ModalPageTemplate from '../../templates/ModalPageTemplate'

const WordDetail = ({ handleGoBack, item, isLoadingItem }) => {
  return (
    <ModalPageTemplate title="Word Detail" handleGoBack={handleGoBack}>
      {isLoadingItem && <Loader active inline="centered" size="big" />}
      {!isLoadingItem &&
        item && (
          <div>
            <Image fluid src={item.get('linkMap')} />
          </div>
        )}
    </ModalPageTemplate>
  )
}

WordDetail.propTypes = {
  handleGoBack: func.isRequired,
  item: object.isRequired,
  isLoadingItem: bool.isRequired,
}

export default WordDetail
