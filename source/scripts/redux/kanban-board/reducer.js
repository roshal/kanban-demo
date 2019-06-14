
import * as ps__redux_immutable from 'redux-immutable'

import m__reducers__columns from './columns/reducer'
import m__reducers__tasks from './tasks/reducer'

import * as ms__keys__columns from './columns/keys'
import * as ms__keys__tasks from './tasks/keys'


const reducer = ps__redux_immutable.combineReducers({
	[ms__keys__columns.key]: m__reducers__columns,
	[ms__keys__tasks.key]: m__reducers__tasks,
})

export default reducer
