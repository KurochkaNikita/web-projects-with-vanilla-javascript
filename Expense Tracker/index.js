const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(localStorage.getItem('transaction'))

let transactions = localStorageTransactions || [];

function addTransaction(e) {
    e.preventDefault();

    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert("Please add text and amount")
    } else {
        const transaction = {
            id: generateId(),
            text: text.value,
            amount: parseInt(amount.value)
        }

        transactions.push(transaction)
        addTransactionsDOM(transaction)
        updateValues()
        text.value = ''
        amount.value = ''

        updateLocalStorage()
    }
}

function removeTransaction(transactionId) {
    transactions = transactions.filter(({id}) => id !== +transactionId)
    init()
    updateLocalStorage()
}

function generateId() {
    return Math.floor(Math.random() * 10000000);
}

function addTransactionsDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : "+";

    const item = document.createElement('li')

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <spam>${sign}${Math.abs(transaction.amount)}</spam>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>
    `

    list.appendChild(item)
}

function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts.filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const outcome = amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc -= item), 0)
        .toFixed(2);

    balance.innerText = `$${total}`;
    moneyPlus.innerText = `$${income}`
    moneyMinus.innerText = `$${outcome}`
}

function init() {
    list.innerHTML = '';

    transactions.forEach(item => addTransactionsDOM(item))
    updateValues()
}

function updateLocalStorage(){
    localStorage.setItem('transaction', JSON.stringify(transactions))
}

init()

form.addEventListener('submit', addTransaction)