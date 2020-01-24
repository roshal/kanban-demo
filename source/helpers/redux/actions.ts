
export const selector = (mutations: {
	[key: string]: Function,
}) => {
	return (draft: string, action: {
		type: string,
	}) => {
		if (action.type in mutations) {
			return mutations[action.type](draft, action)
		}
	}
}
