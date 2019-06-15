
export const apply_filters = (filters) => {
	return (reducer) => {
		return (state, action) => {
			filters.forEach((filter) => {
				if (!filter(state, action)) {
					return state
				}
			})
			return reducer(state, action)
		}
	}
}

export const compose_reducers = (reducers) => {
	return (reducer) => {
		return (state, action) => {
			reducers.forEach((reducer) => {
				state = reducer(state, action)
			})
			return reducer(state, action)
		}
	}
}
