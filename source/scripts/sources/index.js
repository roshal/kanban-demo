
import i__react_dom from 'react-dom'
import i__react_hyperscript from 'react-hyperscript'

import d__component__app from '~/components/app'

import '//styles/sources/index.sss'

{
	const $ = i__react_hyperscript
	const element = $(d__component__app)
	const container = document.createElement('div')
	i__react_dom.render(element, container)
	document.body.appendChild(container)
}
