
import * as p__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__types from './types'
import d__container__task from '../task/container'

const $ = i__react_hyperscript

export const task = (
	props: m__types.props__task,
): p__react.ReactElement => {
	return [
		$(d__container__task, {
			key: props.object.id,
			object: props.object,
		}),
	][0]
}

task.displayName = 'task'
