module.exports = {
  lookupKey
}

function lookupKey (object, notation) {
  return notation
  .slice(1, -1)
  .split('.')
  .reduce((context, propertyName) => {
    if (context && context[propertyName]) {
      return context[propertyName]
    }
    return null
  }, object)
}
