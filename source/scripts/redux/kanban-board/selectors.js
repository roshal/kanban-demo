
import * as ms__selectors from '../selectors'
import * as ms__tokens from './tokens'


export const select = (state) => {
	return ms__selectors.select(state).get(ms__tokens.token)
}
