module.exports = function (arr) {
  var output = []
  permutate(0)
  return output

  function permutate(index) {
    if (index === arr.length) {
      output.push([].concat(arr))
      return
    }

    for (let i = index; i < arr.length; i++) {
      let tmp = arr[i]
      arr[i] = arr[index]
      arr[index] = tmp

      permutate(index + 1)

      tmp = arr[i]
      arr[i] = arr[index]
      arr[index] = tmp
    }
  }
}

