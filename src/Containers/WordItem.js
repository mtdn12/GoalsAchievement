import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { object, func } from 'prop-types'
import { WordActions } from '../Stores/Word/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import { withRouter } from 'react-router-dom'
import '../Stores/Word/Reducers'
import { getLoadingCheck } from '../Stores/Word/Selectors'
import WordItem from '../Components/molecules/WordItem'

class WordItemContainer extends Component {
  openModalEditWord = e => {
    e.stopPropagation()
    const { item, openModal } = this.props
    const itemEdit = {
      id: item.get('_id'),
      word: item.get('word'),
      description: item.get('description'),
      linkMap: item.get('linkMap'),
      filePath: item.get('filePath'),
    }
    openModal('CreateEditWordModal', {
      item: itemEdit,
      action: 'edit',
    })
  }
  openModalDeleteWord = e => {
    e.stopPropagation()
    const { item, openModal } = this.props
    openModal('ConfirmationDialog', {
      values: item,
      title: 'Confirm Delete Word',
      content: 'Do you want to delete this Word',
      type: 'word',
    })
  }
  seeWordDetail = () => {
    const { item, history } = this.props
    history.push(`/word/${item.get('_id')}`)
  }
  handleCheckRecall = e => {
    e.stopPropagation()
    const { item, checkRecall } = this.props
    checkRecall(item.get('_id'))
  }
  render() {
    return (
      <WordItem
        openModalDeleteWord={this.openModalDeleteWord}
        openModalEditWord={this.openModalEditWord}
        seeWordDetail={this.seeWordDetail}
        handleCheckRecall={this.handleCheckRecall}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  isLoadingCheck: getLoadingCheck(state),
})

const mapDispatchToProps = dispatch => ({
  // Open modal
  openModal: (type, props) => dispatch(ModalActions.setModal(type, props)),
  // Check Recall
  checkRecall: id => dispatch(WordActions.checkRecallRequest(id)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

WordItemContainer.propTypes = {
  item: object.isRequired,
  checkRecall: func.isRequired,
  history: object.isRequired,
  openModal: func.isRequired,
}

export default compose(
  withConnect,
  withRouter
)(WordItemContainer)
