"use client";
import React, { useEffect, useState, useCallback } from "react";

const carTypes = {
  Toyota: ["Toyota V8", "Toyota Hyryder", "Toyota V8 (new)", "Toyota Tx", "Toyota Tx (new)", "Toyota Camry", "Toyota Hilux", "Toyota Hycross", "Toyota Fortuner", "Toyota Vellfire", "Toyota Glanza"],
  Audi: ["Audi Q3", "Audi A4", "Sportback Q3", "Audi Q5", "Audi Q7", "Audi Q8"],
  BMW: ["BMW 2", "BMW X1", "BMW 3", "BMW X3", "BMW 6", "BMW X4", "BMW X5", "BMW M8"],
  Lexus: ["LEXUS LM", "LEXUS LS", "LEXUS LX", "LEXUS NX", "LEXUS RX", "Lexus ES", "LEXUS LC", "LEXUS"],
  MercedesBenz: ["AMG A35", "AMG A45", "AMG SL55", "E-Class", "C-Class", "GLB", "GLS", "GLA"],
};

export default function SearchSection({ onFilterChange }) {
  const [selectedMake, setSelectedMake] = useState("");
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [price, setPrice] = useState(1000);
  const [rating, setRating] = useState(4.5);

  useEffect(() => {
    if (selectedMake) {
      setModels(carTypes[selectedMake]);
      setSelectedModel("");
    } else {
      setModels([]);
    }
  }, [selectedMake]);

  useEffect(() => {
    onFilterChange({ selectedMake, selectedModel, price, rating });
  }, [selectedMake, selectedModel, price, rating]);

  const resetFilters = () => {
    setSelectedMake("");
    setSelectedModel("");
    setPrice(1000);
    setRating(4.5);
    onFilterChange({ selectedMake: "", selectedModel: "", price: 1000, rating: 4.5 });
  };

  return (
    <form>
      <div className="bg-white p-8 rounded shadow">
        <div className="flex flex-row justify-between mb-4 items-center">
          <h2 className="text-2xl font-bold">Filter</h2>
          <h2 className="text-xs cursor-pointer" onClick={resetFilters}>Reset</h2>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">Car Make</label>
          <select
            className="select select-info w-full max-w-xs"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option disabled value="">Select Car Make:</option>
            {Object.keys(carTypes).map((make) => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">Car Model</label>
          <select
            className="select select-info w-full max-w-xs"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={!selectedMake}
          >
            <option value="">Select a model</option>
            {models.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price Range per hr: Ksh.{price}</label>
          <input
            type="range"
            min="800"
            max="1500"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="slider w-full"
            id="price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">Rating</label>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="radio"
                name="rating-2"
                className={`mask mask-star-2 bg-orange-400 ${index + 1 <= rating ? "checked" : ""}`}
                checked={rating === index + 1}
                onChange={() => setRating(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
