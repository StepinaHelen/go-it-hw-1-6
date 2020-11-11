// Задача 5-1
// function-constructor
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции - конструктора добавь метод getInfo(),
//     который возвращает строку со значениями свойств login и email объекта.
// Write code under this line

  const Account = function(login,email) {
    this.login = login;
    this.email = email;
     
  }
Account.prototype.getInfo = function () {
//return this.login;
 return (`login : ${this.login}, email: ${this.email}`);
}

console.log(typeof Account.prototype.getInfo);
// 'function'

 const mango = new Account( 'Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo()); 
// 'login : Mangozedog, email: mango@dog.woof'

 const poly = new Account( 'Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'
// _________________________________________


// Задача 5-2
// class
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который,
//     выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров }
// followers

class User {
  constructor (name,age, followers){
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
  return (`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
  };
}

 console.log(typeof User);
// 'function'

 const mango = new User('Mango', 2, 20);
 console.log(mango.getInfo()); 
// 'User Mango is 2 years old and has 20 followers'

console.log(typeof mango.getInfo); 
// 'function'  

 const poly = new User( 'Poly', 3, 17);
 console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'
// _____________________________________________


// Задача 5-3


// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих
// Write code under this line
  class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items.push(item);

    for (let allItem of this.items) {
      if (item == allItem) {
        if (this.items.includes(item)) {
          let n = this.items.indexOf(allItem);
          this.items.splice(n, 1);

        }
      }
    }
   
  }
}

 console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

 const storage = new Storage(goods);

 console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

 storage.addItem('Дроид');
 console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

 storage.removeItem('Пролонгер');
 console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// Задача 5-4
// переиспользование методов класса
// Напиши класс StringBuilder.На вход он получает один параметр - строку,
//     которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

class StringBuilder {
  constructor(value) {
    this._value = value;
   
  }
  get value() {
   // console.log("dsxfcgvb");
    return this._value;
  } 
  append(str) {
     this._value= this._value + str;
  }
  prepend(str) {
  this._value=str + this.value;
  }
  pad(str) {
   
    this.append(str) + this.prepend(str);
   // console.log("FTGYHJIK");
  }
}

 console.log(typeof StringBuilder);
// 'function'


 const builder = new StringBuilder('.');

 builder.append('^');
 console.log(builder.value); // '.^'

 builder.prepend('^');
 console.log(builder.value); // '^.^'

builder.pad('=');
 console.log(builder.value); // '=^.^='
// ______________________________________

// Задача 5-5
class Car {
 // Write code under this line
static getSpecs(car) {
  
 return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`

  
  }
 constructor(car){
  this.speed = 0;
  this.maxSpeed = car.maxSpeed;
  this._price = car.price;
  this.isOn = false;
  this.distance = 0;
  };
 get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }


  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
   this.speed = 0;
  }
   accelerate(value) {
    // console.log(this.maxSpeed);
  //  if (this.speed <= this.maxSpeed) {
     // this.speed += value;
       let newSpeed = this.speed + value;
      if (newSpeed < this.maxSpeed){
        this.speed = newSpeed;}
       else if (newSpeed >= this.maxSpeed)
       { this.speed=this.maxSpeed;}
      
 
  }
  decelerate(value) {
    //if (this.speed > 0) {
    //  this.speed -= value;
   // }
     let newSpeed = this.speed - value;
      if (newSpeed > 0){
      this.speed = newSpeed;}
        else if (newSpeed <= 0){
        this.speed = 0;
        }
      
  }
  drive(hours) {
    if (this.speed > 0){
      let total = hours * this.speed
    this.distance += total;
     console.log( this.distance);
    }
  }





}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

 console.log(mustang.price); // 2000
mustang.price = 4000;
 console.log(mustang.price); // 4000