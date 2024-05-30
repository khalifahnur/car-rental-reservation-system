"use client";
import { useState } from "react";
import { FiSearch, FiGlobe, FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import cars from "../Data";
import FavoriteCars from "../Favourites/FavouriteCars";

const NavbarFilter = ({ searchInput, onSearchChange }) => {
  // const [searchInput, setSearchInput] = useState('');
  // const [filteredCars, setFilteredCars] = useState([]);

  // const handleSearchChange = (e) => {
  //   setSearchInput(e.target.value);
  //   if (e.target.value.length > 0) {
  //     const results = cars.flatMap(car =>
  //       car.model.filter(model => model.name.toLowerCase().includes(e.target.value.toLowerCase()))
  //     );
  //     setFilteredCars(results);
  //   } else {
  //     setFilteredCars([]);
  //   }
  // };

  // const handleSearchClick = () => {
  //   if (searchInput.length > 0) {
  //     const results = cars.flatMap(car =>
  //       car.model.filter(model => model.name.toLowerCase().includes(searchInput.toLowerCase()))
  //     );
  //     setFilteredCars(results);
  //   }
  // };

  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleSearchClick = () => {
    onSearchChange(searchInput);
  };

  const HandleModal = () => {
    document.getElementById("favourites").showModal();
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Search Box */}
        <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-4">
          <input
            type="text"
            placeholder="Search for a car"
            className="bg-gray-100 outline-none"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button
            className="bg-orange-500 text-white rounded-full p-2"
            onClick={handleSearchClick}
          >
            <FiSearch />
          </button>
          {/* {filteredCars.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white shadow-md rounded-md overflow-hidden">
            {filteredCars.map(car => (
              <Link key={car.id} href={`/car/${car.id}`}>
                <p className="block px-4 py-2 hover:bg-gray-200">
                  {car.name}
                </p>
              </Link>
            ))}
          </div>
        )} */}
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-10 cursor-pointer">
          <div className="flex items-center space-x-4">
            <Image
              src={"/wishlist.png"}
              alt="car seat"
              width={30}
              height={30}
              onClick={HandleModal}
            />
            <Link href={'/settings'}>
              <FaUserCircle className="text-gray-700 w-6 h-6" />
            </Link>
          </div>
        </div>
      </nav>
      {/* Modal */}
      <dialog id="favourites" className="modal">
        <div className="modal-box">
          <FavoriteCars />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default NavbarFilter;
