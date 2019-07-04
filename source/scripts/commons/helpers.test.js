
import * as m__helpers from './helpers'


test(m__helpers.handle_object.name, () => {
	const received = m__helpers.handle_object({
		a: 0,
	})
	const expected = {
		a: 1,
	}
	expect(received).toEqual(expected)
})

test(m__helpers.id.name, () => {
	const received = m__helpers.id(0)
	const expected = 1
	expect(received).toEqual(expected)
})


test(m__helpers.styler.name, () => {
	const style = m__helpers.styler({
		a: '0',
		b: '1',
	})
	const received = style('a', 'b', 'c')
	const expected = '.0.1'
	expect(received).toEqual(expected)
})
