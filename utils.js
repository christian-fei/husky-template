module.exports = {
  lookupKey
}

function lookupKey (object, notation) {
  return notation
  .split('.')
  .reduce((context, propertyName) => {
    return context && context[propertyName]
      ? context[propertyName]
      : null
  }, object)
}
