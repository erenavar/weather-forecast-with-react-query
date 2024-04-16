import { useData } from "./assets/api/WeatherApi";

function App() {
  const { data: forecasts } = useData("utrecht");
  console.log(forecasts.data.weather[0].description);

  return (
    <>
      <p>Weather Forecast</p>
    </>
  );
}

export default App;
