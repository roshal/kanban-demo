
import * as m__filters from './filters'
import * as m__middlewares from './middlewares'
import * as m__reducers from './reducers'


export {
	m__filters as filters,
	m__middlewares as middlewares,
	m__reducers as reducers,
}

export const compose_middlewares = (middlewares, default_state) => {
	let reducer = (state) => {
		return state
	}
	middlewares = middlewares.slice()
	middlewares.reverse()
	middlewares.forEach((middleware) => {
		reducer = middleware(reducer)
	})
	return (state = default_state, action) => {
		return reducer(state, action)
	}
}
