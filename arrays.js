var chocolateBars = [
  "snickers",
  "hundred grand",
  "kit kat",
  "skittles"
]

function addElementToBeginningOfArray(array, element) {
  ["baby ruth", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
