
import * as m__types from '~/commons/types'

export const local_storage = window.localStorage

export const redux_devtools_extension_compose = globalThis.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const onbeforeunload_subscribers: m__types.empty[] = []

export const onbeforeunload_subscribe = (...subscribers: m__types.empty[]): void => {
	onbeforeunload_subscribers.push(...subscribers)
}

window.onbeforeunload = () => {
	onbeforeunload_subscribers.forEach((call: m__types.empty) => {
		call()
	})
}
