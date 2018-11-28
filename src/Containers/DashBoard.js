import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import DashBoard from 'src/Components/pages/DashBoard'

class DashBoardContainer extends Component {
  render() {
    return <DashBoard {...this.props} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(DashBoardContainer)
