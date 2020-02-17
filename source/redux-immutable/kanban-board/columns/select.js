
import * as p__reselect from 'reselect'

import * as m__token from './token'
import d__select from '../select'

const select = p__reselect.defaultMemoize((state) => {
	return d__select(state).get(m__token.value)
})

export default select
