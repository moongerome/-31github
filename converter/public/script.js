function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  fetch(
    `http://localhost:3000/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
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
