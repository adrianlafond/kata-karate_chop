/**
 * @param int {integer}
 * @param array<integer>
 */
export default function chop(int, array) {
  // return array.indexOf(int)
  const len = array.length
  if (len === 1) {
    return int === array[0] ? 0 : -1
  }
  if (len > 1) {
    const n = Math.floor(len / 2)
    let slice0
    let slice1
    if (int < array[n]) {
      slice0 = []
      slice1 = array.slice(0, n)
    } else if (int >= array[n]) {
      slice0 = array.slice(0, n)
      slice1 = array.slice(n)
    }
    if (slice1) {
      let index = chop(int, slice1)
      if (index !== -1) {
        index += slice0.length
        return index
      }
    }
  }
  return -1
}
