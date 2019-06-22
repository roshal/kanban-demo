
const m__selectors = require('../selectors')
const m__token = require('./token')

exports.select = (state) => {
	return m__selectors.select(state).get(m__token.value)
}
