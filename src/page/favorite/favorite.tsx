import { ICLikeActive } from '../../assets/icons';
import BannerTop from '../../components/header/banner-top';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import { byBrand, byCategory, bySelection } from '../../constant/data/filter';
import { sale } from '../../constant/data/sale-product';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Favorite() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="w-full">
      <BannerTop />
      <Navbar />
      {/* FLASH SALE */}
      <div className="container mx-auto">
        <div className="my-4 lg:my-12 h-[0.5px] bg-gray-800 mx-4" />
        <div className="sticky top-0 z-10 md:hidden">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <FunnelIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-row pb-24">
          {/* SIDE */}
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
                  <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
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
                    <div className=" w-full h-full bg-white px-4 scrollbar ">
                      <h1 className="text-2xl text-black font-semibold">
                        Filters
                      </h1>
                      <div className="flex-col mt-6">
                        <h3 className="text-lg text-black mb-4">
                          Sort by Brand
                        </h3>
                        {byBrand.map((item, index) => {
                          return (
                            <div className="flex items-center mb-4">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-black bg-white rounded border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-gray-600"
                              />
                              <label className="ml-2 text-sm text-black">
                                {item.name}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex-col mt-6">
                        <h3 className="text-lg text-black mb-4">
                          Sort by Category
                        </h3>
                        {byCategory.map((item, index) => {
                          return (
                            <div className="flex items-center mb-4">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-black bg-white rounded border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-gray-600"
                              />
                              <label className="ml-2 text-sm text-black">
                                {item.name}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex-col mt-6">
                        <h3 className="text-lg text-black mb-4">
                          Sort by Section
                        </h3>
                        {bySelection.map((item, index) => {
                          return (
                            <div className="flex items-center mb-4">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-black bg-white rounded border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-gray-600"
                              />
                              <label className="ml-2 text-sm text-black">
                                {item.name}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className="w-14 flex-shrink-0" aria-hidden="true">
                  {/* Force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <div className="hidden lg:inline w-[300px] h-full relative bg-white -z-10">
            <div className=" w-full h-full bg-white px-4">
              <h1 className="text-2xl text-black font-semibold">Filters</h1>
              <div className="flex-col mt-6">
                <h3 className="text-lg text-black mb-4">Sort by Brand</h3>
                {byBrand.map((item, index) => {
                  return (
                    <div className="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-white rounded border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-gray-600"
                      />
                      <label className="ml-2 text-sm text-black">
                        {item.name}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="flex-col mt-6">
                <h3 className="text-lg text-black mb-4">Sort by Category</h3>
                {byCategory.map((item, index) => {
                  return (
                    <div className="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-white rounded border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-gray-600"
                      />
                      <label className="ml-2 text-sm text-black">
                        {item.name}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="flex-col mt-6">
                <h3 className="text-lg text-black mb-4">Sort by Section</h3>
                {bySelection.map((item, index) => {
                  return (
                    <div className="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-white rounded border-black focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-black dark:border-gray-600"
                      />
                      <label className="ml-2 text-sm text-black">
                        {item.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* CENTER */}
          <div className="container mx-auto">
            <h3 className="text-black text-center text-3xl font-light">
              FAVORITKU
            </h3>
            <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center justify-center">
              {sale.map((item, index) => {
                return (
                  <Link to={'/product-detail'}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Favorite;
