"use client"
import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";
import cars from "../Data";
import CarButton from "../Btn/CarButton";
import CarList from "./CarList";

const makes = ['Toyota', 'Audi', 'BMW', 'Lexus', 'Mercedes Benz'];

const CarsSection = () => {
  const [activeMake, setActiveMake] = useState('Toyota');

  const filteredCars = cars.filter((car) => car.make === activeMake);
  return (
  <section className="mt-20">
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="mb-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Top Rated Rented Cars</h1>
      <CarButton makes={makes} activeMake={activeMake} setActiveMake={setActiveMake} />
      <CarList cars={filteredCars} />
    </div>
    </section>
  );
};

export default CarsSection;
