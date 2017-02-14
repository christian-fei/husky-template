const utils = require('./utils')
const pattern = /\{(.*?)\}/g

module.exports = huskyFrom

function huskyFrom (template) {
  const huskyTemplate = function (data) {
    const result = template.replace(pattern, (match, keyNotation) => {
      return utils.lookupKey(data, keyNotation) || match
    })
    return huskyFrom(result)
  }
  huskyTemplate.toString = () => template

  return huskyTemplate
}
