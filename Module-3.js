// *************************ЗАДАЧА 1********************

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
 
//Write code under this line  
  user.mood ='happy';
user["full time"] = true;
 user.hobby ='skydiving';
user.premium = false;
 
const keys = Object.keys(user);
// Write code under this line
for ( let key of keys) {
message +=`${user[key]}: ${key}\n `
 }
console.log(message); 



// ***************************          ЗАДАЧА 2      **************************************
const countProps = function(obj) {
    'use strict';
  // Write code under this line
 
  const keys = Object.keys(obj);
//console.log(keys.length);
  return (keys.length);


};

console.log(countProps({})); // 0

console.log(countProps({a:1, b:1})); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
// ***************************          ЗАДАЧА 3      **************************************

const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const values = Object.values(employees);
  const keys = Object.keys(employees);

  let maxNumber = values[0];
  let bestEmpleyers = "";
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > maxNumber) {
      maxNumber = values[i];

      // console.log(values[i]);
    }
    for (let i = 0; i < keys.length; i += 1) {
      if (values[i] == maxNumber) {
        values[i] = keys[i];

        bestEmpleyers = (keys[i]);
        
      }
    }
  }

  return  bestEmpleyers;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers)); 
// 'lux'

// ***************************          ЗАДАЧА 4      **************************************

const countTotalSalary = function(employees) {
  'use strict';
  // Write code under this line
    const values = Object.values(employees);
  let total=0;
  for (const value of values) {
  total += value;
}
  return total;
};

// Объекты и ожидаемый результат
const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
}
console.log(countTotalSalary(supports));
// 500

// ***************************          ЗАДАЧА 5      **************************************

function getAllPropValues (array, prop) {
  'use strict';
  // Write code under this line 
  let index = 1 in array;
  //console.log(index);
  let PROPERTY = [];

  if (index) {
    for (let index of array) {
      if (prop === "name") {
        PROPERTY.push(index["name"]);
      }
      if (prop === "quantity") {
        PROPERTY.push(index["quantity"]);
      }
      if (prop === "category") {
        PROPERTY.push();
      }
    }
  }
  return PROPERTY;
}

// Объекты и ожидаемый результат
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
]; 

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []


// ***************************          ЗАДАЧА 6     **************************************

function calculateTotalPrice (array, prop) {
  'use strict';
  // Write code under this line
  let total = 0;
  //price*quantity;
  for (let object of array) {
    Object.values(object);
    if (object["name"] === prop) {
      total += (object["price"] * object["quantity"]);
    }
  }
  return total;
}

// Объекты и ожидаемый результат
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 }
]; 

console.log(calculateTotalPrice(products, 'Радар'));  
// 9080

console.log(calculateTotalPrice(products, 'Сканер')); 
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид')); 
// 2800