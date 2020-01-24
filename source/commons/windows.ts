
export const local_storage = window.localStorage

export const redux_devtools_extension_compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const onbeforeunload_subscribers = Function[]

export const onbeforeunload_subscribe = (...subscribers: Function[]) => {
	onbeforeunload_subscribers.push(...subscribers)
}

window.onbeforeunload = () => {
	onbeforeunload_subscribers.forEach((call: Function) => {
		call()
	})
}
