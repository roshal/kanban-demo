
import * as p__redux from 'redux'


import * as m__react_redux from '~/helpers/react-redux'

import * as m__actions from './actions'
import * as m__selectors from './selectors'

import d__component from './component'


export default m__react_redux.connect(
	() => {
		const select = m__selectors.selector()
		return (state, props) => {
			return select(state)
		}
	},
	(dispatch, props) => {
		return p__redux.bindActionCreators(m__actions.produce({
			props,
		}), dispatch)
	},
)(d__component)
