import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useData(city) {
  return useQuery({
    queryKey: ["forecasts"],
    queryFn: () =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b7e1cbe85991511007fdc6496ee1595&units=metric`
      ),
  });
}
