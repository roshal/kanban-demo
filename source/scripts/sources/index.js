
import p__react_dom from 'react-dom'
import p__react_hyperscript from 'react-hyperscript'

import m__component__app from '~/components/app'


const $ = p__react_hyperscript

{
	const element = $(m__component__app)
	const container = document.createElement('div')
	p__react_dom.render(element, container)
	document.body.appendChild(container)
}
