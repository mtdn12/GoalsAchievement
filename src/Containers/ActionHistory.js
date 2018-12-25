import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { TaticActions } from '../Stores/Tatic/Actions'
import taticSaga from '../Stores/Tatic/Sagas'
import { getHistories, getLoadingHistories } from '../Stores/Tatic/Selectors'
import ActionHistory from '../Components/pages/ActionHistory'

class ActionHistoryContainer extends Component {
  componentDidMount() {
    const { getHistories, match } = this.props
    getHistories(match.params.taticId)
  }
  componentWillUnmount() {
    this.props.clearHistories()
  }
  handleGoBack = () => {
    const { history, match } = this.props
    history.push(`/tatic/${match.params.taticId}`)
  }
  render() {
    return <ActionHistory handleGoBack={this.handleGoBack} {...this.props} />
  }
}
const mapStateToProps = state => {
  return {
    histories: getHistories(state),
    isLoadingHistories: getLoadingHistories(state),
  }
}

const mapDispatchToProps = dispatch => ({
  // get list hisoty
  getHistories: id => dispatch(TaticActions.getHistoriesRequest(id)),
  // clear list History
  clearHistories: () => dispatch(TaticActions.clearHistories()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withTaticSaga = withSaga({
  key: 'tatic',
  saga: taticSaga,
})

export default compose(
  withTaticSaga,
  withConnect
)(ActionHistoryContainer)
