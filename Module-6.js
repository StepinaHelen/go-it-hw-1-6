// _______________________________________________________________________
//                                      Задача 6-1
import users from "./users.js";

const getUserNames = array => array.map(({name}) =>name);

console.log(getUserNames(users));
// _______________________________________________________________________
//                                       Задача 6-2

const getUsersWithEyeColor = (array, color) => array.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));

// _______________________________________________________________________
//                             Задача 6-3
// filter, map
// Получи массив имен пользователей(значение свойства name) по полу
//     (значение свойства gender).

// Используй деструктурирующее присваивание для параметра функции({ name })
// без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют
//     (не мутируют) исходный массив.Т.е.нельзя использовать
// for, splice, push и т.п.мутирующие методы.

// 1.Стрелочная функция 
// const getUsersWithGender = (array, gender) => array.filter(item => item.gender === gender).map( ({name}) => name);

// console.log(getUsersWithGender(users, 'male'));
// **************************************************************
// 2.Передаем сb как аргумент 

// const getName = item => item.name

// function getUsersWithGender(array, gender,cb) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].gender === gender) {
//       if ((cb(array[i]))) {
//         numbers.push(array[i].name);
//      }
//     }
//   }   
//   return numbers;
// }
// console.log(getUsersWithGender(users, 'male' ,getName));
// ***********************************************************
// Расширенная версия 

// function getName(item) {
//   return item.name;
// }
// function getUsersWithGender(array, gender) {
//   let numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].gender === gender) {
//       if ((getName(array[i]))) {
//        numbers.push(array[i].name)
//      };

//     }
     
//   }   
//   return numbers;
// }
// console.log(getUsersWithGender(users, 'male'));
 


// _________________________________________________________________________
    //                              Задача 6 - 4
// filter и оператор !
// Получи массив только неактивных пользователей
//     (отфильтруй по значению свойства isActive)
// Используй деструктурирующее присваивание для параметра функции
//     ({ isActive }) без пробелов и переносов на новую строку.
// Используй оператор !.
// Используй только перебирающие методы массива которые не изменяют
//     (не мутируют) исходный массив.Т.е.нельзя использовать
// for, splice, push и т.п.мутирующие методы.

// const getInactiveUsers = array  => array.filter(({isActive}) => !isActive);

// console.log(getInactiveUsers(users));

// // Расширенная версия:
// function getActive (item){
//   return !item.isActive;
// }

// function getInactiveUsers(array) {
//   return array.filter(getActive);
// }
// console.log(getInactiveUsers(users));
 
// / _________________________________________________________________________
// Задача 6-5



// find
// Получи объект пользователя (не массив) по уникальному значению свойства email.

// Используй деструктурирующее присваивание для параметра функции
//     ({ email }) без пробелов и переносов на новую строку.

// Write code under this line
const getUserWithEmail = (array, mail) => array.find(({email}) => email === mail);

 console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));
// / _________________________________________________________________________
// Задача 6-6
const getUsersWithAge = (array, min, max) => array
 .filter(({age}) => age > min && age< max)   
 .map(({name, email}) => ({name, email}));  

 console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */



// filter, map и создание анонимных объектов
// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей,
//     которые попадают в возрастную категорию от min до max лет(значение свойства age).

//  ___________________________________________________________________________
//                                     Задача 6 - 7
// reduce
// Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

// Используй деструктурирующее присваивание для параметра функции { balance }
// без пробелов и переносов на новую строку

 const calculateTotalBalance = array => array.reduce((acc,{balance}) => acc + balance,0 );

 console.log(calculateTotalBalance(users)); 
// 20916




//  ___________________________________________________________________________
//                                     Задача 6 - 8
// Write code under this line
const getUsersWithFriend = (array, friendName) => array.filter(  ({friends}) => friends.includes(friendName)).map( ({name})  => name);

 console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

//  ___________________________________________________________________________
//                                     Задача 6 - 9
// sort и map
// Получи массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// Избегаем мутации исходного массива: т.к.метод sort изменяет(мутирует) исходный массив,
//   то следует сделать копию массива и сортировать уже копию, а не исходный массив.


const getNamesSortedByFriendsCount = (array) => array.slice().sort((a, b) =>
    a.friends.length - b.friends.length).map(({name}) => name);

console.log(getNamesSortedByFriendsCount(users));

//  ___________________________________________________________________________
//                                     Задача 6 - 10
// reduce, filter, sort
// Получи массив всех умений всех пользователей(поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.



const getSortedUniqueSkills = (array) => [...array].reduce((acc, value) => { return acc.concat(value.skills)}, []).sort().filter((value, index, array) => array.indexOf(value) === index);

 console.log(getSortedUniqueSkills(users));