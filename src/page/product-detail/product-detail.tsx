import React from 'react';
import BannerTop from '../../components/header/banner-top';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { Product11 } from '../../assets/ilustrations';
import Rating from '../../components/rating/rating';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { detailProduct } from '../../constant/data/detail';
import { AvatarS, ICLikeActive } from '../../assets/icons';
import { sale } from '../../constant/data/sale-product';
import { Link } from 'react-router-dom';

function ProductDetail() {
  return (
    <div className="w-full">
      <BannerTop />
      <Navbar />
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-8">
          <div className="flex-col">
            <img src={Product11} alt="" className="h-[580px] w-full" />
            <div className="grid grid-cols-6 mt-8">
              {detailProduct.map((item, index) => {
                return <img src={item.img} className="h-full w-full" alt="" />;
              })}
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <h1 className="line-through text-black font-light text-2xl">
                Rp. 200.000
              </h1>
              <h1 className="text-pink-400 font-medium text-2xl">
                Rp. 153.000
              </h1>
            </div>
            <Rating type="" />
            <button className=" my-4 h-11 w-11 border-[0.5px] rounded-full justify-center items-center border-gray-200 right-6">
              <img src={ICLikeActive} className="mx-auto h-8 w-8" alt="" />
            </button>
            <h1 className="text-black font-medium text-3xl">
              N’pure Cica Series Face Wash (Twin Pack)
            </h1>
            <p className="text-black font-light text-xs mt-2">
              N'PURE adalah salah satu local brand yang menggunakan natural
              ingredients sebagai bahan utamanya. Produk2 mereka sudah
              dermatology tested dan bebas dari harmful ingredients seperti
              paraben, alcohol, SLS, mineral oil, juga sudah HALAL dan BPOM
              registered. N'PURE adalah salah satu local brand yang menggunakan
              natural ingredients sebagai bahan utamanya. Juga sudah HALAL dan
              BPOM registered.
            </p>
            <p className="text-gray-400 text-xs py-4">
              *Syarat dan ketentuan berlaku
            </p>
            <div className="items-center justify-center border-2 border-black w-max px-2 space-x-2">
              <button>
                <PlusIcon className="h-3 w-3 text-black" />{' '}
              </button>
              <input
                type="text"
                value={2}
                className="border-none flex-1 text-base w-8"
              />
              <button>
                <MinusIcon className="h-3 w-3 text-black" />{' '}
              </button>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-col">
                <Link to={'/cart-bag'}>
                  <button className="flex items-center bg-[#FF0961] border-[#FF0961] border-2 py-3 px-4 font-semibold text-lg text-white">
                    <PlusIcon className="h-4 w-4 text-white mr-2" /> Keranjang
                  </button>
                </Link>
                <p className="text-xs py-3 text-center text-gray-500">
                  Gratis pengiriman reguler
                </p>
              </div>
              <div className="flex-col">
                <Link to={'/checkout'}>
                  <button className="flex items-center bg-white py-3 px-4 font-semibold text-lg text-black border-2 border-black">
                    Beli Sekarang
                  </button>
                </Link>
                <p className="text-xs py-3 text-center text-gray-500">
                  Gratis pengembalian
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 h-[0.5px] bg-gray-300" />
        <div className="flex justify-center my-24 px-24">
          <div className="flex-auto">
            <h1 className="font-bold text-2xl mb-4">Reviews</h1>
            <Rating type="label" />
            <h1 className="font-semibold text-xl mt-4">5 reviews</h1>
            <div className="mt-4">
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-sm tex-black font-medium">5 stars</h1>
                <div className="h-[0.5px] lg:w-36 bg-black" />
                <h1 className="text-sm tex-black font-medium">(2)</h1>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-sm tex-black font-medium">4 stars</h1>
                <div className="h-[0.5px] lg:w-36 bg-black" />
                <h1 className="text-sm tex-black font-medium">(2)</h1>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-sm tex-black font-medium">3 stars</h1>
                <div className="h-[0.5px] lg:w-36 bg-black" />
                <h1 className="text-sm tex-black font-medium">(0)</h1>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-sm tex-black font-medium">2 stars</h1>
                <div className="h-[0.5px] lg:w-36 bg-black" />
                <h1 className="text-sm tex-black font-medium">(0)</h1>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-sm tex-black font-medium">1 stars</h1>
                <div className="h-[0.5px] lg:w-36 bg-black" />
                <h1 className="text-sm tex-black font-medium">(5)</h1>
              </div>
            </div>
          </div>
          <div className="flex-auto">
            <div className="flex mb-8">
              <div className="flex-col">
                <Rating type="null" />
                <h1 className="font-bold text-2xl mt-4">Ok bangetttttt</h1>
                <p className="text-black font-light lg:w-[550px] mt-2">
                  I tell you this; toner ini soothing banget dan adem buat
                  kompresan diatas kulit yang meradang merah dan habis panas-
                  panasan.
                </p>
                <div className="flex space-x-2 mt-2">
                  <h3 className="text-black">
                    Review ini membantu? Iya (4) Tidak (0)
                  </h3>{' '}
                  <button className="underline px-2 border-l-[0.5px] border-l-black text-gray-300">
                    Report
                  </button>{' '}
                </div>
              </div>
              <div>
                <h1 className="text-sm font-medium text-black">
                  October 21, 2025
                </h1>
                <div className="flex space-x-2 items-center mt-2">
                  <img src={AvatarS} className="h-5 w-5 rounded-full" alt="" />
                  <h3>Francessa</h3>
                </div>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="flex-col">
                <Rating type="null" />
                <h1 className="font-bold text-2xl mt-4">Ok bangetttttt</h1>
                <p className="text-black font-light lg:w-[550px] mt-2">
                  I tell you this; toner ini soothing banget dan adem buat
                  kompresan diatas kulit yang meradang merah dan habis panas-
                  panasan.
                </p>
                <div className="flex space-x-2 mt-2">
                  <h3 className="text-black">
                    Review ini membantu? Iya (4) Tidak (0)
                  </h3>{' '}
                  <button className="underline px-2 border-l-[0.5px] border-l-black text-gray-300">
                    Report
                  </button>{' '}
                </div>
              </div>
              <div>
                <h1 className="text-sm font-medium text-black">
                  October 21, 2025
                </h1>
                <div className="flex space-x-2 items-center mt-2">
                  <img src={AvatarS} className="h-5 w-5 rounded-full" alt="" />
                  <h3>Francessa</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="border-2 py-2 px-4 border-black text-black mx-auto hover:bg-black hover:text-white font-bold text-lg">
            See more
          </button>
        </div>
        <div className="my-12 h-[0.5px] bg-gray-300" />
        <div className="mt-14">
          <div className="border-b-8 border-pink-400">
            <h3 className="text-white text-3xl font-light bg-pink-400 p-2 w-max text-center">
              Rekomendasi
            </h3>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center justify-center">
            {sale.map((item, index) => {
              return (
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
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
