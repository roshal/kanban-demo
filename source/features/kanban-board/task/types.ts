
export interface props__container {
	object: {
		id: number,
	},
}

export interface props__component {
	object: {
		id: number,
	},
	state: {
		name: string,
		text: string,
	},
	dispatch: {
		remove: Function,
		update: Function,
	},
}
