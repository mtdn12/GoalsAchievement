import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'

export default ({ key, saga }) => WrappedComponent => {
  class SagaInjector extends PureComponent {
    static contextTypes = {
      store: PropTypes.object.isRequired,
    }

    static displayName = `withSaga(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    componentWillMount() {
      injectSaga(this.context.store, { key, saga })
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatics(SagaInjector, WrappedComponent)
}

/**
 * Inject saga function to rootSaga
 * Ignore if the `key` is duplicated
 *
 * @author Hai Nguyen <hai.nguyen@dsquare.com.vn>
 * @export
 * @param {any} store Redux Store
 * @param {any} { key, saga }
 */
export function injectSaga(store, { key, saga }) {
  if (store.injectedSagas.includes(key)) return
  store.injectedSagas.push(key)
  store.runSaga(saga)
}
