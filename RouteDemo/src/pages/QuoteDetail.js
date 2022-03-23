import { Route, useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuoteFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
    {id:"q1", author:"Dragana", text:"Learning to Logical fallacy is fun"},
    {id:"q2", author:"Sergio", text:"Learning React is fun"},
    {id:"q3", author:"Vujke", text:"Learning Django is fun"},
    {id:"q4", author:"Bozic", text:"Learning Chess is fun"},
  ];

const QuoteDetails = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if(quote === undefined){
        return <NoQuoteFound></NoQuoteFound>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    );
  };
  
  export default QuoteDetails;