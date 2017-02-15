/* global test */
const husky = require('..')

const {equal} = require('assert')

test('returns formatted string', () => {
  const ipsum = 'ipsum'
  const text = 'lorem {ipsum}'
  const template = husky(text)

  equal('lorem ipsum', template({ipsum}))
})

test('returns curried formatted string', () => {
  const ipsum = 'ipsum'
  const amet = 'amet'
  const text = 'lorem {ipsum} {amet}'
  const template = husky(text)

  const curriedTemplate = template({ipsum})
  equal('lorem ipsum {amet}', curriedTemplate)
  equal('lorem ipsum amet', curriedTemplate({amet}))
})

test('supports objects', () => {
  const template = husky('lorem ipsum {deep.amet}')
  const amet = 'amet'
  equal('lorem ipsum amet', template({deep: {amet}}))
})

test('returns partially formatted template', () => {
  let _husky = husky('lorem ipsum {amet}')
  equal('lorem ipsum {amet}', _husky)

  const amet = 'amet'
  _husky = _husky({amet})
  equal('lorem ipsum amet', _husky)
})
