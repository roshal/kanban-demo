
import * as p__react from 'react'

import * as i__react_hyperscript from 'react-hyperscript'


import * as m__types from './types'

import d__container__column from '../column/container'


const $ = i__react_hyperscript


export const column = (
	props: m__types.props__component__column,
): p__react.ReactElement => {
	return [
		$(d__container__column, {
			key: props.object.id,
			object: props.object,
		}),
	][0]
}


column.displayName = 'column'
