import { ICLikeActive } from '../../assets/icons';
import BannerTop from '../../components/header/banner-top';
import Navbar from '../../components/navbar/navbar';
import Rating from '../../components/rating/rating';
import { news } from '../../constant/data/new-product';
import Footer from '../../components/footer/footer';
import { eksklusif } from '../../constant/data/eksklusif-product';
import { Link } from 'react-router-dom';

function Brand() {
  return (
    <div className="w-full">
      <BannerTop />
      <Navbar />
      <div className="w-full pb-24">
        <div className="container mx-auto xl:px-24">
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 items-center justify-center">
            {eksklusif.map((item, index) => {
              return (
                <Link to={'/brand-profile'}>
                  <a
                    key={index}
                    className="relative h-full aspect-w-1 aspect-h-1 max-w-xs overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none justify-center items-center mx-auto"
                  >
                    <div className="relative">
                      <img
                        src={item.img}
                        className="h-96 mb-4 w-full mx-auto object-contain"
                        alt=""
                      />
                      <button className="absolute h-7 w-7 border-[0.5px] rounded-full justify-center items-center border-gray-200 right-6">
                        <img src={ICLikeActive} className="mx-auto" alt="" />
                      </button>
                    </div>
                    <div className="p-5">
                      <h1 className="text-xl text-pink-400 text-center">
                        {item.name}
                      </h1>
                      <h3 className="text-black text-2xl font-light text-center my-2">
                        {item.desc}
                      </h3>
                      <div className="flex justify-center">
                        <Link to="/brand-profile">
                          <button className="border-2 py-2 px-8 border-black text-black mx-auto mt-4 hover:bg-black hover:text-white font-bold text-lg">
                            Belanja
                          </button>
                        </Link>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        {/* FLASH SALE */}
        <div className="container mx-auto xl:px-24 mt-14">
          <div className="border-b-8 border-pink-400">
            <h3 className="text-white text-3xl font-light bg-pink-400 p-2 w-44 text-center">
              Azarine
            </h3>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center justify-center">
            {news.map((item, index) => {
              return (
                <Link to="/product-detail">
                  <a
                    key={index}
                    className="relative h-full aspect-w-1 aspect-h-1 max-w-xs overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none justify-center items-center mx-auto"
                  >
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
                      <Rating type="" />
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
      </div>
      <Footer />
    </div>
  );
}

export default Brand;
