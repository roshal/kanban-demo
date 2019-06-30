
import * as m__middlewares from '~/redux-helpers/middlewares'
import * as m__reducers from '~/redux-helpers/reducers'
import * as m__token from './token'
import * as m__token__columns from './columns/token'
import * as m__token__tasks from './tasks/token'

import d__reducer__columns from './columns/reducer'
import d__reducer__tasks from './tasks/reducer'


export default m__reducers.middlewares_composer([
	m__middlewares.filters_applicator([
		m__reducers.tokens_checker(m__token),
	]),
	m__middlewares.reducers_applicator([
		m__reducers.reducers_combiner({
			[m__token__columns.value]: d__reducer__columns,
			[m__token__tasks.value]: d__reducer__tasks,
		}),
	]),
])
