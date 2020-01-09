function passByValue(number) {
  number+= 7;
}
let num = 5;
passByValue(num);
console.log(num);       // 5

function passByReference(arr, obj) {
  arr.push(4);
  obj.food = 'apple';
}

let myArr = [1,2,3];
let myObj = { name: 'Tony', food: 'pizza' };

passByReference(myArr, myObj);

console.log(myArr);        //  => [1,2,3,4]
console.log(myObj);       //  => { name: 'Tony', food: 'apple' }