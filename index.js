
module.exports = function husky (template) {
  const huskyTemplate = function (data) {
    const pattern = /\{(.*?)\}/g
    const result = template.replace(pattern, (match, key) => {
      return data[key] || match
    })
    return husky(result)
  }
  huskyTemplate.toString = () => template

  return huskyTemplate
}
