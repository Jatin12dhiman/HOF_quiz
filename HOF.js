/**Q1->  You are building an e-commerce website. Write a function that calculates the total price of a customer's 
order. You're given an array of items, each with a price property. Use the forEach method to iterate through 
the array and sum up the prices to get the total order amount */

const orderList=[
    {name:"Laptop", price:120000},
    {name:"Mobile", price:70000},
    {name:"Mobile Charger", price:1500},
    {name:"Laptop Charger", price:10500},
];
let sum =0;
orderList.forEach((data)=>(sum=sum+data.price));
console.log(` The total Price is Rs${sum}`)

/**
 * Q2:=> In this challenge, your task is to create a function that generates a random number and prints it to the 
console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2
second delay between each number
 */
 function randomNumberGenerator(){
    const randomNumber= Math.floor(Math.random()*100);
    console.log(randomNumber)
 }
  function printWithInterval(){
    randomNumberGenerator();
    setInterval(randomNumberGenerator,2000);
  }
 //printWithInterval()
 /**
  Q3-> You are given an array of expense objects representing monthly expenses. Each object has properties, 
amount and category. Use the map method to create a new array that includes the calculated tax for each 
expense. Assume a tax rate of 10%
  */
 var expenses =[
    { amount:100 , category :"Utilities"},
    { amount:200 , category :"Groceries"},
    { amount:50 , category :"Entertainment"},
 ];

 var expensesWithTax= expenses.map((expense)=>{
    let tax= expense.amount*0.1;
    return { ...expense,tax:tax};
 });
 console.log("Expenses with Tax :", expensesWithTax);
 /**
  * Q 4:> Using the same array of expense objects, use the filter method to create a new array that includes only the expenses related to the category "Groceries.
  */
 var expense = [
    { amount:100 , category :"Utilities"},
    { amount:200 , category :"Groceries"},
    { amount:50 , category :"Entertainment"},
 ];

 var groceriesExpenses=expense.filter((expense)=> expense.category==="Groceries");

 console.log("Groceries Expenses:",groceriesExpenses);
 //Q 5:->Using the same array of expense objects, use the reduce method to calculate the total amount of all expenses
 let spend =[
   { amount:100 , category :"Utilities"},
   { amount:200 , category :"Groceries"},
   { amount:50 , category :"Entertainment"},
 ];
 var totalSpend= spend.reduce((acc,spend)=> acc + spend.amount,0);

 console.log("Total  Spend : ", totalSpend);

 /**
  *  Q5 : You have a list of expenses, each with an amount and a category. Now, create a function named 
categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or 
"Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array 
called categorizedExpenses, where each element represents the category for the corresponding expense in 
the original list. Finally, print out the categorizedExpenses array
  */

var expense =[
   { amount:100 , category :"Utilities"},
   { amount:200 , category :"Groceries"},
   { amount:50 , category :"Entertainment"},
 ];
   function categoryExpenses(expense){
      if(expense.amount>100){
         return "Hight Expense";
      }
      else{
         return "Low expense";
      }
   }
   let categorizedExpenses= expense.map((expense)=> categoryExpenses(expense));
   console.log("Categorized Expenses :", categorizedExpenses)

   /**
    * Q7: Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use the forEach method to iterate through each element in the array. During the iteration, double the value of each number. After completing the iteration, display the modified array->
    */

   var OriginalNumbers=[2,5,8,10,3];

   OriginalNumbers.forEach((number,index,array)=> {array[index]=number*2});
   console.log("Double Number : ", OriginalNumbers)

   /**
    * Q8->
    * Using the same array of numbers, use the forEach method to collect and store only the even numbers in a new array
    */
   var OriginalNumbers=[2,5,8,10,3];
   let evenNumber=[];
   OriginalNumbers.forEach(number=>{
      if(number%2===0){
         evenNumber.push(number);
      }
   });
   console.log("Even Number :",evenNumber);