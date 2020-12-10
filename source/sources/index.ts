
import '//styles/sources/index.sss'

import i__react from 'react'
import i__react_dom from 'react-dom'

import d__kanban_board from '-/apps/kanban-board'

const element = i__react.createElement(d__kanban_board)

const container = document.createElement('div')

document.body.appendChild(container)

i__react_dom.render(element, container)
