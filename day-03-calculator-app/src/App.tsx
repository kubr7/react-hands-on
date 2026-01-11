import { useCalculator } from "./hooks/useCalculator";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import "./styles/calculator.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const {
    expression,
    append,
    clear,
    backspace,
    calculate,
  } = useCalculator();

  return (
    <div className="app-container">
      <Header />
      <div className="calculator-container">
        <div className="calculator">
          <Display value={expression} />
          <Keypad
            onAppend={append}
            onClear={clear}
            onBackspace={backspace}
            onCalculate={calculate}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
