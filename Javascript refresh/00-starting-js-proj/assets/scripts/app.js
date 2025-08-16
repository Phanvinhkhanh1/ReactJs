import fullName from "./util";
import {val as variable} from "./util";

// console.log(fullName);
// console.log(variable);
// console.log(1 <= 2);

// function createValue(salary, name = "Khanh") {
//     return name + " Salary : " + salary;
// }

// console.log(createValue(1000));
// console.log(createValue(5000, "Tung"));


// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1,2));

// (a,b) => {
//     return a + b;
// }

// const user = {
//     name : "khanh",
//     age: 28,
//     incomeSource() {
//         console.log(this.age * 100);
//     }
// }

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// user.incomeSource();

// class Info {
//     constructor(name, phoneNumber) {
//         this.name = name;
//         this.phoneNumber = phoneNumber;
//     }

//     contact() {
//         console.log("Phone number is : " + this.phoneNumber);
//     }
// }

// new Info("Khanh", "0388130526").contact();

// const hobbies = ["books", "chess", "running"];
// console.log(hobbies.length);
// console.log(hobbies[0]);

// let index = hobbies.findIndex(item => item === "chess");
// console.log(index);
// const newTransform = hobbies.map(item => ({text : item}));
// console.log(newTransform);

// const [firstName, lastName] = ["Phan Vinh", "Khanh"];
// console.log(firstName + " : " + lastName);

// const {name, age} = {
//     name : "Khanh",
//     age : 28
// };

// console.log(name + " : " + age);

// const hobbies = ["books", "chess", "running"];
// const updatedHobbies = ["coding", "Gen AI"];
// const newHobbies = [...hobbies, ...updatedHobbies];
// console.log(newHobbies);

// const user = {
//     name : "khanh",
//     age: 28,
//     incomeSource() {
//         console.log(this.age * 100);
//     }
// }

// const info = {
//     phoneNumber: "0388130526",
//     ...user
// }

// console.log(info);


const incomes = [1000, 10000];
for (const netValue of incomes) {
    console.log(netValue);
}