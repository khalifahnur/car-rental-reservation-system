"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Checkout = () => {
  
  
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedOption2, setSelectedOption2] = useState("option3");

  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };


  return (
    <dialog id="my_modal_3" className="modal modal-open">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-[#e0e0e0]" >
            ✕
          </button>
          <div className="flex flex-row justify-center gap-10 items-center bg-[#f8f8f8] p-2 mt-5 rounded-lg shadow-xl">
            <div>
              <Image
                src={"/cars/audi/a4.jpg"}
                alt="audi"
                width={150}
                height={150}
                className="rounded-badge"
              />
            </div>
            <div>
              <h2>Audi A4</h2>
              <p>Ksh.800/hr</p>
              <p>Nairobi,Kenya</p>
            </div>
          </div>

          {/* options */}

          <div className="mt-5">
            <h2 className="mb-2 mx-5">Pickup and drop-off options</h2>
            <div className="mb-4 bg-[#f8f8f8] rounded-xl flex flex-row space-x-5 py-2 px-4">
              <input
                type="radio"
                id="option1"
                name="options"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="option1" className="text-md">
                Pick up the car from the dealership
              </label>
            </div>
            <div className="mb-4 bg-[#f8f8f8] rounded-xl flex flex-row space-x-5 py-2 px-4">
              <input
                type="radio"
                id="option2"
                name="options"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="option2" className="text-md">
                Have the car delivered to your location
              </label>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="mb-2 mx-5">Additional Items</h2>
            <div className="mb-4 bg-[#f8f8f8] rounded-xl flex flex-row space-x-5 py-2 px-4">
              <input
                type="Checkbox"
                id="option3"
                name="options"
                value="option3"
                checked={selectedOption2 === "option3"}
                onChange={handleOptionChange2}
                className="mr-2"
              />
              <label htmlFor="option3" className="text-md">
                Child seat
              </label>
            </div>
            <div className="mb-4 bg-[#f8f8f8] rounded-xl flex flex-row space-x-5 py-2 px-4">
              <input
                type="checkbox"
                id="option4"
                name="options"
                value="option4"
                checked={selectedOption2 === "option4"}
                onChange={handleOptionChange2}
                className="mr-2 checked:bg-orange-500"
              />
              <label htmlFor="option4" className="text-md">
                GPS
              </label>
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col items-center mt-5">
            <div className="flex flex-row justify-between w-full max-w-2xl space-x-4">
              <div className="flex-1">
                <h2 className="mb-2">Pickup Date</h2>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="mb-4 bg-[#f8f8f8] rounded-xl py-2 px-4 w-full cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <h2 className="mb-2">Return Date</h2>
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  className="mb-4 bg-[#f8f8f8] rounded-xl py-2 px-4 w-full cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* btn */}
          <footer className="mt-5">
          <div className=" bg-[#f8f8f8] rounded-xl">
            <div className="flex flex-row justify-between mx-10 items-center">
            <span className="">
              <p className="text-sm font-semibold">Total Price:</p>
              <p className="text-sm font-bold">Ksh.1300</p>
            </span>
            <button className="bg-orange-500 hover:bg-orange-300 rounded-xl py-1 px-10">Checkout</button>
          </div>
          </div>
          </footer>
          
        </form>
      </div>
    </dialog>
  );
};

export default Checkout;
