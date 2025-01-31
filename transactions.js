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

//     Compute and display the below:

// a.Total Credit
// b.Total Debit
// c.Total Amount Spent
// d.Total Amount Spent on each date.
// e.Total Amount Spent as any type of EMI's

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

// totalAmountSpentOnEachDate(txns);

const totalAmountSpentOnEachDate = (transactions) => {
    let groups = Object.groupBy(transactions, ({ txnDate }) => txnDate);
    Object.entries(groups).forEach(([key, value]) => {
        console.log(`${key}`);
        console.log(totalDebit([value]));
    });
}

// Object.groupBy function is not working in this JavaScriptFile/VS CODE

const totalAmountSpenOnEMIs = (transactions) => {
    const emis = transactions.filter(t => t.header.endsWith("EMI"));
    console.log("Total Amount spent on EMIS'", totalDebit(emis));
}

console.log("-----------------------");
console.log("Total Credit", totalCredit(txns));
console.log("-----------------------");
console.log("Total Debit", totalDebit(txns));
console.log("-----------------------");
totalAmountSpenOnEMIs(txns);
console.log("-----------------------");

