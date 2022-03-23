import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";
import strings from "../../localization";

const ExpensesList = (props) =>
{  
    const generateExpenseItems = () => 
         props.items.map(item => (
             <ExpenseItem
                key = {item.id}
                title = {item.title}
                amount = {item.amount}
                date = {item.date}
            />
        ));
    
    if(props.items.length > 0)
    {
        return <ul className="expenses-list">
            {generateExpenseItems()}   
        </ul>
        
    }
    return <h2 className="expenses-list__fallback"> {strings.components.expenses.noExpenseFound} </h2>
}

export default ExpensesList;