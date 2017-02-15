const utils = require('./utils')
const pattern = /(\{.*?\})/g
const {assign} = Object

module.exports = function husky (template) {
  return assign(huskyFrom, {toString})

  function huskyFrom(values) {
    return husky(template.replace(pattern, using(values)))
  }

  function using(values) {
    return (match, notation) => utils.lookupKey(values, notation) || match
  }

  function toString () {
    return template
  }
}
