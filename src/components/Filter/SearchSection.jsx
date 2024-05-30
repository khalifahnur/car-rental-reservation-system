"use client"
import React, { useEffect, useState } from "react";
import cars from "../Data";

const carTypes = {
  Toyota: [
    "Toyota V8",
    "Toyota Hyrder",
    "Toyota V8 (new)",
    "Toyota Tx",
    "Toyota Tx (new)",
    "Toyota Camry",
    "Toyota Hilux",
    "Toyota Hycross",
    "Toyota Fotuner",
    "Toyota Vellfire",
    "Toyota Glanza",
  ],
  Audi: ["Audi Q3", "Audi A4", "Sportback Q3", "Audi Q5", "Audi Q7", "Audi Q8"],
  BMW: [
    "BMW 2",
    "BMW X1",
    "BMW 3",
    "BMW X3",
    "BMW 6",
    "BMW X4",
    "BMW X5",
    "BMW M8",
  ],
  Lexus: [
    "LEXUS LM",
    "LEXUS LS",
    "LEXUS LX",
    "LEXUS NX",
    "LEXUS RX",
    "Lexus ES",
    "LEXUS LC",
    "LEXUS",
  ],
  MercedesBenz: [
    "AMG A35",
    "AMG A45",
    "AMG SL55",
    "E-Class",
    "C-Class",
    "GLB",
    "GLS",
    "GLA",
  ],
}

export default function SearchSection() {
  const [selectedMake, setSelectedMake] = useState("");
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [year, setYear] = useState("");
  const [transmission, setTransmission] = useState("All");
  const [price, setPrice] = useState(750);
  const [rating, setRating] = useState(3);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    if (selectedMake) {
      setModels(carTypes[selectedMake]);
      setSelectedModel("");
    } else {
      setModels([]);
    }
  }, [selectedMake]);

  // Filter cars whenever the filter criteria change
  useEffect(() => {
    const filtered = cars
      .filter((car) => !selectedMake || car.make === selectedMake)
      .flatMap((car) =>
        car.model.filter(
          (model) =>
            (!selectedModel || model.name === selectedModel) &&
            model.price <= price &&
            model.rate >= rating
        )
      );
    setFilteredCars(filtered);
  }, [selectedMake, selectedModel, price, rating]);

  console.log(filteredCars)

  return (
    <form>
      <div className="bg-white p-8 rounded shadow">
        <div className="flex flex-row justify-between mb-4 items-center">
          <h2 className="text-2xl font-bold">Filter</h2>
          <h2 className="text-xs">Reset</h2>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
            Car Make
          </label>
          <select
            className="select select-info w-full max-w-xs"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option disabled selected>
              Select Car Make:
            </option>
            {Object.keys(carTypes).map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
            Car Model
          </label>
          <select
            className="select select-info w-full max-w-xs"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={!selectedMake}
          >
            <option value="">Select a model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        {/* Price range */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price Range per hr: Ksh.{price}
          </label>
          <input
            type="range"
            min="100"
            max="1000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="slider w-full"
            id="price"
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Star Rating
          </label>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onChange={() => setRating(1)}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={rating === 2}
              onChange={() => setRating(2)}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={rating === 3}
              onChange={() => setRating(3)}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={rating === 4}
              onChange={() => setRating(4)}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={rating === 5}
              onChange={() => setRating(5)}
            />
          </div>
        </div>

        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full">
          Apply Filters
        </button>
      </div>

      {/* Render filtered cars */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded shadow">
            <img src={car.imgUrl} alt={car.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-4">{car.name}</h3>
            <p className="text-sm text-gray-600">Price: Ksh.{car.price}</p>
            <p className="text-sm text-gray-600">Year: {car.year}</p>
            <p className="text-sm text-gray-600">Rating: {car.rate}</p>
          </div>
        ))}
      </div>
    </form>
  );
}
