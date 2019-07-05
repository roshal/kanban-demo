
export const styler = (styles) => {
	return (...keys) => {
		return keys.reduce((accumulator, value) => {
			value = styles[value]
			return value ? [accumulator, value].join('.') : accumulator
		}, '')
	}
}

export const cast_actions = (token, array) => {
	return array.reduce((object, value) => {
		object[value] = [token, value].join('--')
		return object
	}, {})
}

export const cast_props = (props) => {
	return {
		props: props.props,
		values: props.values,
		actions: props.actions,
	}
}
