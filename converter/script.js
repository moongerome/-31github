// Your API key (replace with your actual key)
const apiKey = "177e5e966496a6d2405fc461555d1b01";

// Fetch currency symbols and codes from the API
fetch(`https://open.er-api.com/v6/latest?apiKey=${apiKey}`)
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

function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  fetch(
    `https://open.er-api.com/v6/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&apiKey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "result"
      ).innerText = `${amount} ${fromCurrency} = ${data.conversion_result} ${toCurrency}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
