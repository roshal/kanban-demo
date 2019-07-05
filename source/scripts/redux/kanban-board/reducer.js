
import * as m__redux_helpers from '~/redux-helpers'
import * as m__token from './token'
import * as m__token__columns from './columns/token'
import * as m__token__tasks from './tasks/token'

import d__reducer__columns from './columns/reducer'
import d__reducer__tasks from './tasks/reducer'


export default m__redux_helpers.reducers.middlewares_composer([
	m__redux_helpers.middlewares.filters_applicator([
		m__redux_helpers.reducers.tokens_checker(m__token),
	]),
	m__redux_helpers.middlewares.reducers_applicator([
		m__redux_helpers.reducers.reducers_combiner({
			[m__token__columns.value]: d__reducer__columns,
			[m__token__tasks.value]: d__reducer__tasks,
		}),
	]),
])
