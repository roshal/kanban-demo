
export interface props__component {
	object: {
		id: number,
	},
	state?: {
		columns: {
			id: number,
			name: string,
		}[],
	},
	dispatch?: {
		locate: Function,
	},
	callbacks?: {
		close: Function,
	},
}

export interface props__container {
	object: {
		id: number,
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
