
export const find = (object: {
	[key: string]: (...all: any) => any,
}, value: any) => {
	for (const key in object) {
		if (object[key] === value) {
			return key
		}
	}
}
