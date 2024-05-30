"use client";
import React, { useState } from "react";
import NavbarFilter from "@/components/Header/NabarFilter";
import SearchSection from "@/components/Filter/SearchSection";
import ShowFilteredData from "@/components/Filter/ShowFilteredData";
import cars from '../../components/Data'

export default function filters() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const handleSearchChange = (input) => {
    setSearchInput(input);
    if (input.length > 0) {
      const results = cars.flatMap((car) =>
        car.model.filter((model) =>
          model.name.toLowerCase().includes(input.toLowerCase())
        )
      );
      setFilteredCars(results);
    } else {
      setFilteredCars([]);
    }
  };
  return (
    <main className="flex min-h-screen flex-col -z-0 bg-[#f8f8f8]">
      <NavbarFilter searchInput={searchInput} onSearchChange={handleSearchChange} />
      <div className="flex p-2 ">
        <div className="w-1/5  flex-1 mt-10 rounded-lg max-h-screen border border-gray-300 fixed top-12 overflow-y-auto">
          <SearchSection />
        </div>
        <div className="w-4/5 ml-auto">
          <ShowFilteredData filteredCars={filteredCars}/>
        </div>
      </div>
    </main>
  );
}
