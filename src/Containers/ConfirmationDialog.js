import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { GoalActions } from '../Stores/Goal/Actions'
import { ObjectiveActions } from '../Stores/Objective/Actions'
import { StrategyActions } from '../Stores/Strategy/Actions'
import { TaticActions } from '../Stores/Tatic/Actions'
import { ActionActions } from '../Stores/Action/Actions'
import { BookActions } from '../Stores/Book/Actions'
import { WordActions } from '../Stores/Word/Actions'
import ConfirmationDialog from '../Components/molecules/ConfirmationDialog'

class ConfirmationDialogContainer extends Component {
  handleConfirm = () => {
    const {
      values,
      match,
      type,
      handleDeleteGoal,
      handleDeleteObjective,
      handleDeleteStrategy,
      handleDeleteTatic,
      handleDeleteAction,
      deleteBook,
      deleteWord,
    } = this.props
    switch (type) {
      case 'goal':
        console.log('goese here')
        handleDeleteGoal(values, match)
        break
      case 'objective':
        handleDeleteObjective(values, match)
        break
      case 'strategy':
        handleDeleteStrategy(values, match)
        break
      case 'tatic':
        handleDeleteTatic(values, match)
        break
      case 'action':
        handleDeleteAction(values)
        break
      case 'book':
        deleteBook(values)
        break
      case 'word':
        deleteWord(values)
        break
      default:
    }
  }
  render() {
    return <ConfirmationDialog onConfirm={this.handleConfirm} {...this.props} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  handleDeleteGoal: (values, match) =>
    dispatch(GoalActions.deleteItemRequest(values, match)),
  handleDeleteObjective: (values, match) =>
    dispatch(ObjectiveActions.deleteItemRequest(values, match)),
  handleDeleteStrategy: (values, match) =>
    dispatch(StrategyActions.deleteItemRequest(values, match)),
  handleDeleteTatic: (values, match) =>
    dispatch(TaticActions.deleteItemRequest(values, match)),
  handleDeleteAction: values =>
    dispatch(ActionActions.deleteItemRequest(values)),
  deleteBook: values => dispatch(BookActions.deleteItemRequest(values)),
  // Delete word
  deleteWord: values => dispatch(WordActions.deleteItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(ConfirmationDialogContainer)
