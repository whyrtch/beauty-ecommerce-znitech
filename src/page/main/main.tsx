import { Carousel, Progress } from 'flowbite-react';
import React from 'react';
import { ICLikeActive } from '../../assets/icons';
import BannerTop from '../../components/header/banner-top';
import Navbar from '../../components/navbar/navbar';
import { dataBanner } from '../../constant/data/banner';
import { eksklusif } from '../../constant/data/eksklusif-product';
import { sale } from '../../constant/data/sale-product';
import Rating from '../../components/rating/rating';
import { news } from '../../constant/data/new-product';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="w-full">
      <BannerTop />
      <Navbar />
      <div className="h-64 p-0 2xl:h-[550px] bg-black">
        <Carousel>
          {dataBanner.map((item, index) => {
            return (
              <Link to={'/product-detail'}>
                <img
                  key={index}
                  src={item.img}
                  alt=""
                  className="w-full h-[580px]"
                />
              </Link>
            );
          })}
        </Carousel>
      </div>
      {/* FLASH SALE */}
      <div className="container mx-auto xl:px-24">
        <div className="my-12 h-[0.5px] bg-gray-800" />
        <h3 className="text-black text-center text-3xl font-light">
          FLASH SALE
        </h3>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center justify-center">
          {sale.map((item, index) => {
            return (
              <Link
                to={'/product-detail'}
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
                  <h3 className="text-sm font-light text-white">Flash Sale</h3>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <Link to={'/flash-sale'}>
            <button className="border-2 py-2 px-4 border-black text-black mx-auto mt-14 hover:bg-black hover:text-white font-bold text-lg">
              See more
            </button>
          </Link>
        </div>
      </div>
      {/* BRAND EKSKLUSIF */}
      <div className="container mx-auto xl:px-24">
        <div className="my-12 h-[0.5px] bg-gray-800" />
        <h3 className="text-black text-center text-3xl font-light">
          BRAND EKSKLUSIF
        </h3>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 items-center justify-center">
          {eksklusif.map((item, index) => {
            return (
              <Link
                to={'/brand-profile'}
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
                  <div className="flex">
                    <button className="border-2 py-2 px-8 border-black text-black mx-auto mt-4 hover:bg-black hover:text-white font-bold text-lg">
                      Belanja
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* PRODUK BARU */}
      <div className="container mx-auto xl:px-24">
        <div className="my-12 h-[0.5px] bg-gray-800" />
        <h3 className="text-black text-center text-3xl font-light">
          PRODUK BARU
        </h3>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center justify-center">
          {news.map((item, index) => {
            return (
              <Link
                to={'/product-detail'}
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
                  <h3 className="text-sm font-light text-white">New Arrival</h3>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <Link to={'product'}>
            <button className="border-2 py-2 px-4 border-black text-black mx-auto mt-14 hover:bg-black hover:text-white font-bold text-lg">
              See more
            </button>
          </Link>
        </div>
      </div>
      {/* PRODUK FAVORIT */}
      <div className="container mx-auto xl:px-24">
        <div className="my-12 h-[0.5px] bg-gray-800" />
        <h3 className="text-black text-center text-3xl font-light">
          PRODUK FAVORIT
        </h3>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center justify-center">
          {sale.map((item, index) => {
            return (
              <Link
                to={'/favorite'}
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
                  <h3 className="text-sm font-light text-white">Best Deal</h3>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <Link to={'/favorite'}>
            <button className="border-2 py-2 px-4 border-black text-black mx-auto mt-14 hover:bg-black hover:text-white font-bold text-lg">
              See more
            </button>
          </Link>
        </div>
        <div className="my-12 h-[0.5px] bg-gray-800" />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
