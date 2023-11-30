export function bubbleSort(array) {
  const arrayLength = array.length;
  if (arrayLength < 2) return "Add at least two values";
  for (let i = arrayLength; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

export function selectionSort(array) {
  const arrayLength = array.length;
  if (arrayLength < 2) return "Add at least two values";
  for (let i = 0; i < arrayLength; i++) {
    let lowest = i;
    for (let j = i + 1; j < arrayLength; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [array[i], array[lowest]] = [array[lowest], array[i]];
    }
  }
  return array;
}
