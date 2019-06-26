
const p__big_integer = require('big-integer')
const p__path = require('path')

const m__big_factorial = require('../node/big-factorial')

exports.mapper = (mode) => {
	const number = '0123456789'
	const string = 'abcdefghijklmnopqrstuvwxyz'
	const values = [
		number,
		string,
		string.toUpperCase(),
		'-./\\_',
	].join('')
	const index = values.length
	const {
		stack,
		value,
	} = (() => {
		if (mode === 'number') {
			return {
				stack: '_',
				value: number,
			}
		}
		if (mode === 'string') {
			return {
				stack: '',
				value: string,
			}
		}
	})()
	const limit = m__big_factorial(value.length)
	return (context, mask, name) => {
		let number = p__big_integer.zero
		let path = p__path.relative(context.rootContext, context.context)
		name = [path, name].join('.')
		for (const value of name) {
			number = number.multiply(index)
			number = number.add((values.indexOf(value) % index + index) % index)
			number = number.mod(limit)
		}
		let string = stack
		const items = value.split('')
		for (let index = value.length; 0 < index; index -= 1) {
			string += items.splice(number.mod(index).valueOf(), 1)
			number = number.divide(index)
		}
		return string
	}
}
