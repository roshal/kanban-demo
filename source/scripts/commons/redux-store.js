
const m__local_storage = require('~/commons/local-storage')
const m__reducer = require('~/redux/reducer')
const m__windows = require('~/commons/windows')
const p__redux = require('redux')

const compose = m__windows.redux_devtools_extension_compose || p__redux.compose
const enhancer = compose()

module.exports = (state) => {
	const store = p__redux.createStore(m__reducer.reducer, state, enhancer)
	const serialize = m__local_storage.store_serializer(store)
	m__windows.onbeforeunload_subscribe(serialize)
	const throttle = m__local_storage.store_throttler(store)
	store.subscribe(throttle)
	if (module.hot) {
		module.hot.accept('~/redux/reducer', () => {
			store.replaceReducer(m__reducer.reducer)
		})
	}
	return store
}
