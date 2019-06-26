
export const styler = (styles) => {
	return (...keys) => {
		return ['', ...keys].map((key) => {
			return styles[key]
		}).join('.')
	}
}

export const cast_actions = (token, array) => {
	return array.reduce((object, value) => {
		object[value] = [token, value].join('--')
		return object
	}, {})
}
