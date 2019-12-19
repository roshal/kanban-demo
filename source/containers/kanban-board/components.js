
import i__react_hyperscript from 'react-hyperscript'

import d__container__column from './containers/column'

import * as m__types from './types'


const $ = i__react_hyperscript


export const column = (props) => {
	return [
		$(d__container__column, {
			key: props.object.id,
			object: props.object,
		}),
	][0]
}


column.displayName = 'column'
column.propTypes = m__types.props__column
