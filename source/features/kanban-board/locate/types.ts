
export interface props__container {
	object: {
		id: number,
	},
	callbacks: {
		close: Function,
	},
}

export interface props__component extends props__container {
	state: {
		columns: {
			id: number,
			name: string,
		}[],
	},
	dispatch: {
		locate: Function,
	},
}

export interface props__component__column {
	object: {
		id: number,
		name: string,
	},
	dispatch?: {
		locate: Function,
	},
	callbacks: {
		close: Function,
	},
}
