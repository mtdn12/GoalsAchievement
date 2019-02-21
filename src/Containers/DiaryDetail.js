import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import withSaga from '../Utils/withSaga'
import diarySaga from '../Stores/Diary/Sagas'
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
  }, [])
  const handleGoBack = () => {
    history.push('/diary')
  }
  return <DiaryDetail handleGoBack={handleGoBack} {...props} />
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

const withDiarySaga = withSaga({
  key: 'diary',
  saga: diarySaga,
})

export default compose(
  withConnect,
  withDiarySaga
)(DiaryDetailContainer)
