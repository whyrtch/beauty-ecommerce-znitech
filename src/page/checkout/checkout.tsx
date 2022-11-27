import BannerTop from "../../components/header/banner-top";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Paypal, Product12, Visa } from "../../assets/ilustrations";

function Checkout() {
  return (
    <div className="w-full">
      <BannerTop />
      <Navbar />
      <div className="container mx-auto px-2 lg:px-4 my-8 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex-col w-full">
            <h1 className="font-bold text-black text-3xl">Checkout</h1>
            <div>
              <div className="flex space-x-2 my-4 items-center">
                <button className="text-base text-pink-400 font-bold">
                  Address
                </button>
                <div className="h-[0.8px] relative top-[3px] w-14 bg-gray-900" />
                <button className="text-base text-black">Shipping</button>
                <div className="h-[0.8px] relative top-[3px] w-14 bg-gray-900" />
                <button className="text-base text-black">Payment</button>
              </div>
              {/* step 1 */}
              <div className="flex-col hidden  w-full lg:w-[500px]">
                <h1 className="text-2xl text-black font-normal mb-4">
                  Shipping Information
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4 lg:space-x-4 lg:space-y-0">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-sm font-light text-black"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="text-sm font-light text-black"
                  />
                </div>
                <div className="grid grid-cols-1 my-4">
                  <input
                    type="text"
                    placeholder="Address"
                    className="text-sm font-light text-black w-full"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="text-sm font-light text-black w-full mt-4"
                  />
                </div>
                <div className="grid grid-cols-3 space-x-4">
                  <select
                    name=""
                    id=""
                    className="text-sm font-light text-black"
                  >
                    <option value="" className="text-sm font-light text-black">
                      Jakarta
                    </option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="text-sm font-light text-black"
                  >
                    <option value="" className="text-sm font-light text-black">
                      Jakarta
                    </option>
                  </select>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-sm font-light text-black"
                  />
                </div>
                <div className="grid grid-cols-1 my-4">
                  <input
                    type="text"
                    placeholder="Optional"
                    className="text-sm font-light text-black w-full"
                  />
                </div>
                <div className="grid grid-cols-1">
                  <div className="flex items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                    />
                    <p className="text-sm font-light text-black w-full ml-2">
                      Save contact information
                    </p>
                  </div>
                </div>
                <button className="bg-[#FF0961] w-full p-3 mt-4 font-medium text-lg text-white">
                  Continue to shipping
                </button>
              </div>
              {/* step 2 */}
              <div className="flex-col hidden  w-full lg:w-[500px]">
                <h1 className="text-2xl text-black font-normal mb-4">
                  Choose Shipping Company
                </h1>
                <div className="grid grid-cols-1 w-full">
                  <div className="flex items-center space-x-4 border-2 border-black p-4 mb-4">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <div className="flex-col">
                      <h3 className="text-black font-bold text-lg">JNT</h3>
                      <p className="text-black text-sm">4-7 Business Days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 border-2 border-black p-4 mb-4">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <div className="flex-col">
                      <h3 className="text-black font-bold text-lg">SICepat</h3>
                      <p className="text-black text-sm">4-7 Business Days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 border-2 border-black p-4 mb-4">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <div className="flex-col">
                      <h3 className="text-black font-bold text-lg">JNE</h3>
                      <p className="text-black text-sm">4-7 Business Days</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="flex items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                    />
                    <p className="text-sm font-light text-black w-full ml-2">
                      Save contact information
                    </p>
                  </div>
                </div>
                <button className="bg-[#FF0961] w-full p-3 mt-4 font-medium text-lg text-white">
                  Continue to shipping
                </button>
              </div>
              {/* step 3 */}
              <div className="flex-col  w-full lg:w-[500px]">
                <div className="flex w-full space-x-4 mb-4">
                  <button className="border-2 w-full lg:w-max py-2 px-4">
                    <img src={Paypal} className="h-5 mx-auto" alt="" />
                  </button>
                  <button className="border-2 w-full lg:w-max py-2 px-4">
                    <img src={Visa} className="h-5 mx-auto" alt="" />
                  </button>
                </div>
                <h1 className="text-2xl text-black font-normal mb-4">
                  Payment Details
                </h1>
                <div className="grid grid-cols-1 my-4">
                  <input
                    type="text"
                    placeholder="Address"
                    className="text-sm font-light text-black w-full"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="text-sm font-light text-black w-full mt-4"
                  />
                </div>
                <div className="grid grid-cols-3 space-x-4">
                  <select
                    name=""
                    id=""
                    className="text-sm font-light text-black"
                  >
                    <option value="" className="text-sm font-light text-black">
                      Jakarta
                    </option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="text-sm font-light text-black"
                  >
                    <option value="" className="text-sm font-light text-black">
                      Jakarta
                    </option>
                  </select>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-sm font-light text-black"
                  />
                </div>
                <div className="grid grid-cols-1 w-full">
                  <div className="flex justify-between w-full items-center mt-4">
                    <p className="text-sm font-medium text-black w-full ml-2">
                      Save card data for future payments
                    </p>
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                    />
                  </div>
                </div>
                <button className="bg-[#FF0961] w-full p-3 mt-4 font-medium text-lg text-white">
                  Continue to shipping
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col w-full lg:w-[500px] mt-8 lg:mt-0">
            <div className="flex items-center border-2 w-full mb-2">
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
              </div>
            </div>
            <div className="flex-col w-full mt-4 ">
              <h1 className="text-black text-xl font-bold">Order Summary</h1>
              <input
                type="text"
                placeholder="Enter coupon code here"
                className=" mt-4 mb-4"
                value="24VXA4"
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
