import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { func, object } from 'prop-types'
import '../Stores/Diary/Sagas'
import '../Stores/Diary/Reducers'
import { DiaryActions } from '../Stores/Diary/Actions'
import { getLoadingItem, getDiary } from '../Stores/Diary/Selectors'
import { ModalActions } from '../Stores/Modal/Actions'
import DiaryDetail from '../Components/pages/DiaryDetail'

const DiaryDetailContainer = ({
  match,
  history,
  getDiaryDetail,
  clearDiaryDetail,
  openModal,
  ...props
}) => {
  useEffect(() => {
    getDiaryDetail(match.params.id)
    return () => {
      clearDiaryDetail()
    }
  }, [getDiaryDetail, match.params.id])
  const handleGoBack = () => {
    history.push('/diary')
  }
  const handleEditItem = values => () => {
    const item = {
      content: values.get('content'),
      id: values.get('_id'),
    }
    openModal('CreateEditDiaryModal', {
      item,
      action: 'edit',
    })
  }

  const handleDeleteItem = item => () => {
    openModal('ConfirmationDialog', {
      content: 'Are you sure to delete this diary?',
      title: 'Delete Diary',
      values: item,
      type: 'deleteDiary',
    })
  }
  return (
    <DiaryDetail
      handleDeleteItem={handleDeleteItem}
      handleEditItem={handleEditItem}
      handleGoBack={handleGoBack}
      {...props}
    />
  )
}

const mapStateToProps = state => ({
  item: getDiary(state),
  isLoadingItem: getLoadingItem(state),
})

const mapDispatchToProps = dispatch => ({
  getDiaryDetail: id => dispatch(DiaryActions.getItemRequest(id)),
  // clear item
  clearDiaryDetail: () => dispatch(DiaryActions.clearItem()),
  // openModal
  openModal: (type, props) => dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
DiaryDetailContainer.propTypes = {
  match: object.isRequired,
  history: object.isRequired,
  getDiaryDetail: func.isRequired,
  clearDiaryDetail: func.isRequired,
  openModal: func.isRequired,
}

export default compose(withConnect)(DiaryDetailContainer)
