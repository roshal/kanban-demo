
import * as ms__selectors from '../selectors'
import * as ms__keys from './keys'

export const select = (state) => {
	return ms__selectors.select(state).get(ms__keys.key)
}
