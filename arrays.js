var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, object) {
  return array.unshift(object)
}
function destructivelyAddElementToBeginningOfArray(array, object) {
  return array.unshift(object)
}
function addElementToEndOfArray(array, object) {
  return array.concat(...array , object)
}
function destructivelyAddElementToEndOfArray(array, object) {
  return array.push(object)
}
function accessElementInArray(array, [i]) {
  
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}
function removeElementFromBeginningOfArray(array) {
return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop(array.length)
}
function removeElementFromEndOfArray(array) {
  return array.slice(array.length)
}
