"use client";
import React, { useState, useEffect } from "react";
import NavbarFilter from "@/components/Header/NabarFilter";
import SearchSection from "@/components/Filter/SearchSection";
import ShowFilteredData from "@/components/Filter/ShowFilteredData";
import cars from '../../components/Data'

export default function Filters() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({});

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

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
    //console.log(criteria);
  };

  // criteria => {selectedMake: 'Audi', selectedModel: 'Audi A4', price: 750, rating: 4}

  

  useEffect(() => {
    const { selectedMake, selectedModel, price, rating } = filterCriteria;
    const filtered = cars
      .filter((car) => !selectedMake || car.make === selectedMake)
      .flatMap((car) =>
        car.model.filter(
          (model) =>
            (!selectedModel || model.name === selectedModel) &&
            model.price == (price || 1000) &&
            model.rate >= (rating || 4)
        )
      );
    setFilteredCars(filtered);
  }, [filterCriteria]);

  return (
    <main className="flex min-h-screen flex-col -z-0 bg-[#f8f8f8]">
      <NavbarFilter searchInput={searchInput} onSearchChange={handleSearchChange} />
      <div className="flex p-2">
        <div className="w-1/5 flex-1 mt-10 rounded-lg max-h-screen border border-gray-300 fixed top-12 overflow-y-auto">
          <SearchSection onFilterChange={handleFilterChange} />
        </div>
        <div className="w-4/5 ml-auto">
          <ShowFilteredData filteredCars={filteredCars.length ? filteredCars : cars.flatMap(car => car.model)} />
        </div>
      </div>
    </main>
  );
}
