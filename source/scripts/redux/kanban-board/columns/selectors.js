
import * as ms__keys from './keys'
import * as ms__selectors from '../selectors'


export const select = (state) => {
	return ms__selectors.select(state).get(ms__keys.key)
}
