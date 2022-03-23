import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'New Car', amount: 300, date: new Date(2022,2, 28)},
  {id: 'e2',title: 'Caviar', amount: 350, date: new Date(2022, 5, 6)},
  {id: 'e3',title: '4 Star day dream', amount: 3065, date: new Date(2019, 5 , 6)},
  {id: 'e4', title: 'What is this', amount: 300, date: new Date(2021,2, 28)},
  {id: 'e5',title: 'Poems', amount: 350, date: new Date(2021, 5, 6)},
  {id: 'e6',title: 'Lady make himself a poem', amount: 3065, date: new Date(2021, 5 , 6)}
];

const App = () => {

  const[expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (newExpense) =>
  {
    console.log("App: addExpenseHandler");
    setExpenses(prevExpenses => {
      return [...prevExpenses, newExpense];
    })
    
  }

  return (
    <div >
      <NewExpense onAddExpanse ={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );

}

export default App;
