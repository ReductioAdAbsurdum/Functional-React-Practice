import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id:"q1", author:"Dragana", text:"Learning to Logical fallacy is fun"},
  {id:"q2", author:"Sergio", text:"Learning React is fun"},
  {id:"q3", author:"Vujke", text:"Learning Django is fun"},
  {id:"q4", author:"Bozic", text:"Learning Chess is fun"},
];


const AllQuotes = () => {
    return (
      <QuoteList quotes = {DUMMY_QUOTES}></QuoteList>
    );
  };
  
  export default AllQuotes;