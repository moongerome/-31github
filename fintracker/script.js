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

// ... (unchanged code)

function addTransaction() {
  // ... (unchanged code)

  // Update the category dropdown with unique categories
  const filterCategoryDropdown = document.getElementById("filter-category");
  if (
    !filterCategoryDropdown.innerHTML.includes(
      `<option value="${category}">${category}</option>`
    )
  ) {
    filterCategoryDropdown.innerHTML += `<option value="${category}">${category}</option>`;
  }

  // Clear input fields
  descriptionInput.value = "";
  amountInput.value = "";
  categoryInput.value = "";

  updateChart();
}

function filterTransactionsByCategory() {
  const filterCategoryDropdown = document.getElementById("filter-category");
  const selectedCategory = filterCategoryDropdown.value;

  if (selectedCategory === "all") {
    updateTransactionList(transactions);
  } else {
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.category === selectedCategory
    );
    updateTransactionList(filteredTransactions);
  }
}

function updateChart() {
  const expenseChartCanvas = document.getElementById("expense-chart");
  const expenseChartContext = expenseChartCanvas.getContext("2d");

  const expenseData = {};
  transactions
    .filter((transaction) => transaction.amount < 0)
    .forEach((transaction) => {
      if (expenseData[transaction.category]) {
        expenseData[transaction.category] += Math.abs(transaction.amount);
      } else {
        expenseData[transaction.category] = Math.abs(transaction.amount);
      }
    });

  const labels = Object.keys(expenseData);
  const data = Object.values(expenseData);

  // Update the chart using Chart.js
  new Chart(expenseChartContext, {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#8e5ea2",
            "#3cba9f",
          ],
        },
      ],
    },
  });
}

// Initial chart update
updateChart();
