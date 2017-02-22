const utils = require('./utils')
const pattern = /\{(.*?)\}/g
const {assign} = Object

module.exports = function huskyTemplate (template) {
  return assign(huskyFrom, {toString})

  function huskyFrom(values) {
    return huskyTemplate(template.replace(pattern, using(values)))
  }

  function using(values) {
    return (match, notation) => {
      return utils.lookupKey(values, notation) || utils.evaluateOn(values, notation) || match
    }
  }

  function toString () {
    return template
  }
}
