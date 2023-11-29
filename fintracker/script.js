let transactions = [];

function addTransaction() {
  const descriptionInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");
  const categoryInput = document.getElementById("category");

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value.trim();

  if (!description || isNaN(amount) || amount === 0 || !category) {
    alert("Please enter valid description, amount, and category.");
    return;
  }

  const newTransaction = {
    description,
    amount,
    category,
  };

  transactions.push(newTransaction);
  updateTransactionList();
  updateSummary();

  // Clear input fields
  descriptionInput.value = "";
  amountInput.value = "";
  categoryInput.value = "";
}

function updateTransactionList() {
  const transactionListDiv = document.getElementById("transaction-list");
  transactionListDiv.innerHTML = "<h2>Transaction List</h2>";

  if (transactions.length === 0) {
    transactionListDiv.innerHTML += "<p>No transactions added yet.</p>";
    return;
  }

  transactions.forEach((transaction, index) => {
    const sign = transaction.amount > 0 ? "+" : "-";
    transactionListDiv.innerHTML += `
            <div class="transaction-item">
                <p>${index + 1}. ${transaction.description} - $${Math.abs(
      transaction.amount
    ).toFixed(2)} (${sign})</p>
            </div>
        `;
  });
}

function updateSummary() {
  const totalIncomeSpan = document.getElementById("total-income");
  const totalExpensesSpan = document.getElementById("total-expenses");
  const balanceSpan = document.getElementById("balance");

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total + Math.abs(transaction.amount), 0);

  const balance = totalIncome - totalExpenses;

  totalIncomeSpan.textContent = totalIncome.toFixed(2);
  totalExpensesSpan.textContent = totalExpenses.toFixed(2);
  balanceSpan.textContent = balance.toFixed(2);
}
