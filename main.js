// initialize total expense
// let totalExpense = 0;
// console.log(totalExpense);

// targeting the h1 element
const totalExpense = document.querySelector("#totalExpense");
let expenseSum = 0;


// get the button element
const element = document.querySelector("#addExpense");

// ref to input amount
const inputNum = document.querySelector("#value");

// get the reference the description
const inputDesc = document.querySelector("#inputDesc");

// get ref to the table
const expenseTable = document.querySelector("#expenseTable");

// all expenses at one place
const allExpenses = [];


// Function to increment the number
function addExpense() {

    // create an object
    const expenseItem = {};

    // read the amount
    const textAmt = inputNum.value;

    // read the description
    const textDesc = inputDesc.value;

    // console.log({ textDesc, textAmt });

    expenseSum += (textAmt) ? parseInt(textAmt, 10) : 0;
    currSum = (textAmt) ? parseInt(textAmt, 10) : 0;

    // put it in object
    expenseItem.desc = textDesc;
    expenseItem.amount = currSum;
    expenseItem.moment = new Date();

    allExpenses.push(expenseItem);

    // console.clear();
    // console.table(allExpenses);


    totalExpense.textContent = `Total : ${expenseSum} Rs.`;

    // show table here
    // const data1 = allExpenses[0];
    // const data2 = allExpenses[1];



    // const data1Text = `${data1.amount} :: ${data1.desc}`;
    // const data2Text = `${data2.amount} :: ${data2.desc}`; 

    // const tableText = `
    //     <div>${data1Text}</div>
    //     <div>${data2Text}</div>
    // `


    renderList(allExpenses);


    inputNum.value = "";
    inputDesc.value = "";
    inputNum.focus();
}



// view layer

function createListItem({ desc, amount, moment }) {
    return `<li class="list-group-item d-flex justify-content-between">
        <div class="d-flex flex-column">
            ${desc}
            <small class="text-muted">${getDateString(moment)}</small>
        </div>
        <div>   
            <span class="px-5">
                ${amount}
            </span>
            <button type="button" 
            class="btn btn-outline-danger btn-sm"
            onclick="deleteItem(${moment.valueOf()})"
            >
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </li>`;
}

// controller functions



// render function
function renderList(arrOfList) {
    const allExpensesHTML = arrOfList.map(expense => createListItem(expense));
    const joinedAllExprensesHTML = allExpensesHTML.join("");
    expenseTable.innerHTML = joinedAllExprensesHTML;
}

// get date string
function getDateString(moment) {
    return moment.toLocaleDateString('en-US', {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

// delete items
function deleteItem(dataValue) {
    // console.log('delete item was called', dataValue);
    // const newArr = [];

    for (let i = 0; i < allExpenses.length; i++) {
        if (allExpenses[i].moment.valueOf() === dataValue) {
            allExpenses.splice(i, 1);
        }
    }

    // const newArr = allExpenses.filter(expense => expense.moment.valueOf() !== dataValue);
    renderList(allExpenses); 
} 


// listen to click event
function addIt()
{
    inputNum.value.length == 0 || inputDesc.value.length == 0 ? alert("Please fill all the details!") : addExpense();
}   




