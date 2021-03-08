
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__types from './types'
import d__container__column from '../column/container'

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
