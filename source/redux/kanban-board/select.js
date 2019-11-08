
import * as p__reselect from 'reselect'

import * as m__token from './token'

import d__select from '../select'


export default p__reselect.defaultMemoize((state) => {
	return d__select(state)[m__token.value]
})
