
export interface props__container {}

export interface props__component {
	state: {
		columns: {
			id: number,
		}[],
	},
	dispatch: {
		reset: Function,
	},
}

export interface props__component__column {
	object: {
		id: number,
	},
}
