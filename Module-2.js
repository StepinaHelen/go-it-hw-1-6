// *************************************         ЗАДАЧА № 1        **************************************************
const getItemsString = function(array) {
  'use strict';
  // Write code under this line
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(`${i + 1} - ${array[i]}\n`);
  }

  return result.join('');
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// *************************************         ЗАДАЧА № 2        **************************************************
const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
   let message2 = message.split(' ');
  //console.log(message2.length);

  let pricePerWordTotal = message2.length * pricePerWord;
  // console.log(pricePerWord1);
  return pricePerWordTotal; 
}// Write code in this line

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100


// *************************************         ЗАДАЧА № 3        **************************************************

function findLongestWord(string = '') {
  // Write code under this line

  let stringWord = string.split(' ');
  let biggestWord = 0;
  let LongestWord = '';
  for (const word of stringWord) {
    let wordsLenght = word.length;

    if (biggestWord < wordsLenght) {
      biggestWord = wordsLenght;
      LongestWord = word;
    }
  }
  
  return LongestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));


// *************************************         ЗАДАЧА № 4       **************************************************
function formatString (string, maxLength = 40) {
  // Write code under this line
   let stringLenght = string.length;

  if (stringLenght > maxLength) {
    // console.log(string.slice(0, 40));
    let stringSlice = string.slice(0, maxLength);
    
    return `${stringSlice}`; //...
  } else {
    return string;
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));

// / *************************************         ЗАДАЧА № 6      **************************************************

function checkForSpam (str) { 
  'use strict';
  // Write code under this line
    let String = str.toLowerCase();
  //console.log(String);
  if (String.includes('sale')) {
    return true;
  }
  else if (String.includes('spam')) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!'));

// / *************************************         ЗАДАЧА № 7      **************************************************

function filterArray(array) {
  'use strict';
  const numbers = [];
  for(let i = 0; i < array.length; i += 1) {
    // Write code under this line
     if (Number.isFinite(array[i])===true) {
      //проверяет:  число конечное? если правда,то добавлять к массиву 
  numbers.push(array[i]);
}
  }
  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
// [2]


// / *************************************         ЗАДАЧА № 8      **************************************************
function reduceArray(array) {
  'use strict';
  let total = 0;
  // Write code under this line
    for (let i = 0; i < array.length; i += 1) {
   
    total += array[i];
        if ((array.length === 0)) {
       return 0;
     }
     } 
  return total;
};

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));

// / *************************************         ЗАДАЧА № 9     **************************************************
function isLoginValid (login, min = 4, max = 16) {
  // Write code under this line
  let stringlogin = login.split(' ');

  for (const str of stringlogin) {
    let strLenght = str.length;
    // console.log(strLenght);
    if (min <= strLenght && strLenght <= max) {
      //console.log(strLenght);
      return true;
    } else {
      return false;
    }
  }
}

function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
}

function addLogin (allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line    
  if (isLoginValid(login) === false) {
    return ERROR;
  } else if (isLoginValid(login) === true) {
    if (isLoginUnique(allLogins, login) === true) {
      let newLogin = allLogins.push(login);
      return SUCCESS;
    } else if (isLoginUnique(allLogins, login) === false) {
      //newLogin = allLogins.pop(login);
      return REFUSAL;
    }
  }
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

 console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!'

 console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'

 console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

 console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// / *************************************         ЗАДАЧА № 10     **************************************************