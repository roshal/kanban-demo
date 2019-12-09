
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'

import * as m__components from './components'
import * as m__types from './types'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)

const component = (props) => {
	return [
		$('ul' + style('task--list'), [
			props.state.columns.map((props) => {
				const {
					dispatch,
					callbacks,
				} = props
				return m__components.column({
					props,
					dispatch,
					callbacks,
				})
			}),
		]),
	][0]
}

component.displayName = 'locale'
component.propTypes = m__types.component_props


export default component
