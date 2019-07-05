
const p__big_integer = require('big-integer')

module.exports = (int) => {
	let index = p__big_integer(int)
	let value = p__big_integer.one
	while (p__big_integer.one < index) {
		value = value.multiply(index)
		index = index.subtract(p__big_integer.one)
	}
	return value
}
