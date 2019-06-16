
export const tokens_checker = (tokens) => {
	return (state, action) => {
		if (action.tokens) {
			const limit = Math.min(tokens.length, action.tokens.length)
			for (let index = 0; index < limit; index += 1) {
				if (tokens[index] !== action.tokens[index]) {
					return false
				}
			}
		}
		return true
	}
}
