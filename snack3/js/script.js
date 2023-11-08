function numbersBetween(array, index1, index2) {
  const newArray = [];
  array.forEach((element, i) => {
    if (index1 < index2) {
      if (i >= index1 && i <= index2) {
        newArray.push(element);
      }
    } else {
      if (i >= index2 && i <= index1) {
        newArray.push(element);
      }
    }
  });
  return newArray;
}

const numbersArray = [23, 14, 6, 8, 10, 9, 10, 2, 43];

const newArr = numbersBetween(numbersArray, 1, 5);
const newArr2 = numbersBetween(numbersArray, 5, 1);
console.log(newArr);
console.log(newArr2);
