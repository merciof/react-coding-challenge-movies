import { useEffect, useState } from "react";
import dataService from "../../service/dataService";

//capturar o id como parametro na url

function MovieDetails() {
  //filtrar um elemento

  const [state, setState] = useState();

  useEffect(() => {
    dataService.get().then((response) => setState(response.data.entries));
  }, []);

  return;
}

export default MovieDetails;
