
import * as m__token from './token'


const prefix = (name): string => {
	return [m__token.value, name].join('--')
}

export const create = prefix('create')
export const remove = prefix('remove')
export const locate = prefix('locate')
export const update = prefix('update')
