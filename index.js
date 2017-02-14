module.exports = huskyFrom

function huskyFrom (template) {
  const huskyTemplate = function (data) {
    const pattern = /\{(.*?)\}/g
    const result = template.replace(pattern, (match, key) => {
      return data[key] || match
    })
    return huskyFrom(result)
  }
  huskyTemplate.toString = () => template

  return huskyTemplate
}
