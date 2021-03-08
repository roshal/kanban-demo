
export interface props__container {}

export interface props__component extends props__container {
	state: {
		columns: {
			id: number,
		}[],
	},
	dispatch: {
		reset: (...all: any) => any,
	},
}

export interface props__component__column {
	object: {
		id: number,
	},
}
