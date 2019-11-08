
export const selector = (mutations) => {
	return (draft, action) => {
		if (action.type in mutations) {
			return mutations[action.type](draft, action)
		}
	}
}
