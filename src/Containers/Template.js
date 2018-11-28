import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Template from 'src/Components/templates/Template'

class TemplateContainer extends Component {
  render() {
    return <Template {...this.props} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(TemplateContainer)
