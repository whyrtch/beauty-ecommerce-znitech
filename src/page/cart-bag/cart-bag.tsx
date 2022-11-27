import BannerTop from "../../components/header/banner-top";
import Navbar from "../../components/navbar/navbar";

import Footer from "../../components/footer/footer";
import { Product11, Product12 } from "../../assets/ilustrations";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";

function CartBag() {
  return (
    <div className="w-full">
      <BannerTop />
      <Navbar />
      <div className="container mx-auto px-2 lg:px-4 my-24 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8">
          <div className="flex-col">
            <div className="">
              <h1 className="text-black font-semibold text-2xl">Your Bag</h1>
              <p className="text-sm font-medium text-black mt-2">
                Not ready to checkout? Continue Shopping
              </p>
            </div>
            <div className="border-2 border-black mt-8 p-4">
              <div className="relative flex items-center border-2 p-2 w-full mb-2 pt-8 lg:pt-0">
                <img
                  src={Product12}
                  className="h-24 w-24 lg:h-32 lg:w-32"
                  alt=""
                />
                <div className="w-full">
                  <h3 className="text-black font-semibold text-sm lg:text-lg">
                    N’pure Cica Series Face Wash (Twin Pack)
                  </h3>
                  <p className="text-xs text-black">Quantity: 1</p>
                  <div className="flex items-center space-x-4">
                    <p className="text-black line-through">Rp. 200.000</p>
                    <p className="text-pink-400 font-medium">Rp. 153.000</p>
                  </div>
                  <div className="items-center justify-center ml-auto border-2 border-black w-max px-2 space-x-2 h-10 mt-2">
                    <button>
                      <PlusIcon className="h-3 w-3 text-black" />{" "}
                    </button>
                    <input
                      type="text"
                      value={2}
                      className="border-none flex-1 text-sm w-8"
                    />
                    <button>
                      <MinusIcon className="h-3 w-3 text-black" />{" "}
                    </button>
                  </div>
                  <button className="absolute top-1 right-2 underline text-xs text-black">
                    remove
                  </button>
                </div>
              </div>
              <div className="relative flex items-center border-2 p-2 w-full mb-2 pt-8 lg:pt-0">
                <img
                  src={Product12}
                  className="h-24 w-24 lg:h-32 lg:w-32"
                  alt=""
                />
                <div className="w-full">
                  <h3 className="text-black font-semibold text-sm lg:text-lg">
                    N’pure Cica Series Face Wash (Twin Pack)
                  </h3>
                  <p className="text-xs text-black">Quantity: 1</p>
                  <div className="flex items-center space-x-4">
                    <p className="text-black line-through">Rp. 200.000</p>
                    <p className="text-pink-400 font-medium">Rp. 153.000</p>
                  </div>
                  <div className="items-center justify-center ml-auto border-2 border-black w-max px-2 space-x-2 h-10 mt-2">
                    <button>
                      <PlusIcon className="h-3 w-3 text-black" />{" "}
                    </button>
                    <input
                      type="text"
                      value={2}
                      className="border-none flex-1 text-sm w-8"
                    />
                    <button>
                      <MinusIcon className="h-3 w-3 text-black" />{" "}
                    </button>
                  </div>
                  <button className="absolute top-1 right-2 underline text-xs text-black">
                    remove
                  </button>
                </div>
              </div>
              <div className="relative flex items-center border-2 p-2 w-full mb-2 pt-8 lg:pt-0">
                <img
                  src={Product12}
                  className="h-24 w-24 lg:h-32 lg:w-32"
                  alt=""
                />
                <div className="w-full">
                  <h3 className="text-black font-semibold text-sm lg:text-lg">
                    N’pure Cica Series Face Wash (Twin Pack)
                  </h3>
                  <p className="text-xs text-black">Quantity: 1</p>
                  <div className="flex items-center space-x-4">
                    <p className="text-black line-through">Rp. 200.000</p>
                    <p className="text-pink-400 font-medium">Rp. 153.000</p>
                  </div>
                  <div className="items-center justify-center ml-auto border-2 border-black w-max px-2 space-x-2 h-10 mt-2">
                    <button>
                      <PlusIcon className="h-3 w-3 text-black" />{" "}
                    </button>
                    <input
                      type="text"
                      value={2}
                      className="border-none flex-1 text-sm w-8"
                    />
                    <button>
                      <MinusIcon className="h-3 w-3 text-black" />{" "}
                    </button>
                  </div>
                  <button className="absolute top-1 right-2 underline text-xs text-black">
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col lg:w-[600px] mt-4 lg:pl-24 lg:mt-0">
            <h1 className="text-black text-xl font-bold">Order Summary</h1>
            <input
              type="text"
              placeholder="Enter coupon code here"
              className=" mt-4 mb-4"
            />
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-black font-medium text-lg">Subtotal</h3>
              <h3 className="text-black font-medium text-lg">$112</h3>
            </div>
            <div className="flex items-center justify-between mb-2 border-b-2 border-black pb-2">
              <h3 className="text-black font-medium text-lg">Discount</h3>
              <h3 className="text-black text-lg">-Rp.53.000</h3>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-black font-medium text-lg">Total</h3>
              <h3 className="text-black font-medium text-lg">Rp. 153.000</h3>
            </div>
            <Link to={"/checkout"}>
              <button className="bg-[#FF0961] w-full p-3 mt-4 font-medium text-lg text-white">
                Continue to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartBag;
