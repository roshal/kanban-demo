
import * as p__redux from 'redux'

import * as m__token__columns from './columns/token'
import * as m__token__tasks from './tasks/token'
import d__reduce__columns from './columns/reduce'
import d__reduce__tasks from './tasks/reduce'

const reduce = p__redux.combineReducers({
	[m__token__columns.value]: d__reduce__columns,
	[m__token__tasks.value]: d__reduce__tasks,
})

export default reduce
