
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
		remove: Function,
		update: Function,
	},
}
