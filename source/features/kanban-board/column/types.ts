
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
		add: Function,
		rename: Function,
		sort: Function,
	},
}

export interface props__task {
	object: {
		id: number,
	},
}
