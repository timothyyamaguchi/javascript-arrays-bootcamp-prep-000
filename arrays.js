var chocolateBars = [
  "snickers",
  "hundred grand",
  "kit kat",
  "skittles"
]

function addElementToBeginningOfArray(array, element) {
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
