import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { WordActions } from '../Stores/Word/Actions'
import { string, func } from 'prop-types'
import CreateEditWordModal from '../Components/organisms/CreateEditWordModal'

class CreateEditWordModalContainer extends Component {
  handleAction = values => {
    const { action, editWord, createWord } = this.props
    switch (action) {
      case 'create':
        createWord(values)
        break
      case 'edit':
        editWord(values)
        break
      default:
    }
  }
  handleAddImage = () => {
    let input = document.querySelector('#addImage')
    input.click()
  }
  render() {
    return (
      <CreateEditWordModal
        handleAddImage={this.handleAddImage}
        handleAction={this.handleAction}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // handle Edit word
  editWord: values => dispatch(WordActions.editItemRequest(values)),
  // handle Create word
  createWord: values => dispatch(WordActions.createItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

CreateEditWordModalContainer.propTypes = {
  action: string.isRequired,
  editWord: func.isRequired,
  createWord: func.isRequired,
}

export default compose(withConnect)(CreateEditWordModalContainer)
