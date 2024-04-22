import { createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import MiddlePart from "./components/MiddlePart";
import SideBar from "./components/SideBar";
import { useState } from "react";

//import { useData } from "./assets/api/WeatherApi";

export const DataContext = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  // const { data: forecasts } = useData("utrecht");

  return (
    <DataContext.Provider value={[showModal, setShowModal]}>
      <div style={{ opacity: showModal ? 0.9 : 1 }}>
        <Header />
        <MiddlePart />
      </div>

      <SideBar />
    </DataContext.Provider>
  );
}

export default App;
