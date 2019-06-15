
import * as ps__redux_immutable from 'redux-immutable'

import m__reducer__columns from './columns/reducer'
import m__reducer__tasks from './tasks/reducer'
import m__tokens from './tokens'

import * as ms__redux_helpers from '~/redux-helpers'
import * as ms__redux_helpers__filters from '~/redux-helpers/filters'
import * as ms__redux_helpers__middlewares from '~/redux-helpers/middlewares'
import * as ms__tokens__columns from './columns/tokens'
import * as ms__tokens__tasks from './tasks/tokens'


export default ms__redux_helpers.compose_middlewares([
	ms__redux_helpers__middlewares.apply_filters([
		ms__redux_helpers__filters.check_tokens(m__tokens),
	]),
	ms__redux_helpers__middlewares.compose_reducers([
		ps__redux_immutable.combineReducers({
			[ms__tokens__columns.token]: m__reducer__columns,
			[ms__tokens__tasks.token]: m__reducer__tasks,
		}),
	]),
])
