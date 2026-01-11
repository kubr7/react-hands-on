import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ThemeToggle />
      <h3 className="theme-toggle-h3">This theme applies globally.</h3>
      <Footer />
    </div>
  );
}

export default App;
