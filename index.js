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
