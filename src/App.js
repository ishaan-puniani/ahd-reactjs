import FAQ from "./components/accordion";
import questions from "./seeds/questions";

const App = (props) => {
  return (
    <FAQ data={questions}/>
  );
}

export default App;