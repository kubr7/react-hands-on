import { useCalculator } from "./hooks/useCalculator";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import "./styles/calculator.css";

function App() {
  const {
    expression,
    append,
    clear,
    backspace,
    calculate,
  } = useCalculator();

  return (
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
  );
}

export default App;
