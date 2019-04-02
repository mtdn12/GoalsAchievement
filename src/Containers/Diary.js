import React, { Component, useEffect } from 'react'
import { func, object } from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { DiaryActions } from '../Stores/Diary/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import '../Stores/Diary/Sagas'
import '../Stores/Diary/Reducers'
import Diary from '../Components/pages/Diary'
import {
  getDiaries,
  getFilter,
  getLoadingItems,
} from '../Stores/Diary/Selectors'

const DiaryContainer = ({
  getDiaries,
  clearDiaries,
  openModal,
  filter,
  ...props
}) => {
  useEffect(() => {
    getDiaries()
    return () => {
      clearDiaries()
    }
  }, [filter])
  const openModalCreateDiary = () => {
    const item = {
      content: '',
    }
    openModal('CreateEditDiaryModal', {
      item,
      action: 'create',
    })
  }
  return <Diary openModalCreateDiary={openModalCreateDiary} {...props} />
}

const mapStateToProps = state => ({
  items: getDiaries(state),
  filter: getFilter(state),
  isLoadingItems: getLoadingItems(state),
})

const mapDispatchToProps = dispatch => ({
  // Get list and clear todos
  getDiaries: () => dispatch(DiaryActions.getItemsRequest()),
  clearDiaries: () => dispatch(DiaryActions.clearItems()),
  // open modal
  openModal: (type, props) => dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

DiaryContainer.propTypes = {
  getDiaries: func.isRequired,
  clearDiaries: func.isRequired,
  openModal: func.isRequired,
  filter: object.isRequired,
}

export default compose(withConnect)(DiaryContainer)
