
import * as p__redux from 'redux'

import * as m__actions from '~/redux/actions'
import * as m__helpers__react_redux from '~/helpers/react-redux'
import * as m__selectors from './selectors'

import d__component from './component'


export default m__helpers__react_redux.connect(
	() => {
		const select = m__selectors.selector()
		return (state) => {
			return select(state)
		}
	},
	(dispatch) => {
		return p__redux.bindActionCreators(m__actions, dispatch)
	},
)(d__component)
