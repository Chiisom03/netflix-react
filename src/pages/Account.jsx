import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/77a25a1d-7805-4618-8637-a5c86b205033/NG-en-20221010-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="movies"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>{" "}
        <h1 className="text-3xl md:text-2xl absolute top-[30%] p-4 md:p-4">
          Favourites
        </h1>
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
