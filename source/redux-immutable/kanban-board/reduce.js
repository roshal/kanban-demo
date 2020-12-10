
import * as m__middlewares from '-/helpers/redux/middlewares'
import * as m__reducers from '-/helpers/redux/reducers'

import * as m__token from './token'
import * as m__token__columns from './columns/token'
import * as m__token__tasks from './tasks/token'
import d__reduce__columns from './columns/reduce'
import d__reduce__tasks from './tasks/reduce'

const reduce = m__reducers.middlewares_composer([
	m__middlewares.filters_applicator([
		m__reducers.tokens_checker(m__token),
	]),
	m__middlewares.reducers_applicator([
		m__reducers.reducers_combiner({
			[m__token__columns.value]: d__reduce__columns,
			[m__token__tasks.value]: d__reduce__tasks,
		}),
	]),
])

export default reduce
