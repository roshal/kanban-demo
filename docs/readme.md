# kanban board

this is a test task

# code style

snake_case is used instead of camelCase

# name prefixes

||||
---|---|---
prefix|description|example
`c__`|class|`const c__app = class {`
`d__`|default imported from module|`import d__component from './component'`
`i__`|default imported from package|`import i__react from 'react'`
`m__`|imported module|`import * as m__selectors from './selectors'`
`p__`|imported package|`import * as p__lodash from 'lodash'`
`s__`|default imported style|`import s__styles from './styles.sss'`


# firebase

[firebase](https://firebase.google.com/) is used as a hosting

# prerequisites

`node`
<br>
`yarn`|`npm`

# management commands

[node-package-script](https://www.npmjs.com/package/nps) is used

see all commands in [package-scripts.js](../package-scripts.js)

# installing

install dependencies

```
yarn
```

or

```
npm i
```

# start

start develop

```
npx nps d
```

`nps develop` `series('serve.develop')`

`nps serve.develop` `webpack-dev-server --develop --hot`

# linting

run lint

```
npx nps l
```

`nps lint` `concurrent('lint.eslint', 'lint.stylelint')`

`nps serve.develop` `eslint webpack source/scripts`
<br>
`nps lint.develop` `stylelint source/**/*.sss`

# testing

run test

```
npx nps t
```

`nps test` `jest source/scripts`
