
exports.local_storage = window.localStorage

exports.redux_devtools_extension_compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const onbeforeunload_subscribers = []

exports.onbeforeunload_subscribe = (...subscribers) => {
	onbeforeunload_subscribers.push(...subscribers)
}

window.onbeforeunload = () => {
	onbeforeunload_subscribers.forEach((call) => {
		call()
	})
}
