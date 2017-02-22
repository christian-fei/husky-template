[![build status](https://travis-ci.org/christian-fei/husky-template.svg?branch=master)](https://travis-ci.org/christian-fei/husky-template)

# installation

```
npm install --save husky-template
```

```javascript
const huskyTemplate = require('husky-template')
let template = huskyTemplate('lorem {ipsum} {dolor.sit.amet}')

const ipsum = 'ipsum'
template = template({ipsum}) // lorem ipsum {dolor.sit.amet}
const amet = 'dolor sit amet'
template = template({dolor:{sit:{amet}}}) // lorem ipsum dolor sit amet
```

[See usage-section](#usage) for more examples.


# usage

create an instance of husky by passing it a string with placeholders for you values.

like this:

```javascript
const text = 'lorem {ipsum} {amet}'
const template = huskyTemplate(text)

const curriedTemplate = template({ipsum})
equal('lorem ipsum {amet}', curriedTemplate)
equal('lorem ipsum amet', curriedTemplate({amet}))
```

### Features

##### curried templates

use to power of partial application on your templates! [See usage-section](#usage).

##### deep object property support

in other words:

```javascript
const template = huskyTemplate('lorem ipsum {deep.amet}')
const amet = 'amet'
equal('lorem ipsum amet', template({deep: {amet}}))
```

##### map over object properties

[see test](./test/index.js#L34)

```javascript
test('maps over object property', () => {
  const ipsum = 'ipsum'.split('')
  let template = huskyTemplate(`lorem {this.ipsum.map(i => i + '_').join('')}`)
  template = template({ipsum})
  equal(template.toString(), 'lorem i_p_s_u_m_')
})
```

## tests

please feel free to submit pull-requests, backed by tests!

```bash
npm i
npm t [-- --watch]
```

[see tests](./test)
