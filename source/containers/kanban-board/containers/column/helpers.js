
import * as p__ramda from 'ramda'


const order = [
	'name',
	'text',
].map((value) => {
	return p__ramda.prop(value)
})


export const sort = (sorting, tasks) => {
	if (0 === sorting) {
		return tasks
	}
	if (0 < sorting) {
		sorting = order.map((value) => {
			return p__ramda.ascend(value)
		})
	} else {
		sorting = order.map((value) => {
			return p__ramda.descend(value)
		})
	}
	return p__ramda.sortWith(sorting, tasks)
}
