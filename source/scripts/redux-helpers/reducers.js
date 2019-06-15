
import * as ps__redux_immutable from 'redux-immutable'

export const combiner = (reducers) => {
	return (state, action) => {
		return ps__redux_immutable.combineReducers(reducers)(state, action)
	}
}

export const selector = (reducers) => {
	return (state, action) => {
		if (action.type in reducers) {
			return reducers[action.type](state, action)
		}
		return state
	}
}
