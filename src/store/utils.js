const normalize = (array) =>
  array.reduce((obj, item) => {
    obj[array.indexOf(item)] = item
    return obj
  }, {})

export default normalize
