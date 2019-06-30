
import i__react_hyperscript from 'react-hyperscript'

import * as m__actions from '~/redux/actions'
import * as m__hooks from '~/redux-helpers/hooks'
import * as m__selectors from './selectors'

import d__component from './component'


const $ = i__react_hyperscript

const component = (object) => {
	return $(d__component, {
		values: m__hooks.use_values(m__selectors.selector),
		actions: m__hooks.use_actions({
			reset: m__actions.reset,
		}),
	})
}

export default component

component.displayName = ['c', d__component.displayName].join('.')
