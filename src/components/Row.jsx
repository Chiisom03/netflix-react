import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  let slider = document.getElementById("slider" + rowID);
  
  const SlideLeft = () => (slider.scrollLeft = slider.scrollLeft - 500);
  const SlideRight = () => (slider.scrollLeft = slider.scrollLeft + 500);

  return (
    <>
      <h2 className="font-bold md:text-xl p-4 select-none">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded absolute left-4 opacity-50 hover:opacity-100 text-black z-10 hidden group-hover:block"
          size={40}
          onClick={() => SlideLeft()}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <Movie movie={movie} key={id}/>
          ))}
        </div>
        <MdChevronRight
          className="bg-white rounded absolute right-4 opacity-50 hover:opacity-100 text-black z-10 hidden group-hover:block"
          size={40}
          onClick={() => SlideRight()}
        />
      </div>
    </>
  );
};

export default Row;
