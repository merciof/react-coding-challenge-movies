import { useEffect, useState } from "react";

import MaterialMediaCard from "../common/MaterialMediaCard";
import Grid from "@material-ui/core/Grid";

import dataService from "../../service/dataService";

// Display the first 21 entries
// Sorted by the title attribute value in ascending alphanumeric order

function MovieContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataService.get().then((response) => setData(response.data.entries));
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {data
          .filter((element) => element.programType === "movie")
          .filter((element) => element.releaseYear >= 2010)
          .sort()
          .map((element) => (
            <Grid item xs={12} sm={6} md={3}>
              <MaterialMediaCard
                title={element.title}
                description={element.description}
                imageUrl={element.images["Poster Art"].url}
                releaseYear={element.releaseYear}
              />
            </Grid>
          ))}
      </Grid>
      <h1> MovieContainer works! </h1>
    </>
  );
}

export default MovieContainer;
