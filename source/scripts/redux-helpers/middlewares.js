
exports.filters_applicator = (filters) => {
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

exports.reducers_applicator = (reducers) => {
	return (reducer) => {
		return (state, action) => {
			reducers.forEach((reducer) => {
				state = reducer(state, action)
			})
			return reducer(state, action)
		}
	}
}

exports.state_initializer = (initial_state) => {
	return (reducer) => {
		return (state = initial_state, action) => {
			return reducer(state, action)
		}
	}
}
