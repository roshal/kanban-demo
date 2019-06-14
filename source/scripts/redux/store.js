
import * as ps__redux from 'redux'

import m__reducer from './reducer'

import * as ms__keys from './keys'


const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ps__redux.compose
const enhancer = compose()

export default (state) => {
	const store = ps__redux.createStore(m__reducer, state, enhancer)
	store.subscribe(() => {
		const state = store.getState()
		try {
			const string = JSON.stringify(state)
			window.localStorage.setItem(ms__keys.key, string)
		} catch (error) {
			console.warn(error)
		}
	})
	if (module.hot) {
		module.hot.accept('./reducer', () => {
			store.replaceReducer(m__reducer)
		})
	}
	return store
}
