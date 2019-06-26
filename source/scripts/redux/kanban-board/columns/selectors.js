
import * as m__selectors from '../selectors'
import * as m__token from './token'


export const select = (state) => {
	return m__selectors.select(state).get(m__token.value)
}
