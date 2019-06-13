
import * as ps__redux from 'redux'

import columns from './columns/reducer'
import tasks from './tasks/reducer'

export default ps__redux.combineReducers({
	columns,
	tasks,
})
