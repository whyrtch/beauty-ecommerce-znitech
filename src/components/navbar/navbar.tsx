import { Fragment, useState } from 'react';
import { Menu, Dialog, Transition } from '@headlessui/react';
import {
  ICAccount,
  ICArrowDown,
  ICBag,
  ICBell,
  ICHeart,
  ICSearch,
} from '../../assets/icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { English, FlagIndo, Logo } from '../../assets/ilustrations';
import { Link } from 'react-router-dom';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [notifikasi, setNotifikasi] = useState(false);
  const [language, setLanguage] = useState(false);

  const handleNotiff = () => {
    setNotifikasi(!notifikasi);
  };
  const handleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <div className="w-full">
      <div className="bg-black py-2 px-2 lg:px-0">
        <div className="flex justify-between container mx-auto xl:px-4">
          <a className="flex flex-1 items-center" onClick={handleLanguage}>
            <img src={FlagIndo} alt="" className="w-8 h-6" />
            <div className="hidden md:inline-flex">
              <div className="flex items-center space-x-2 ml-2">
                <h3 className="text-white">Bahasa Indonesia</h3>
                <h3 className="text-white">Rp. IDR</h3>
              </div>
            </div>
            <img src={ICArrowDown} alt="" className="w-6 h-6 ml-2" />
          </a>
          <div>
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="/account">
                  <img src={ICAccount} alt="" className="h-5 w-5" />
                </Link>
              </li>
              <li>
                <a href="/favorite">
                  <img src={ICHeart} alt="" className="h-5 w-5" />
                </a>
              </li>
              <li>
                <Link to="/cart-bag">
                  <img src={ICBag} alt="" className="h-5 w-5" />
                </Link>
              </li>
              <li>
                <a onClick={handleNotiff} className="cursor-pointer">
                  <img src={ICBell} alt="" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* notifikasi */}
      {notifikasi && (
        <div
          className="absolute lg:right-2 z-20 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="p-4" role="none">
            <h1 className="text-black font-light text-xl mb-4">NOTIFICATION</h1>
            <div className="mb-2 flex border-b-[0.5px] pb-2">
              <div className="h-6 w-6 bg-pink-400 rounded-full" />
              <div className="ml-2 w-64">
                <h3 className="text-sm  font-bold">
                  A product from your wishlist is on flashsale
                </h3>
                <p className="mt-4 text-gray-400 text-xs">Yesterday 09.42 AM</p>
              </div>
            </div>
            <div className="mb-2 flex border-b-[0.5px] pb-2">
              <div className="h-6 w-6 bg-pink-400 rounded-full" />
              <div className="ml-2 w-64">
                <h3 className="text-sm  font-bold">
                  A product from your wishlist is on flashsale
                </h3>
                <p className="mt-4 text-gray-400 text-xs">Yesterday 09.42 AM</p>
              </div>
            </div>
            <div className="mb-2 flex border-b-[0.5px] pb-2">
              <div className="h-6 w-6 bg-pink-400 rounded-full" />
              <div className="ml-2 w-64">
                <h3 className="text-sm  font-bold">
                  A product from your wishlist is on flashsale
                </h3>
                <p className="mt-4 text-gray-400 text-xs">Yesterday 09.42 AM</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* notifikasi */}
      {language && (
        <div
          className="absolute lg:left-4 z-20 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="p-2" role="none">
            <a className="flex justify-between items-center cursor-pointer">
              <img src={English} className="h-4" alt="" />
              <h3 className="text-sm text-black">English</h3>
              <h3 className="text-sm text-black">$ USD</h3>
            </a>
          </div>
        </div>
      )}
      {/* sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-black">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto  pb-4">
                  <div className="bg-pink-500 p-4 mb-4">
                    <Link to="/account" className="flex">
                      <img src={ICAccount} alt="" />
                      <h3 className="text-lg font-medium text-white ml-2">
                        Account
                      </h3>
                    </Link>
                  </div>
                  <ul className="flex-col space-y-4 items-center px-4">
                    <li>
                      <Link to="/product">
                        <h3 className="text-lg font-medium text-white">
                          Belanja produk
                        </h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/brand">
                        <h3 className="text-lg font-medium text-white">
                          Brand
                        </h3>
                      </Link>
                    </li>
                    <li className="bg-pink-700 justify-center items-center  px-4 py-2">
                      <Link to="/flash-sale">
                        <h3 className="text-lg text-center font-medium text-white">
                          Diskon
                        </h3>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* end sidebar */}
      <div className="flex items-center justify-center bg-white py-4 px-2 lg:px-0 border-b-2">
        <div className="flex justify-between container mx-auto xl:px-4">
          {/* burger */}
          <div className="sticky top-0 z-10 md:hidden">
            <button
              type="button"
              className=" inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* end burger */}
          <div className="relative hidden md:inline">
            <Link to={"/dashboard"}>
              <h3 className=" text-xl lg:text-3xl font-bold z-10 absolute">
                Beauty
              </h3>
            </Link>
            <div className="absolute w-8 h-8 -z-1 bg-pink-200 rounded-full top-0" />
          </div>
          <div className=" bg-gray-100 px-2 py-1 rounded-lg w-full ml-2 md:w-2/5 ">
            <div className="flex items-center ">
              <img src={ICSearch} alt="" className="h-6 w-6" />
              <input
                type="text"
                placeholder="Search"
                className=" bg-gray-100 text-sm border-0"
              />
            </div>
          </div>
          <div className="hidden md:inline">
            <ul className="flex space-x-12 items-center">
              <li className="w-max">
                <Link to="/product">
                  <h3 className="text-lg text-center font-medium"> Product</h3>
                </Link>
              </li>
              <li className="w-max">
                <Link to="/brand">
                  <h3 className="text-lg text-center font-medium">Brand</h3>
                </Link>
              </li>
              <li className="bg-[#FF0961] px-4 py-2">
                <Link to="/flash-sale">
                  <h3 className="text-lg text-center font-medium">Diskon</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
