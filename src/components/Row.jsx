import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((movie, id) => (
            <Movie movie={movie} id={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
