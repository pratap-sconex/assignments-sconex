var txns = [
    { id: 1, header: "Salary", txnType: "credit", txnDate: new Date("2025-01-01"), amount: 75000 },
    { id: 2, header: "entertainment", txnType: "debit", txnDate: new Date("2025-01-01"), amount: 15000 },
    { id: 3, header: "bonus", txnType: "credit", txnDate: new Date("2025-01-03"), amount: 25000 },
    { id: 4, header: "schoolFee", txnType: "debit", txnDate: new Date("2025-01-03"), amount: 10000 },
    { id: 5, header: "hospital", txnType: "debit", txnDate: new Date("2025-01-04"), amount: 2000 },
    { id: 6, header: "BikeEMI", txnType: "debit", txnDate: new Date("2025-01-02"), amount: 1200 },
    { id: 7, header: "drinks", txnType: "debit", txnDate: new Date("2025-01-01"), amount: 200 },
    { id: 8, header: "allowance", txnType: "credit", txnDate: new Date("2025-01-02"), amount: 20000 },
    { id: 9, header: "enjoyment", txnType: "debit", txnDate: new Date("2025-01-03"), amount: 18000 },
    { id: 10, header: "FlatEMI", txnType: "debit", txnDate: new Date("2025-01-03"), amount: 35000 },
]

const totalCredit = (transactions) => {
    let credit = 0;
    transactions.forEach(transaction => {
        if (transaction.txnType === "credit") {
            credit += transaction.amount;
        }
    })

    return credit;
}

const totalDebit = (transactions) => {
    let debit = 0;
    transactions.forEach(transaction => {
        if (transaction.txnType === "debit") {
            debit += transaction.amount;
        }
    });

    return debit;
}

const totalAmountSpentOnEachDate = (transactions) => {
    let groups = Object.groupBy(transactions, ({ txnDate }) => txnDate);
    Object.entries(groups).forEach(([key, value]) => {
        console.log(`${key}`);
        console.log(totalDebit([v]));
    });
}

// Object.groupBy function is not working in this VS CODE

// Wed Jan 01 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// 200
// Thu Jan 02 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// 16200
// Fri Jan 03 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// 63000
// Sat Jan 04 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// 2000

const totalAmountSpenOnEMIs = (transactions) => {
    const emis = transactions.filter(t => t.header.endsWith("EMI"));
    console.log("Total Amount spent on EMIS'", totalDebit(emis));
}

// totalAmountSpentOnEachDate(txns);

//     Compute and display the below:

// a.Total Credit
// b.Total Debit
// c.Total Amount Spent
// d.Total Amount Spent on each date.
// e.Total Amount Spent as any type of EMI's

// const obj = {
//     vegetables: [
//         { name: 'asparagus', type: 'vegetables', quantity: 5 },
//     ],
//     fruit: [
//         { name: "bananas", type: "fruit", quantity: 0 },
//         { name: "cherries", type: "fruit", quantity: 5 }
//     ],
//     meat: [
//         { name: "goat", type: "meat", quantity: 23 },
//         { name: "fish", type: "meat", quantity: 22 }
//     ]
// }

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(`${key}`);
//     value.forEach(v => {
//         console.log([v]);
//     })
// });

console.log("-----------------------");
console.log("Total Credit", totalCredit(txns));
console.log("-----------------------");
console.log("Total Debit", totalDebit(txns));
console.log("-----------------------");
totalAmountSpenOnEMIs(txns);
console.log("-----------------------");

