function bubbleSort(arr) {
  if (!arr || typeof(arr) != "object" || arr.length == 0) return [];
  let n = arr.length;
  let temp;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 2, 3, 10, 5]));

console.log(bubbleSort([]));

console.log(bubbleSort(null));

