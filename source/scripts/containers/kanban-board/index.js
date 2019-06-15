
import * as ps__react_redux from 'react-redux'
import * as ps__redux from 'redux'

import m__component from './component'

import * as ms__actions from '~/redux/actions'
import * as ms__selectors from './selectors'


export default ps__react_redux.connect(
	(state) => {
		return ms__selectors.select(state)
	},
	(dispatch) => {
		return {
			actions: ps__redux.bindActionCreators(ms__actions, dispatch),
		}
	},
)(m__component)
