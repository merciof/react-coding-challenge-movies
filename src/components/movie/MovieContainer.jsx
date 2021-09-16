import { useEffect, useState } from "react";
import dataService from "../../service/dataService";
import MaterialMediaCard from "../common/MaterialMediaCard";

function MovieContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataService.get().then((response) => setData(response.data.entries));
  }, []);

  return (
    <>
      <h1> MovieContainer works! </h1>

      {data
        .filter((element) => element.programType === "movie")
        .map((element) => (
          <MaterialMediaCard
            title={element.title}
            description={element.description}
            imageUrl={element.images["Poster Art"].url}
          />
        ))}
    </>
  );
}

export default MovieContainer;
