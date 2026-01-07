import Header from "./components/Header";
import "./styles/theme.css";

function App() {
  return (
    <div className="app">
      <Header />
      <h3 className="theme-toggle-h3">This theme applies globally.</h3>
    </div>
  );
}

export default App;
