
const m__token = require('./token')

const prefix = (name) => {
	return [m__token.value, name].join('--')
}

exports.reset = prefix('reset')
