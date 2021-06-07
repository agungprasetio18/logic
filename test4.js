/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  let missingItems = [];
  for (let i = 1; i <= numbers.length; i++) if (!numbers.includes(i)) missingItems.push(i);
  return missingItems;
}

console.log(result(numbers));
