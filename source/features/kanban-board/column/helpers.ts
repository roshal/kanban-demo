
import * as p__ramda from 'ramda'


const order = [
	'name',
	'text',
].map((value) => {
	return p__ramda.prop(value)
})


export const sort = (sorting: number, tasks: []) => {
	if (0 === sorting) {
		return tasks
	}
	const sort = (() => {
		if (0 < sorting) {
			return order.map((value) => {
				return p__ramda.ascend(value)
			})
		} else {
			return order.map((value) => {
				return p__ramda.descend(value)
			})
		}
	})()
	return p__ramda.sortWith(sort, tasks)
}
