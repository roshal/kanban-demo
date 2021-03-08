
export interface props__container {
	object: {
		id: number,
	},
}

export interface props__component extends props__container {
	state: {
		name: string,
		text: string,
	},
	dispatch: {
		remove: (...all: any) => any,
		update: (...all: any) => any,
	},
}
