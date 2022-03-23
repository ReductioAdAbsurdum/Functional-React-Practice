import React, { useEffect, useState} from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props)=> {
       
    const[currentYear, setCurrentYear] = useState("2022"); 
    const[filteredItems, setFilteredItems] = useState([]);
    
    useEffect(() => {
        console.log("Expenses: new item added");
        filterItems(currentYear);
    },[props.items])
     

    const selectYearHandler = (year) =>{
        console.log("Expenses: selectYearHandler");
        setCurrentYear(year);
        filterItems(year);
    }

    const filterItems = (year)=>
        setFilteredItems(props.items.filter(item => item.date.getFullYear().toString() === year));
    

    console.log();
        
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter onSelectYear = {selectYearHandler}/>
                <ExpensesChart expenses = {filteredItems}/>
                <ExpensesList items = {filteredItems}/>            
            </Card>
        </div>
    );
}

export default Expenses;


