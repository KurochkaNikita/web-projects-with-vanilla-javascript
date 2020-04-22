const currencyElFrom = document.getElementById('currency-from');
const currencyElTo = document.getElementById('currency-to');
const mountElFrom = document.getElementById('amount-from');
const mountElTo = document.getElementById('amount-to');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    const currency_from = currencyElFrom.value;
    const currency_to = currencyElTo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_from}`)
        .then(res => res.json())
        .then((data) => {
            const rate = data.rates[currency_to];
            rateEl.innerText = `1 ${currency_from} = ${rate}`;
            mountElTo.value = (mountElFrom.value * rate).toFixed(2);
        })
}

currencyElFrom.addEventListener('change', calculate)
mountElFrom.addEventListener('input', calculate)
currencyElTo.addEventListener('change', calculate)
mountElTo.addEventListener('input', calculate)

swap.addEventListener('click', () => {
    const temp = currencyElFrom.value;
    currencyElFrom.value = currencyElTo.value;
    currencyElTo.value = temp;
    calculate();
})

calculate()