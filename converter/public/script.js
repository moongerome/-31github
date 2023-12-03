// public/script.js
async function convertMoney() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  const response = await fetch("/convert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, fromCurrency, toCurrency }),
  });

  const data = await response.json();
  document.getElementById("result").innerText = `Result: ${data.result}`;
}

// Fetch currency symbols and codes from the API
fetch("https://open.er-api.com/v6/latest")
  .then((response) => response.json())
  .then((data) => {
    const currencies = Object.keys(data.rates);
    const selectFrom = document.getElementById("fromCurrency");
    const selectTo = document.getElementById("toCurrency");

    currencies.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency;
      option.text = `${currency} - ${data.rates[currency]}`;
      selectFrom.add(option);

      const optionTo = document.createElement("option");
      optionTo.value = currency;
      optionTo.text = `${currency} - ${data.rates[currency]}`;
      selectTo.add(optionTo);
    });
  });
