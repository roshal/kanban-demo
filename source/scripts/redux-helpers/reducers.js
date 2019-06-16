
import * as ps__redux_immutable from 'redux-immutable'

export const middlewares_composer = (middlewares) => {
	let reducer = (state) => {
		return state
	}
	middlewares = middlewares.slice()
	middlewares.reverse()
	middlewares.forEach((middleware) => {
		reducer = middleware(reducer)
	})
	return (state, action) => {
		return reducer(state, action)
	}
}

export const reducers_combiner = (reducers) => {
	return (state, action) => {
		return ps__redux_immutable.combineReducers(reducers)(state, action)
	}
}

export const reducers_selector = (reducers) => {
	return (state, action) => {
		if (action.type in reducers) {
			return reducers[action.type](state, action)
		}
		return state
	}
}
