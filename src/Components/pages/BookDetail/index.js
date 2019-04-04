import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Button, Label } from 'semantic-ui-react'
import styles from './styles.module.scss'
import ModalPageTemplate from '../../templates/ModalPageTemplate'

const BookDetail = ({
  handleGoBack,
  item,
  isLoadingItem,
  openModalAddReview,
  openModalEditReview,
}) => {
  // console.log(item.get('review'))
  return (
    <ModalPageTemplate title="Book Detail" handleGoBack={handleGoBack}>
      {isLoadingItem && <Loader active inline="centered" size="big" />}
      {!isLoadingItem && item && (
        <div className={styles.bookWrap}>
          <div className={styles.infoWrap}>
            <p className={styles.title}>{item.get('title')}</p>
            <p className={styles.subTitle}>{item.get('author')}</p>
          </div>
          <div className={styles.reviewWrap}>
            {item.get('review') ? (
              <Button primary fluid onClick={openModalEditReview}>
                Change Review
              </Button>
            ) : (
              <Button primary fluid onClick={openModalAddReview}>
                Create Review
              </Button>
            )}
            <div className={styles.review}>
              {item.get('review') ? (
                <div>
                  <Label color="blue" ribbon>
                    {item.get('rate')}
                  </Label>
                  <pre>{item.get('review')}</pre>
                </div>
              ) : (
                <p>No review Yet</p>
              )}
            </div>
          </div>
        </div>
      )}
    </ModalPageTemplate>
  )
}

BookDetail.propTypes = {
  handleGoBack: func.isRequired,
  item: object.isRequired,
  isLoadingItem: bool.isRequired,
  openModalAddReview: func.isRequired,
  openModalEditReview: func.isRequired,
}

export default BookDetail
