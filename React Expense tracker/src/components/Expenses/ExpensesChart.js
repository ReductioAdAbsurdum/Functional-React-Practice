import Chart from "../Chart/Chart"

const ExpensesChart = (props) =>
{
    const chartDataPoints = 
    [
        {label:"Jan", value:0},
        {label:"Feb", value:0},
        {label:"Mar", value:0},
        {label:"Apr", value:0},
        {label:"May", value:0},
        {label:"Jun", value:0},
        {label:"Jul", value:0},
        {label:"Aug", value:0},
        {label:"Sep", value:0},
        {label:"Oct", value:0},
        {label:"Nov", value:0},
        {label:"Dec", value:0}
    ];

    console.log("ExpensesChart: filtered Items", props.expenses);

    for(const expense of props.expenses)
    {
        console.log(expense,'aaa')
        // console.log('Ovo je tip 1', typeof(chartDataPoints[expenseMonth].amount))
        console.log(typeof(expense.amount), 'tip2')
        const expenseMonth = expense.date.getMonth();
        console.log('Mesec',expenseMonth)
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    console.log("ExpensesChart: filled data points", chartDataPoints);

    return <Chart dataPoints = {chartDataPoints}/>;
}

export default ExpensesChart;