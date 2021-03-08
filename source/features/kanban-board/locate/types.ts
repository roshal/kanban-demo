
export interface props__container {
	object: {
		id: number,
	},
	callbacks: {
		close: (...all: any) => any,
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
		locate: (...all: any) => any,
	},
}

export interface props__component__column {
	object: {
		id: number,
		name: string,
	},
	dispatch?: {
		locate: (...all: any) => any,
	},
	callbacks: {
		close: (...all: any) => any,
	},
}
