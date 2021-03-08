
export const filters_applicator = (filters: ((...all: any) => any)[]) => {
	return (reducer: (...all: any) => any) => {
		return (state: Record<string, unknown>, action: (...all: any) => any) => {
			filters.forEach((filter) => {
				if (!filter(state, action)) {
					return state
				}
			})
			return reducer(state, action)
		}
	}
}

export const reducers_applicator = (reducers: ((...all: any) => any)[]) => {
	return (reducer: (...all: any) => any) => {
		return (state: Record<string, unknown>, action: (...all: any) => any) => {
			reducers.forEach((reducer) => {
				state = reducer(state, action)
			})
			return reducer(state, action)
		}
	}
}

export const state_initializer = (initial_state: Record<string, unknown>) => {
	return (reducer: (...all: any) => any) => {
		return (state = initial_state, action: (...all: any) => any) => {
			return reducer(state, action)
		}
	}
}
