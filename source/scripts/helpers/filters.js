
export const check_tokens = (tokens) => {
	return (state, action) => {
		if (action.tokens) {
			const limit = Math.min(tokens.length, action.tokens.length)
			let index = 0
			while (index < limit) {
				if (tokens[index] !== action.tokens[index]) {
					return false
				}
				index += 1
			}
		}
		return true
	}
}
