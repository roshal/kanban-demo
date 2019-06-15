
import * as ps__redux from 'redux'

import m__reducer from '~/redux/reducer'

import * as ms__tokens from '~/redux/tokens'


const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ps__redux.compose
const enhancer = compose()

export default (state) => {
	const store = ps__redux.createStore(m__reducer, state, enhancer)
	store.subscribe(() => {
		const state = store.getState()
		try {
			const string = JSON.stringify(state)
			window.localStorage.setItem(ms__tokens.token, string)
		} catch (error) {
			console.warn(error)
		}
	})
	if (module.hot) {
		module.hot.accept('~/redux/reducer', () => {
			store.replaceReducer(m__reducer)
		})
	}
	return store
}
