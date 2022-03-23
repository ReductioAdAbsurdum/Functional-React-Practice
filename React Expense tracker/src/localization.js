// npm install --save localized-strings

import LocalizedStrings from "localized-strings";

let strings = new LocalizedStrings({
    en: {
        components:{
            expenses:{
                expense: 'Expense',
                noExpenseFound: "No expense has been found"
            }
        }
    }
});
export default strings;