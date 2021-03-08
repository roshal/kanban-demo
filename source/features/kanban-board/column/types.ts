
export interface props__container {
	object: {
		id: number,
	},
}

export interface props__component {
	state: {
		name: string,
		sorting: -1 | 0 | 1,
		tasks: {
			id: number,
		}[],
	},
	dispatch: {
		add: (...all: any) => any,
		rename: (...all: any) => any,
		sort: (...all: any) => any,
	},
}

export interface props__task {
	object: {
		id: number,
	},
}
