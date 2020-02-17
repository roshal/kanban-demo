
import * as p__immutable from 'immutable'

const state = p__immutable.List([
	p__immutable.Map({
		id: 0,
		name: 'to do',
		sorting: 0,
	}),
	p__immutable.Map({
		id: 1,
		name: 'in process',
		sorting: 0,
	}),
	p__immutable.Map({
		id: 2,
		name: 'done',
		sorting: 0,
	}),
])

export default state
