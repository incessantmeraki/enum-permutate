# enum-permutate
[![Build Status](https://travis-ci.org/incessantmeraki/enum-permutate.svg?branch=master)](https://travis-ci.org/incessantmeraki/enum-permutate)

generates all possible arrangement of elements in a given array

## Usage

### Example

```js
  //generate all possible ways three names can be arranged 

  var permutate = require('enum-permutate')
  
  var arr = ['alice', 'bob', 'eve']

  var result = permutate(arr) 
  console.log(result)
```

### API

#### ` require('enum-permutate')(arr)`
returns an array containing all possible arrrangement of elements in array arr

## License

MIT