const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    {id: 1, text: 'Flower', amount: -20},
    {id: 2, text: 'Salary', amount: 300},
    {id: 3, text: 'Cinema', amount: -20},
    {id: 4, text: 'Ace-cream', amount: -5},
];

let transactions = dummyTransactions;

function addTransactionsDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : "+";

    const item = document.createElement('li')

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <spam>${sign}${Math.abs(transaction.amount)}</spam>
        <button class="delete-btn">X</button>
    `

    list.appendChild(item)
}

function init() {
    list.innerHTML = '';

    transactions.forEach(item => addTransactionsDOM(item))
}

init()