
const m__token = require('./token')

const prefix = (name) => {
	return [m__token.value, name].join('--')
}

exports.create = prefix('create')
exports.delete = prefix('delete')
exports.locate = prefix('locate')
exports.update = prefix('update')
