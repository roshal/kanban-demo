
export const curry = (action, keys, reducers) => {
	if (action.keys && action.keys === keys && action.type in reducers) {
		return reducers[action.type]
	}
	return (state) => {
		return state
	}
}
