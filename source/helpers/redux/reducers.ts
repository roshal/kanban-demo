
import * as p__redux_immutable from 'redux-immutable'

export const middlewares_composer = (middlewares: Function[]) => {
	let reducer = (state: {}, action: Function) => {
		return state
	}
	middlewares = middlewares.slice()
	middlewares.reverse()
	middlewares.forEach((middleware: Function) => {
		reducer = middleware(reducer)
	})
	return (state: {}, action: Function) => {
		return reducer(state, action)
	}
}

export const reducers_combiner = (reducers: {
	[key: string]: (state: {}, action: {}) => any,
}) => {
	const reduce = p__redux_immutable.combineReducers(reducers)
	return (state: {}, action: {
		type: string,
	}) => {
		return reduce(state, action)
	}
}

export const reducers_selector = (reducers: {
	[key: string]: Function,
}) => {
	return (state: {}, action: {
		type: string,
	}) => {
		if (action.type in reducers) {
			return reducers[action.type](state, action)
		}
		return state
	}
}

export const tokens_checker = (tokens: string[]) => {
	return (state: {}, action: {
		tokens?: string,
	}) => {
		if (action.tokens) {
			const limit = Math.min(tokens.length, action.tokens.length)
			for (let index = 0; index < limit; index += 1) {
				if (tokens[index] !== action.tokens[index]) {
					return false
				}
			}
		}
		return true
	}
}
