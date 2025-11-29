// 1
// let user = {
//     hobby: 'programming',
//     premium: true,
// }
// let a = (user) => {
//     user.mood = 'happy';
//     user.hobby = 'skydiving';
//     user.premium = false;
//     let b = Object.keys(user);
//     let c = Object.values(user);
//     for (let i = 0; i < b.length; i++){
//         console.log(b[i], c[i]);
//     }
// }
// a(user);

// 2
// let dima = {
//     height: 182,
//     age: 16,
//     name:'dima',
// }
// let countProps = (obj) => {
//     let a = Object.keys(obj);
//     return a.length;
// }
// console.log(countProps(dima));


// 3
// let employee = {
//     'dima': 3,
//     'artur': 4,
//     'pasha': 2,
//     'sasha':7,
// }
// let fingBestEmployee = (obj) => {
//     let a = Object.values(obj);
//     let b = Object.keys(obj);
//     let max = 0;
//     for (let element of a) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return b[a.indexOf(max)];
// }
// console.log(fingBestEmployee(employee));


// 4
// let employee = {
//     'dima': 3000,
//     'artur': 4000,
//     'pasha': 2000,
//     'sasha':7000,
// }
// let countSallaries = (obj) => {
//     let sum = 0;
//     let a = Object.values(obj);
//     for (let element of a) {
//         sum += element;
//     }
//     return `Загальна зарплата усіх робітників становить = ${sum}`;
// }
// console.log(countSallaries(employee));


// 5
// let products = [
//     { name: 'apple', prop: 'fruit' },
//     { name: 'banana', prop: 'fruit' },
//     { name: 'potato', prop: 'vegetable' },
//     { name: 'carrot', prop: 'vegetable' },
// ];
// let getAllPropValues = (arr, prop) => {
//     let a = [];
//     for (let element of arr) {
//         if (element.prop === prop) {
//             a.push(element.name);
//         }
//     }
//     return a;
// }
// console.log(getAllPropValues(products, 'fruit'));
// console.log(getAllPropValues(products,'vegetable'));


// 6
// let products = [
//   { name: "apple", price: 20, quantity: 5 },
//   { name: "banana", price: 10, quantity: 12 },
//   { name: "kiwi", price: 30, quantity: 3 },
//   { name: "mango", price: 40, quantity: 7 }
// ];
// let calculateTotalPRice = (arr, product) => {
//     for (let element of arr) {
//         if (element.name === product) {
//             return element.price * element.quantity;
//         }
//     }
// }
// console.log(calculateTotalPRice(products, 'apple'));
// console.log(calculateTotalPRice(products, 'banana'));
// console.log(calculateTotalPRice(products,'kiwi'));
// console.log(calculateTotalPRice(products,'mango'));


// Деструктуризація
// 1
// let user = {
//     hobby: 'programming',
//     premium: true,
// }
// const { hobby, premium } = user;
// console.log(hobby,premium);

// 2
// let dima = {
//     height: 182,
//     age: 16,
//     name:'dima',
// }
// const { height, age, name } = dima;
// console.log(height,age,name);

// 3
// let employee = {
//     'dima': 3,
//     'artur': 4,
//     'pasha': 2,
//     'sasha':7,
// }
// const { dima, artur, pasha, sasha } = employee;
// console.log(dima,artur);

// 4
// let employee = {
//     'dima': 3000,
//     'artur': 4000,
//     'pasha': 2000,
//     'sasha':7000,
// }
// const { dima, artur, pasha, sasha } = employee;
// console.log(dima,artur);

// 5
// let products = [
//     { name: 'apple', prop: 'fruit' },
//     { name: 'banana', prop: 'fruit' },
//     { name: 'potato', prop: 'vegetable' },
//     { name: 'carrot', prop: 'vegetable' },
// ];
// const [fruit1, fruit2, fruit3, fruit4] = products;
// console.log(fruit1,fruit2);
// 6
// let products = [
//   { name: "apple", price: 20, quantity: 5 },
//   { name: "banana", price: 10, quantity: 12 },
//   { name: "kiwi", price: 30, quantity: 3 },
//   { name: "mango", price: 40, quantity: 7 }
// ];
// const [fruit1, fruit2, fruit3, fruit4] = products;
// console.log(fruit1,fruit2);

// 2 task
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// const account = {
//     balance: 0,
//     transactions: [],
//     createTransaction: function (ammount, type, id) {
//         let transaction = { ammount:ammount, type: type , id: this.transactions.length }; 
//         this.transactions.push(transaction);
//     },
//     deposit: function (ammount) {
//         this.createTransaction(ammount, 'DEPOSIT',);
//         this.balance += ammount;
//         return `Ваш баланс: ${this.balance}`;
//     },
//     withdraw: function (ammount) {
//         if (this.balance > ammount) {
//             this.createTransaction(ammount, 'WITHDRAW',);
//             this.balance -= ammount;
//             return `Ваш баланс: ${this.balance}`;
//         }
//         else {
//             return 'на вашому рахунку недостатьно коштів';
//         }
//     },
//     getBalance: function () {
//         return this.balance;
//     },
//     getTransactionDetails: function (id) {
//         return this.transactions.find(transaction => transaction.id === id);  
//     },
//     getTransactionTotal: function (type) {
//         let total = 0;
//         let totalDep = this.transactions.filter(transaction => {
//             if (transaction.type === type) {
//                 return transaction;
//             }
//         });
//         for (let element of totalDep) {
//             total += element.ammount;
//         }
//         return `Сума усіх ${type} = ${total}`;
//     }
// }
// console.log(account.deposit(400));
// console.log(account.withdraw(200));
// console.log(account.withdraw(500));
// console.log(account.transactions);
// console.log(account.getTransactionDetails(0));
// console.log(account.getTransactionTotal('DEPOSIT'));





