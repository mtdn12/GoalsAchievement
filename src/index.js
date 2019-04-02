import React from 'react'
import ReactDOM from 'react-dom'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { PersistGate } from 'redux-persist/lib/integration/react'

// import 'core-js/es6/promise'
// import 'core-js/es6/set'
// import 'core-js/es6/map'

// import 'typeface-roboto'
import 'semantic-ui-css/semantic.min.css'

import createStore from 'src/Stores/CreateStore'

// import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from 'src/Components/App'
import firebase, { FirebaseContext } from './Stores/Firebase'

// const initialState = Immutable.Map()
const history = createHashHistory()

async function init() {
  // const store = await configureStore(initialState, history)
  const store = createStore(history)

  const MOUNT_NODE = document.getElementById('root')

  const render = () =>
    ReactDOM.render(
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={store.persistor}>
          <ConnectedRouter history={history}>
            <FirebaseContext.Provider value={firebase}>
              <App />
            </FirebaseContext.Provider>
          </ConnectedRouter>
        </PersistGate>
      </Provider>,
      MOUNT_NODE
    )

  if (module.hot) {
    module.hot.accept('src/Components/App', () => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE)
      render()
    })
  }
  firebase.onIdTokenListener()

  render()
}

init()

registerServiceWorker()
