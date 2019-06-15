
import m__reducer__columns from './columns/reducer'
import m__reducer__tasks from './tasks/reducer'
import m__tokens from './tokens'

import * as ms__redux_helpers from '~/redux-helpers'
import * as ms__tokens__columns from './columns/tokens'
import * as ms__tokens__tasks from './tasks/tokens'


export default ms__redux_helpers.reducers.middlewares_composer([
	ms__redux_helpers.middlewares.filters_applicator([
		ms__redux_helpers.filters.tokens_checker(m__tokens),
	]),
	ms__redux_helpers.middlewares.reducers_applicator([
		ms__redux_helpers.reducers.reducers_combiner({
			[ms__tokens__columns.token]: m__reducer__columns,
			[ms__tokens__tasks.token]: m__reducer__tasks,
		}),
	]),
])
