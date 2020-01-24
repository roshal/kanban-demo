
export const filters_applicator = (filters: Function[]) => {
	return (reducer: Function) => {
		return (state: {}, action: Function) => {
			filters.forEach((filter) => {
				if (!filter(state, action)) {
					return state
				}
			})
			return reducer(state, action)
		}
	}
}

export const reducers_applicator = (reducers: Function[]) => {
	return (reducer: Function) => {
		return (state: {}, action: Function) => {
			reducers.forEach((reducer) => {
				state = reducer(state, action)
			})
			return reducer(state, action)
		}
	}
}

export const state_initializer = (initial_state: {}) => {
	return (reducer: Function) => {
		return (state = initial_state, action: Function) => {
			return reducer(state, action)
		}
	}
}
