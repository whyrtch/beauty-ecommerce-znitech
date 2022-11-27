import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-pink-400 px-2 lg:px-4 z-10">
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col max-w-md">
            <h1 className="text-white font-bold text-2xl">
              dapatkan lebih banyak kesempatan bagus ketika berlangganan
              newslatter kami!
            </h1>
            <p className="text-white text-sm mt-4">
              Kami merekomendasikan kamu untuk berlangganann newslatter kami,
              masukkan email untuk berlangganan.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="bg-white p-2 flex">
              <input
                type="text"
                placeholder="Masukan alamat email"
                className="flex-1 w-full border-none"
              />
              <button className="bg-pink-600 font-medium text-white py- px-4 rounded-md">
                Langganan
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:space-x-10 mt-8 grid grid-cols-1">
          <Link to="/product" className="text-white font-normal text-md">
            Belanja Produk
          </Link>
          <Link to="/brand" className="text-white font-normal text-md">
            Brand
          </Link>
          <Link to="" className="text-white font-normal text-md">
            Pengiriman
          </Link>
          <Link to="" className="text-white font-normal text-md">
            pengembalian
          </Link>
        </div>
        <div className=" my-5 h-[0.5px] bg-white" />
        <div>
          <h2 className="text-white font-medium text-lg">Cantik.id</h2>
          <h5 className="text-white font-light">
            © 2022 Cantik. All rights reserved
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
