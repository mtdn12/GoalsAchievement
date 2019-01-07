import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { is } from 'immutable'
import withSaga from '../Utils/withSaga'
import { WordActions } from '../Stores/Word/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import wordSaga from '../Stores/Word/Sagas'
import { getFilter, getWords, getLoadingWords } from '../Stores/Word/Selectors'

import Word from '../Components/pages/Word'

class WordContainer extends Component {
  componentDidMount() {
    const { filter, getListWord } = this.props
    getListWord(filter.toJS())
  }
  componentWillUnmount() {
    this.props.clearListWord()
  }
  componentDidUpdate(prevProps) {
    const { filter, getListWord } = this.props
    if (!is(prevProps.filter, filter)) {
      getListWord(filter.toJS())
    }
  }
  openModalCreateWord = () => {
    const { openModal } = this.props
    const item = {
      word: '',
      description: '',
      linkMap: '',
    }
    openModal('CreateEditWordModal', {
      item,
      action: 'create',
    })
  }
  render() {
    return (
      <Word openModalCreateWord={this.openModalCreateWord} {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  words: getWords(state),
  isLoadingWords: getLoadingWords(state),
  filter: getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  getListWord: filter => dispatch(WordActions.getItemsRequest(filter)),
  clearListWord: () => dispatch(WordActions.clearItems()),
  // Open modal
  openModal: (type, props) => dispatch(ModalActions.setModal(type, props)),
  // Change filter
  setFilter: (name, value) => dispatch(WordActions.setFilter(name, value)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withWordSaga = withSaga({
  key: 'word',
  saga: wordSaga,
})

export default compose(
  withConnect,
  withWordSaga
)(WordContainer)
