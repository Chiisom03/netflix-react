import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/authContext";
import { db } from "../firebase";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  let slider = document.getElementById("slider");
  const SlideLeft = () => (slider.scrollLeft = slider.scrollLeft - 500);
  const SlideRight = () => (slider.scrollLeft = slider.scrollLeft + 500);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (docs) => {
      setMovies(docs.data()?.savedMovie);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteFavorite = async (movieID) => {
    try {
      const result = movies.filter((m) => m.id !== movieID);
      await updateDoc(movieRef, {
        savedMovie: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <h2 className="font-bold md:text-xl p-4 select-none bg-red-600">
        Favorites
      </h2> */}
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded absolute left-4 opacity-50 hover:opacity-100 text-black z-10 hidden group-hover:block"
          size={40}
          onClick={() => SlideLeft()}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/original/${movie?.img}`}
                alt={movie?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
                <p
                  onClick={() => deleteFavorite(movie.id)}
                  className="absolute text-gray-400 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
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

export default SavedMovies;
