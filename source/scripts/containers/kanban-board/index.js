
import * as ps__react_redux from 'react-redux'

import m__component from './component'

import * as ms__selectors from './selectors'

export default ps__react_redux.connect(
	(state) => {
		return ms__selectors.select(state)
	},
)(m__component)
