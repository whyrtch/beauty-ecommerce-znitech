import React from "react";
import { BgPink } from "../../assets/ilustrations";
import BannerTop from "../../components/header/banner-top";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="w-full">
      <img
        src={BgPink}
        alt=""
        className="absolute -z-10 h-full w-full object-cover"
      />
      <BannerTop />
      <Navbar />
      {/* form login */}
      <div className="flex mx-auto mt-24 md:w-6/12 xl:w-3/12 px-2 pb-16">
        <div className=" bg-white rounded-xl p-6 w-full">
          <h3 className="text-center text-2xl font-bold pb-4">
            Selamat Datang
          </h3>
          <p className="text-center text-sm text-pink-500 pb-4">
            Login melalui Email
          </p>
          <input
            type="text"
            placeholder="email"
            className="w-full border-2 border-gray-200 p-2 px-4 focus:border-pink-500"
          />
          <input
            placeholder="password"
            className="w-full border-2 border-gray-200 p-2 px-4 mt-2 focus:border-pink-500"
            type="password"
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-5 border-pink-300 text-pink-600 focus:ring-pink-500"
              />
              <p className="text-xs ml-2 text-gray-500 font-normal">
                remember account
              </p>
            </div>
            <a href="">
              <h3 className="text-xs font-semibold text-gray-900">
                Forget password
              </h3>
            </a>
          </div>
          <Link to="/dashboard">
            <button className="mt-8 bg-pink-500 w-full p-3 text-sm md:text-xl font-semibold text-white">
              Login
            </button>
          </Link>

          <a href="">
            <h3 className="text-sm underline text-gray-400 text-center mt-8">
              Already account{" "}
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;