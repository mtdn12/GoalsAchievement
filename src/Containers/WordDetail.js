import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { WordActions } from '../Stores/Word/Actions'
import wordSaga from '../Stores/Word/Sagas'
import { getWord, getLoadingWord } from '../Stores/Word/Selectors'

import WordDetail from '../Components/pages/WordDetail'

class WordDetailContainer extends Component {
  componentDidMount() {
    const { match, getItemRequest } = this.props
    getItemRequest(match.params.id)
  }
  componentWillUnmount() {
    // Clear item when component unmount
    const { clearItem } = this.props
    clearItem()
  }
  handleGoBack = () => {
    const { history } = this.props
    history.push('/word')
  }
  render() {
    return <WordDetail handleGoBack={this.handleGoBack} {...this.props} />
  }
}

const mapStateToProps = state => ({
  item: getWord(state),
  isLoadingItem: getLoadingWord(state),
})

const mapDispatchToProps = dispatch => ({
  // get item request
  getItemRequest: id => dispatch(WordActions.getItemRequest(id)),
  // clear item
  clearItem: () => dispatch(WordActions.clearItem()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withWordSaga = withSaga({
  key: 'book',
  saga: wordSaga,
})

export default compose(
  withConnect,
  withWordSaga
)(WordDetailContainer)
