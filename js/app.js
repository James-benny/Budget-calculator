let budgetForm = document.querySelector('#budget-form');
let totalBudget = document.querySelector('#total-budget');
let expenseForm = document.querySelector('#expense-form');
let expenseAmount = document.querySelector('#expense-amount');
let descInput = document.querySelector('#desc-input');
let budgetAmount = document.querySelector('#budget-amount')
let descFormOne = document.querySelector('#desc-form1')
let descPrice = document.querySelector('#desc-price')
let list = document.querySelector('#list')
budgetForm.addEventListener('submit', addBudget);
expenseForm.addEventListener('submit', saveExpense);
let myList = [];
let mainBudget = '';

function addBudget(e) {
    e.preventDefault();
    console.log(totalBudget.value);
    console.log(budgetAmount.innerHTML);
    budgetAmount.innerHTML = totalBudget.value
    totalBudget.value = ''
    
}

function saveExpense(e) {
    e.preventDefault();
    console.log(expenseAmount.value);
    console.log(descInput.value);
    let amount = expenseAmount.value;
    let expense = descInput.value;
    let expenditure = {amount, expense}
    console.log(expenditure)
    mainBudget = budgetAmount.innerHTML;
    let remaining = Number(mainBudget) - Number(expenditure.amount);
    console.log(remaining);
    budgetAmount.innerHTML = remaining;
    expenseAmount.value = ''
    descInput.value = ''
    myList.push(expenditure)
    console.log(myList)

    let myListString = '';
    myList.forEach((expenditure) => {
        const {expense, amount} = expenditure
        myListString += `
                <li class="list-group-item d-flex justify-content-between align-items-center">${expense}
                      <span class="badge bg-primary rounded-pill">${amount}</span>
                    </li>
                `
    });
    list.innerHTML = myListString;
}

