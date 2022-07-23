import background from "./images/bg-pattern.svg";
import "./App.scss";
import { Top } from "./sections/top/Top";
import { Card } from "./components/card/Card";

function App() {
  return (
    <main className="main-container">
      <Top/>
      <img src={background} alt="background" className="background-photo" />
      <Card/>
    </main>
  );
}

export default App;
