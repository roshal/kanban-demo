
const ps__redux_immutable = require('redux-immutable')

exports.middlewares_composer = (middlewares) => {
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

exports.reducers_combiner = (reducers) => {
	return (state, action) => {
		return ps__redux_immutable.combineReducers(reducers)(state, action)
	}
}

exports.reducers_selector = (reducers) => {
	return (state, action) => {
		if (action.type in reducers) {
			return reducers[action.type](state, action)
		}
		return state
	}
}

exports.tokens_checker = (tokens) => {
	return (state, action) => {
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
