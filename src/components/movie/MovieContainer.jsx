import { useEffect, useState } from "react";
import dataService from "../../service/dataService";
import MaterialMediaCard from "../common/MaterialMediaCard";

// Display the first 21 entries
// Sorted by the title attribute value in ascending alphanumeric order

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
        .filter((element) => element.releaseYear >= 2010)
        .sort()
        .map((element) => (
          <MaterialMediaCard
            title={element.title}
            description={element.description}
            imageUrl={element.images["Poster Art"].url}
            releaseYear={element.releaseYear}
          />
        ))}
    </>
  );
}

export default MovieContainer;
