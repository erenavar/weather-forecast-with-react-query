import "./App.css";
import Header from "./components/Header";
import MiddlePart from "./components/MiddlePart";

//import { useData } from "./assets/api/WeatherApi";

function App() {
  // const { data: forecasts } = useData("utrecht");

  return (
    <div>
      <Header />
      <MiddlePart />
    </div>
  );
}

export default App;
