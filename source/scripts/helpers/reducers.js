
export const apply_reducers = (reducers) => {
	return (state, action) => {
		if (action.type in reducers) {
			return reducers[action.type](state, action)
		}
		return state
	}
}
