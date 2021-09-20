import { useState, useEffect } from "react";
import dataService from "../../service/dataService";
import MaterialMediaCard from "../common/MaterialMediaCard";

function SerieContainer() {
  const [data, setData] = useState([]);

  useEffect(
    () => dataService.get().then((response) => setData(response.data.entries)),
    []
  );

  return (
    <>
      <h1> Series works! </h1>
      {data
        .filter((element) => element.programType === "series")
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

export default SerieContainer;
