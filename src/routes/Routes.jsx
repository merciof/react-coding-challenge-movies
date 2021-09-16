import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MovieContainer from "../components/movie/MovieContainer";
import SerieContainer from "../components/serie/SerieContainer";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/home" component={HomePage} />
      <Route path="/movies" component={MovieContainer} />
      <Route path="/series" component={SerieContainer} />
    </BrowserRouter>
  );
}

export default Routes;
