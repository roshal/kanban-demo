
exports.styler = (styles) => {
	return (...keys) => {
		return ['', ...keys].map((key) => {
			return styles[key]
		}).join('.')
	}
}

exports.cast_actions = (token, array) => {
	return array.reduce((object, value) => {
		object[value] = [token, value].join('--')
		return object
	}, {})
}
