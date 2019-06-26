
import * as p__react_redux from 'react-redux'
import * as p__redux from 'redux'

import * as m__actions from '~/redux/actions'
import * as m__selectors from './selectors'

import d__component from './component'


export default p__react_redux.connect(
	(state) => {
		return m__selectors.select(state)
	},
	(dispatch) => {
		return {
			actions: p__redux.bindActionCreators(m__actions, dispatch),
		}
	},
)(d__component)
