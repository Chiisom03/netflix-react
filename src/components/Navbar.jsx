import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";
import { errorPrefix } from "@firebase/util";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(errorPrefix.toString());
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to={user?.email ? "/" : "/login"}>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          CHIISOM
        </h1>
      </Link>
      <div>
        {user?.email ? (
          <>
            <Link to="/account">
              <button className="text-white pr-4">Account</button>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="text-white pr-4">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
