
import * as ms__selectors from '../selectors'

export const select = (state) => {
	return ms__selectors.select_kanban_board(state)
}

export const select_columns = (state) => {
	return select(state).columns
}

export const select_tasks = (state) => {
	return select(state).tasks
}
