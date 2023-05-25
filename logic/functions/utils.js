export function sumValuesByKey(arr, key) {
  return arr.reduce((sum, obj) => sum + Number(obj[key]), 0);
}
