
import i__react_hyperscript from 'react-hyperscript'


import * as m__types from './types'

import d__container__column from '../column'


const $ = i__react_hyperscript


export const column = (
	props: m__types.props__column,
) => {
	return [
		$(d__container__column, {
			key: props.object.id,
			object: props.object,
		}),
	][0]
}


column.displayName = 'column'
