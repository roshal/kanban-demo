
const p__path = require('path')

exports.mapper = (() => {
	const numbers = '0123456789'
	const letters = 'abcdefghijklmnopqrstuvwxyz'
	const symbols = [
		numbers,
		letters,
		letters.toUpperCase(),
		'-./\\_',
	].join('')
	return (base) => {
		const {
			string,
			handle,
		} = (() => {
			if (base === numbers.length) {
				return {
					string: numbers,
					handle: (value, name) => {
						return [name, value].join('--')
					},
				}
			}
			if (base === letters.length) {
				return {
					string: letters,
					handle: (value, name) => {
						return value
					},
				}
			}
		})()
		const limit_next = string.length
		const limit_prev = symbols.length
		return (context, mask, name) => {
			let array, value
			value = p__path.relative(context.rootContext, context.context)
			value = [value, name].join('.').split('').reverse()
			array = []
			value = value.reduce((accumulator, value, index) => {
				value = limit_prev ** index * symbols.indexOf(value)
				for (let key = 0; value; key += 1) {
					value += accumulator[key] || 0
					accumulator[key] = value % limit_next
					value = Math.floor(value / limit_next)
				}
				return accumulator
			}, array).slice(0, limit_next)
			const limit = value.length
			array = string.split('')
			value = value.reduce((accumulator, value, index) => {
				index = limit - index
				value = accumulator.splice(value % index, 1)
				return accumulator.concat(value)
			}, array).join('')
			return handle(value, name)
		}
	}
})()
