
import * as ps__redux from 'redux'

import m__reducer from './reducer'

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ps__redux.compose

const reducer = m__reducer

const enhancer = compose()

export default (state) => {
	const store = ps__redux.createStore(reducer, state, enhancer)
	if (module.hot) {
		module.hot.accept('./reducer', () => {
			store.replaceReducer(reducer)
		})
	}
	return store
}
