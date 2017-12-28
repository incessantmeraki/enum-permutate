module.exports = function (arr) {
  var output = []
  var categories = new Map()

  arr.forEach((val) => {
    let count = categories.get(val) || 0
    categories.set(val, ++count)
  })

  permutate(0)
  return output

  function permutate(index) {
    if (index === arr.length) {
      output.push([].concat(arr))
      return
    }

    categories.forEach((val, key) => {
      if (val > 0) {
        arr[index] = key
        categories.set(key, --val)
        permutate(index + 1)
        categories.set(key, ++val)
      }
    })
  }
}

