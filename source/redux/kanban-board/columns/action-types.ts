
import * as m__token from './token'

const prefix = (name): string => {
	return [m__token.value, name].join('--')
}

export const sort = prefix('sort')

export const update = prefix('update')
