
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
