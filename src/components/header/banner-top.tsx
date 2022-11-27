import React from "react";
import {
  IcAuthentic,
  IcDelivered,
  IcPrice,
  IcReturn,
  IcShipped,
} from "../../assets/icons";

function Header() {
  return (
    <div className="bg-pink-300 py-4 px-2 lg:px-0">
      <ul className="flex justify-between container mx-auto xl:px-4">
        <li>
          <a href="" className="flex items-center">
            <img src={IcShipped} alt="" className="h-6 w-6 md:w-8 md:h-8" />
            <h3 className="text-white text-sm ml-2 font-medium hidden lg:inline-flex">
              Dikirim dari Indonesia
            </h3>
          </a>
        </li>
        <li>
          <a href="" className="flex items-center">
            <img src={IcDelivered} alt="" className="h-6 w-6 md:w-8 md:h-8" />
            <h3 className="text-white text-sm ml-2 font-medium hidden lg:inline-flex">
              Gratis Pengiriman
            </h3>
          </a>
        </li>
        <li>
          <a href="" className="flex items-center">
            <img src={IcPrice} alt="" className="h-6 w-6 md:w-8 md:h-8" />
            <h3 className="text-white text-sm ml-2 font-medium hidden lg:inline-flex">
              Harga terbaik
            </h3>
          </a>
        </li>
        <li>
          <a href="" className="flex items-center">
            <img src={IcAuthentic} alt="" className="h-6 w-6 md:w-8 md:h-8" />
            <h3 className="text-white text-sm ml-2 font-medium hidden lg:inline-flex">
              100% Original
            </h3>
          </a>
        </li>
        <li>
          <a href="" className="flex items-center">
            <img src={IcReturn} alt="" className="h-6 w-6 md:w-8 md:h-8" />
            <h3 className="text-white text-sm ml-2 font-medium hidden lg:inline-flex">
              Pengembalian 30 Hari
            </h3>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
