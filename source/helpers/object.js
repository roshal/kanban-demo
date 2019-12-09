
export const find = (object, value) => {
	for (const key of object) {
		if (object[key] === value) {
			return key
		}
	}
}
