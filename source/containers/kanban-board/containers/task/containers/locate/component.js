
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
			props.state.columns.map((object) => {
				const {
					dispatch,
					callbacks,
				} = props
				return m__components.column({
					object,
					dispatch,
					callbacks,
				})
			}),
		]),
	][0]
}

component.displayName = 'locate'
component.propTypes = m__types.props__component


export default component
