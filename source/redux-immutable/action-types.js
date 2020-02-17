
import * as m__token from './token'

const prefix = (name) => {
	return [m__token.value, name].join('--')
}

export const reset = prefix('reset')
