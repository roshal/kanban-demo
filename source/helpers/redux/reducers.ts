
import * as p__redux_immutable from 'redux-immutable'

export const middlewares_composer = (middlewares: ((...all: any) => any)[]) => {
	let reducer = (state: Record<string, unknown>, action: (...all: any) => any) => {
		return state
	}
	middlewares = middlewares.slice()
	middlewares.reverse()
	middlewares.forEach((middleware: (...all: any) => any) => {
		reducer = middleware(reducer)
	})
	return (state: Record<string, unknown>, action: (...all: any) => any) => {
		return reducer(state, action)
	}
}

export const reducers_combiner = (reducers: {
	[key: string]: (state: Record<string, unknown>, action: Record<string, unknown>) => any,
}) => {
	const reduce = p__redux_immutable.combineReducers(reducers)
	return (state: Record<string, unknown>, action: {
		type: string,
	}) => {
		return reduce(state, action)
	}
}

export const reducers_selector = (reducers: {
	[key: string]: (...all: any) => any,
}) => {
	return (state: Record<string, unknown>, action: {
		type: string,
	}) => {
		if (action.type in reducers) {
			return reducers[action.type](state, action)
		}
		return state
	}
}

export const tokens_checker = (tokens: string[]) => {
	return (state: Record<string, unknown>, action: {
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
