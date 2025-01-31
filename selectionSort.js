// 1. Develop a scrit in JavaScript that has a function to accept an array of employees and sort the employees on a given field using selection-sort algorithm.

class Employee {
    constructor(empId, fullName, salary, mobile, mailId) {
        // write relevant code here...

        this.empId = empId;
        this.fullName = fullName;
        this.salary = salary;
        this.mobile = mobile;
        this.mailId = mailId;
    }
}

const sort = (emps, fieldName) => {
    // write relevant code here...
    let sortedEmps = selectionSort(emps, fieldName);
    return sortedEmps;
}

const selectionSort = (arr, key) => {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j][key] < arr[min][key]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    console.log(arr);
    return arr;
}

// generate random number
const rn = (digit) => Number(Math.random().toString().slice(2, 2 + digit));

const pratap = new Employee(rn(8), "pratap", rn(5), rn(10), "pratap@email.com");
const prakash = new Employee(rn(8), "prakash", rn(5), rn(10), "prakash@email.com");
const kumar = new Employee(rn(8), "kumar", rn(5), rn(10), "kumar@email.com");
const sampath = new Employee(rn(8), "sampath", rn(5), rn(10), "samoath@email.com");
const jagadeesh = new Employee(rn(8), "jagadeesh", rn(5), rn(10), "jagadeesh@email.com");
const sateesh = new Employee(rn(8), "sateesh", rn(5), rn(10), "sateesh@email.com");

const employees = [pratap, prakash, kumar, sampath, jagadeesh, sateesh]

console.log("---------sorty by full name--------");
sort(employees, "fullName");
console.log("-----------------------");

console.log("----------sort by empId--------");
sort(employees, "empId");
console.log("-----------------------");

console.log("---------sort by salary---------");
sort(employees, "salary");
console.log("-----------------------");

console.log("---------sort by mobile---------");
sort(employees, "mobile");
console.log("-----------------------");

console.log("--------sort by email--------");
sort(employees, "email");
console.log("-----------------------");


// console.log(employees);