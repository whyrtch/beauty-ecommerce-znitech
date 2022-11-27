import BannerTop from "../../components/header/banner-top";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Paypal, Product12, Visa } from "../../assets/ilustrations";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function AccountSetting() {
  return (
    <div className="w-full">
      <BannerTop />
      <Navbar />
      <div className="container mx-auto px-2 lg:px-4 my-8 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex-col">
            <h1 className="text-xl lg:text-2xl text-black font-light">AKUN</h1>
            <h3 className="text-lg lg:text-xl">Hi, Sarah</h3>
            <div className="border-2 p-4 px-4 lg:px-6 mt-4">
              <h1 className="text-xl lg:text-2xl text-black font-light">
                Email
              </h1>
              <div className="py-2 mt-2">
                <form action="" className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="email"
                      className="border-2 border-black"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="password"
                      className="border-2 border-black"
                    />
                  </div>
                  <button className="bg-[#FF0961] w-max px-4 py-2 mt-4 font-medium text-white">
                    Simpan
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-col mx-auto mt-4 lg:mt-0">
            <div className="lg:w-[500px]">
              <h1 className="text-xl lg:text-2xl text-black font-light">
                Pengaturan Akun
              </h1>
              <div className="flex-col space-y-4 mt-4">
                <div className="flex items-center border-2 border-black px-2 py-1 w-44">
                  <a href="" className="flex-1">
                    {" "}
                    email{" "}
                  </a>
                  <ChevronRightIcon className="h-5 w-5 text-black" />
                </div>
                <div className="flex items-center border-2 border-black px-2 py-1 w-44">
                  <a href="" className="flex-1">
                    {" "}
                    Pembelian{" "}
                  </a>
                  <ChevronRightIcon className="h-5 w-5 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountSetting;
