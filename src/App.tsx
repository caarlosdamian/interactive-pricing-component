import background from "./images/bg-pattern.svg";
import "./App.scss";

function App() {
  return (
    <main className="main-container">
      <img src={background} alt="background" className="background-photo" />
    </main>
  );
}

export default App;
