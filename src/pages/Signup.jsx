import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/77a25a1d-7805-4618-8637-a5c86b205033/NG-en-20221010-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[435px] h-[600px] mx-auto bg-black/75 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                action=""
                className="w-full flex flex-col my-4 justify-between"
              >
                <input
                  type="text"
                  className="p-2 rounded bg-gray-700 my-2"
                  placeholder="Email or phone number"
                  autoComplete="email"
                />
                <input
                  type="text"
                  className="p-2 rounded bg-gray-700 my-2"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 rounded mt-8 mb-2">
                  Sign up
                </button>
                <div className="flex justify-between items-center">
                  <p>
                    <input type="checkbox" name="Remember me" id="" />
                    &nbsp;Remember me
                  </p>
                  <Link to="/">Need help?</Link>
                </div>

                <p className="mt-12">
                  New to Netflix?
                  <Link to="/" className="font-bold">
                    Sign up now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
