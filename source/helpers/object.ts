
export const find = (object: {
	[key: string]: Function,
}, value: any) => {
	for (const key of object) {
		if (object[key] === value) {
			return key
		}
	}
}
