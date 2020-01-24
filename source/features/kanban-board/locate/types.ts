
export interface props__component {
	object: {
		id: number,
	},
	state: {
		columns: {
			name: string,
		}[],
	},
	dispatch: {
		locate: Function,
	},
	callbacks: {
		close: Function,
	},
}

export interface props__column {
	object: {
		id: number,
	},
	dispatch: {
		locate: Function,
	},
	callbacks: {
		close: Function,
	},
}
