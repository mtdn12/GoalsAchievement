import { put, call, all, takeLatest } from 'redux-saga/effects'
import { ExampleActions, ExampleTypes } from 'src/Stores/Example/Actions'
import { NotificationActions } from 'src/Stores/Notification/Actions'
import { WeatherService } from 'src/Services/WeatherService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch the weather temperature.
 * Feel free to remove it.
 */
function* fetchTemperature() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchTemperatureLoading())

  // Fetch the temperature from an API
  const temperature = yield call(WeatherService.fetchTemperature)

  if (temperature) {
    yield put(ExampleActions.fetchTemperatureSuccess(temperature))

    yield put(NotificationActions.showNotification('', 'Success', 'blue'))
  } else {
    yield put(ExampleActions.fetchTemperatureFailure())
    yield put(
      NotificationActions.showNotification(
        '',
        'There was an error while fetching the temperature.',
        'yellow'
      )
    )
  }
}

function* watcher() {
  yield all([takeLatest(ExampleTypes.FETCH_TEMPERATURE, fetchTemperature)])
}

export default watcher
