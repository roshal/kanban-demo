
const m__webpack_helpers = require('./webpack-helpers')

test(m__webpack_helpers.mapper.name, () => {
	const map = m__webpack_helpers.mapper(10)
	const received = map({
		rootContext: '/abc',
		context: '/abc/def',
	}, null, 'name')
	const expected = 'name--0391527486'
	expect(received).toEqual(expected)
})
