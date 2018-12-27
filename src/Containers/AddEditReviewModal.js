import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { BookActions } from '../Stores/Book/Actions'
import AddEditReviewModal from '../Components/organisms/AddEditReviewModal'

class AddEditReviewModalContainer extends Component {
  render() {
    return (
      <AddEditReviewModal handleAction={this.handleAction} {...this.props} />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // handle create or edit review
  handleAction: values => dispatch(BookActions.addReviewRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(AddEditReviewModalContainer)
