
export const styler = (styles) => {
	return (...keys) => {
		return keys.reduce((accumulator, value) => {
			value = styles[value]
			return value ? [accumulator, value].join('.') : accumulator
		}, '')
	}
}
