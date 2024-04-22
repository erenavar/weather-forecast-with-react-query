import { createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import MiddlePart from "./components/MiddlePart";
import SideBar from "./components/SideBar";
import { useState } from "react";

//import { useData } from "./assets/api/WeatherApi";

export const DataContext = createContext();

function App() {
  const [show, setShow] = useState(false);
  // const { data: forecasts } = useData("utrecht");

  return (
    <DataContext.Provider value={[show, setShow]}>
      <Header />
      <MiddlePart />
      <SideBar />
    </DataContext.Provider>
  );
}

export default App;
