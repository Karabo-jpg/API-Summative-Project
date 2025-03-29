const API_KEY = "a50b17f0188e75134635a484"; 
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultDisplay = document.getElementById("result");

const currencies = ["USD", "EUR", "GBP", "UGX", "KES", "RWF", "CAD", "AUD", "INR", "JPY", "ZAR"];

async function fetchExchangeRates() {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        return data.conversion_rates;
    } catch (error) {
        resultDisplay.textContent = "Error fetching exchange rates. Check your internet!";
        return null;
    }
}

function populateDropdowns() {
    currencies.forEach(currency => {
        let option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = currency;

        let option2 = option1.cloneNode(true);

        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
    });

    fromCurrency.value = "USD";
    toCurrency.value = "UGX";
}

async function convertCurrency() {
    let amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        resultDisplay.textContent = "Enter a valid amount!";
        return;
    }

    let rates = await fetchExchangeRates();
    if (!rates) return;

    let fromRate = rates[fromCurrency.value];
    let toRate = rates[toCurrency.value];

    if (fromRate && toRate) {
        let convertedAmount = ((amount / fromRate) * toRate).toFixed(2);
        resultDisplay.textContent = `${amount} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`;
    } else {
        resultDisplay.textContent = "Currency not supported!";
    }
}

populateDropdowns();
