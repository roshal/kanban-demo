
export const apply_reducer = (reducers) => {
	return (state, action) => {
		if (action.type in reducers) {
			return reducers[action.type](state, action)
		}
		return state
	}
}
