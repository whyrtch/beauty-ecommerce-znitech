import { ICLikeActive } from "../../assets/icons";
import BannerTop from "../../components/header/banner-top";
import Navbar from "../../components/navbar/navbar";
import { sale } from "../../constant/data/sale-product";
import Rating from "../../components/rating/rating";
import { news } from "../../constant/data/new-product";
import Footer from "../../components/footer/footer";
import { Banner6 } from "../../assets/ilustrations";
import { byTag } from "../../constant/data/filter";
import { Link } from "react-router-dom";

function BrandProfile() {
  return (
    <div className="w-full">
      <BannerTop />
      <Navbar />
      <div className="h-72 p-0 2xl:h-[350px] bg-black">
        <img src={Banner6} className="h-full w-full" alt="" />
      </div>
      {/* FLASH SALE */}
      <div className="container mx-auto xl:px-24 mt-14">
        <div className="border-b-8 border-pink-400">
          <h3 className="text-white text-xl lg:text-3xl font-light bg-pink-400 p-2 w-44 text-center">
            FLASH SALE
          </h3>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center justify-center">
          {sale.map((item, index) => {
            return (
              <Link to="/product-detail">
                <a className="relative h-full aspect-w-1 aspect-h-1 max-w-xs overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none justify-center items-center mx-auto">
                  <div className="relative">
                    <img
                      src={item.img}
                      className="h-56 w-full mx-auto object-contain"
                      alt=""
                    />
                    <button className="absolute h-7 w-7 border-[0.5px] rounded-full justify-center items-center border-gray-200 right-6">
                      <img src={ICLikeActive} className="mx-auto" alt="" />
                    </button>
                  </div>
                  <div className="p-5">
                    <h1 className="text-sm text-pink-400 text-center">
                      {item.brand}
                    </h1>
                    <h3 className="text-black text-lg font-medium text-center my-2">
                      {item.name}
                    </h3>
                    <div className="w-52 mx-auto bg-gray-100 rounded-full h-3 dark:bg-gray-700">
                      <div className="bg-pink-400 h-3 rounded-full w-20"></div>
                    </div>
                    <h3 className="text-black text-base font-light text-center mt-2 line-through">
                      Rp. {item.discont}
                    </h3>
                    <h3 className="text-pink-400 text-base font-medium text-center">
                      Rp. {item.total}
                    </h3>
                  </div>
                  <div className="bg-pink-300 px-2 justify-center items-start absolute top-2">
                    <h3 className="text-sm font-light text-white">
                      Flash Sale
                    </h3>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <button className="border-2 py-2 px-4 border-black text-black mx-auto mt-14 hover:bg-black hover:text-white font-bold text-lg">
            See more
          </button>
        </div>
      </div>
      {/* PRODUK BARU */}
      <div className="container mx-auto xl:px-24 pb-24">
        <div className="mt-12 mb-4 h-[0.5px] bg-gray-400" />
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-2">
          <div className="flex flex-wrap space-x-2 lg:space-x-6">
            {byTag.map((item, index) => {
              return (
                <button
                  key={index}
                  className="border-2 py-1 px-4 border-black text-black text-sm"
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <div className="lg:ml-auto mt-4 lg:mt-0">
            <select name="" id="" className="border-2 border-black rounded-md">
              <option value="">Urutkan berdasarkan</option>
            </select>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center justify-center">
          {news.map((item, index) => {
            return (
              <Link to="/product-detail">
                <a className="relative h-full aspect-w-1 aspect-h-1 max-w-xs overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none justify-center items-center mx-auto">
                  <div className="relative">
                    <img
                      src={item.img}
                      className="h-56 w-full mx-auto object-contain"
                      alt=""
                    />
                    <button className="absolute h-7 w-7 border-[0.5px] rounded-full justify-center items-center border-gray-200 right-6">
                      <img src={ICLikeActive} className="mx-auto" alt="" />
                    </button>
                  </div>
                  <div className="p-5">
                    <h1 className="text-sm text-pink-400 text-center">
                      {item.brand}
                    </h1>
                    <h3 className="text-black text-lg font-medium text-center my-2">
                      {item.name}
                    </h3>
                    <div className="flex justify-center ">
                      <Rating type="" />
                    </div>
                    <h3 className="text-black text-base font-light text-center mt-2 line-through">
                      Rp. {item.discont}
                    </h3>
                    <h3 className="text-pink-400 text-base font-medium text-center">
                      Rp. {item.total}
                    </h3>
                  </div>
                  <div className="bg-pink-300 px-2 justify-center items-start absolute top-2">
                    <h3 className="text-sm font-light text-white">
                      New Arrival
                    </h3>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <button className="border-2 py-2 px-4 border-black text-black mx-auto mt-14 hover:bg-black hover:text-white font-bold text-lg">
            See more
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BrandProfile;
