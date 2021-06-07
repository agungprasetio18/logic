/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  let filtered = [];
  data.sort();
  data.forEach(value => {
    if(!filtered.includes(value)){
      filtered.push(value);
    }
  });
  return filtered;
}

console.log(result(data));
