import { usePassword } from "./hooks/usePassword";
import PasswordDisplay from "./components/PasswordDisplay";
import Controls from "./components/Controls";
import './App.css'
import "./styles/password.css";

function App() {
  const passwordState = usePassword();

  return (
    <div className="app">
      <h1>Password Generator</h1>
      <PasswordDisplay password={passwordState.password} />
      <Controls {...passwordState} onGenerate={passwordState.generate}/>
    </div>
  );
}

export default App;
