import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { compose } from 'redux'
import { withSaga } from 'src/Utils'
import exampleSaga from 'src/Stores/Example/Sagas'

import { ExampleActions } from 'src/Stores/Example/Actions'
import { NotificationActions } from 'src/Stores/Notification/Actions'
import { isHot } from 'src/Stores/Example/Selectors'

import Homepage from 'src/Components/pages/Homepage'

class HomepageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTemperature()
  }

  render() {
    return <Homepage {...this.props} />
  }
}

HomepageContainer.propsTypes = {
  fetchTemperature: PropTypes.func,
}

const mapStateToProps = state => ({
  userData: state.auth.get('userData'),
  temperature: state.example.get('temperature'),
  temperatureErrorMessage: state.example.get('temperatureErrorMessage'),
  temperatureIsLoading: state.example.get('temperatureIsLoading'),
  isHot: isHot(state),
})

const mapDispatchToProps = dispatch => ({
  fetchTemperature: () => dispatch(ExampleActions.fetchTemperature()),
  openNotification: (title, message, color = 'blue') => () =>
    dispatch(NotificationActions.showNotification(title, message, color)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withExampleSaga = withSaga({
  key: 'example',
  saga: exampleSaga,
})

export default compose(
  withExampleSaga,
  withConnect
)(HomepageContainer)
