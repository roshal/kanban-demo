
const p__react_dom = require('react-dom')
const p__react_hyperscript = require('react-hyperscript')

const m__component__app = require('~/components/app')

// require('//templates/sources/index.pug')
// require('//styles/sources/index.sss')

const $ = p__react_hyperscript

{
	const element = $(m__component__app)
	const container = document.createElement('div')
	p__react_dom.render(element, container)
	document.body.appendChild(container)
}
