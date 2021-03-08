
import '//styles/sources/index.pcss'

import * as p__react from 'react'
import * as p__react_dom from 'react-dom'

import d__kanban_board from '-/apps/kanban-board'

const element = p__react.createElement(d__kanban_board)

const container = document.createElement('div')

document.body.appendChild(container)

p__react_dom.render(element, container)
