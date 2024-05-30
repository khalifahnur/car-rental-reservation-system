"use client";
import React, { useState } from "react";
import cars from "../Data";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";
import Tabs from "../Tabs/Tabs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "@/lib/likedModelSlice";

const ShowFilteredData = ({ filteredCars }) => {
  const dispatch = useDispatch();

  const likedModels = useSelector((state) => state.likedModels);
  const handleIconClick = (carId) => {
    dispatch(toggleLike(carId));
  };

  console.log("favourites cars id's ","=>",likedModels)

  const [modalVisible, setModalVisible] = useState(false);
  const [dataId, setDataId] = useState();

  const HandleModal = (modelId) => {
    setModalVisible(true);
    document.getElementById("my_modal_3").showModal();
    setDataId(modelId);
    //console.log(modelId);
  };

  return (
    <>
      <div className="mx-10 bg-[#e8e8e8] border rounded-btn px-5 py-2 w-fit">
        <span className="text-sm">
          {filteredCars.length == 0
            ? cars.flatMap((car) => car.model).length
            : filteredCars.length}{" "}
          Cars Available
        </span>
      </div>
      <div className="flex flex-wrap items-center cursor-pointer">
        {filteredCars != ""
          ? filteredCars.map((car) => (
              <div
                key={car.id}
                className="w-full sm:w-1/2 md:w-1/3 p-4 items-center"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-full h-40">
                    <div
                      className="absolute top-2 right-2 cursor-pointer"
                      onClick={() => handleIconClick(car.id)}
                    >
                      <HeartIcon
                        width={20}
                        height={20}
                        className={
                          likedModels[car.id]
                            ? "text-red-500"
                            : "text-white border border-black bg-black p-1 rounded-full"
                        }
                      />
                    </div>
                    <img
                      src={car.imgUrl}
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{car.name}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Image
                          src={"/car-seat.png"}
                          alt="car seat"
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">4seater</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <Image
                          src={"/steering-wheel.png"}
                          alt="steering wheel"
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">Auto</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <Image
                          src={"/speedometer.png"}
                          alt="speedometer"
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">12KM/L</p>
                      </div>
                    </div>

                    <div className="items-center mb-2 ">
                      <p className="text-gray-500 text-sm text-center ">
                        Starting at ksh.{car.price}/hr
                      </p>
                    </div>

                    <div className="flex justify-center gap-5 items-center">
                      <button
                        className="btn bg-orange-500 text-white text-xs p-1 rounded-xl hover:text-black"
                        onClick={() => HandleModal(car.id)}
                      >
                        Details
                      </button>

                      <Link
                        href={{
                          pathname: "/filter/booking",
                          query: {
                            id: car.id,
                            price: car.price,
                            name: car.name,
                            imageUrl: car.imgUrl,
                            year: car.year,
                            rate: car.rate,
                          },
                        }}
                        passHref
                      >
                        <button className="btn rounded-btn w-100 bg-gray-200 text-black text-xs">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : cars.map((car) =>
              car.model.map((model) => (
                <div
                  key={model.id}
                  className="w-full sm:w-1/2 md:w-1/3 p-4 items-center"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-full h-40">
                      <div
                        className="absolute top-2 right-2 cursor-pointer"
                        onClick={() => handleIconClick(model.id)}
                      >
                        <HeartIcon
                          width={20}
                          height={20}
                          className={
                            likedModels[model.id]
                              ? "text-red-500"
                              : "text-white border border-black bg-black p-1 rounded-full"
                          }
                        />
                      </div>
                      <img
                        src={model.imgUrl}
                        alt={model.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">{model.name}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <Image
                            src={"/car-seat.png"}
                            alt="car seat"
                            width={10}
                            height={10}
                          />
                          <p className="text-xs">4seater</p>
                        </div>
                        <div className="flex items-center ml-4">
                          <Image
                            src={"/steering-wheel.png"}
                            alt="steering wheel"
                            width={10}
                            height={10}
                          />
                          <p className="text-xs">Auto</p>
                        </div>
                        <div className="flex items-center ml-4">
                          <Image
                            src={"/speedometer.png"}
                            alt="speedometer"
                            width={10}
                            height={10}
                          />
                          <p className="text-xs">12KM/L</p>
                        </div>
                      </div>

                      <div className="text-center items-center mb-2">
                        <p className="text-gray-500 text-sm">
                          Starting at ksh.{model.price}/hr
                        </p>
                      </div>
                      <div className="flex justify-center gap-5 items-center">
                        <button
                          className="btn bg-orange-500 text-white text-xs  rounded-xl hover:text-black"
                          onClick={() => HandleModal(model.id)}
                        >
                          Details
                        </button>
                        <Link
                          href={{
                            pathname: "/filter/booking",
                            query: {
                              id: model.id,
                              price: model.price,
                              name: model.name,
                              imageUrl: model.imgUrl,
                              year: model.year,
                              rate: model.rate,
                            },
                          }}
                          passHref
                        >
                          <button className="btn rounded-btn w-100 bg-gray-200 text-black text-xs">
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
      </div>
      {/* Modal */}

      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h1 className="text-center font-bold text-xl mb-2">Details</h1>
            {cars.map((car) =>
              car.model
                .filter((model) => model.id === dataId)
                .map((filteredModel) => (
                  <div key={filteredModel.id}>
                    <div className="border-b mb-2">
                      <img
                        src={filteredModel.imgUrl}
                        alt={filteredModel.name}
                        className="w-full h-full rounded-badge "
                      />
                      <div className="flex flex-row justify-between items-center mb-2 mt-2">
                        <h3 className="text-xl font-bold">
                          {filteredModel.name}
                        </h3>
                        <div className="flex flex-row justify-between items-center gap-2 text-sm">
                          <p>4.8</p>
                          <div className="rating rating-sm">
                            <input
                              type="radio"
                              name="rating-2"
                              className="mask mask-star-2 bg-orange-400"
                            />
                          </div>

                          <p>(210 reviews)</p>
                        </div>
                      </div>
                    </div>
                    <div className="items-center">
                      <h3 className="text-lg font-semibold">About Car</h3>
                      <p>
                        The {filteredModel.name} is powered by a variety of
                        gasoline and engines,ranging from 1.0 litre
                        three-cylinder to 2.0-litre four-cylinder.
                      </p>
                    </div>
                    {/* tabs */}
                    <Tabs price={filteredModel.price} />
                    <div className="flex items-center bg-slate-300 p-2 rounded-md">
                      <Link
                        className="w-full"
                        href={{
                          pathname: "/filter/booking",
                          query: {
                            id: filteredModel.id,
                            price: filteredModel.price,
                            name: filteredModel.name,
                            imageUrl: filteredModel.imgUrl,
                            year: filteredModel.year,
                            rate: filteredModel.rate,
                          },
                        }}
                        passHref
                      >
                        <button className="bg-orange-500 hover:bg-orange-400 p-2 w-full rounded-full text-xl text-black">
                          Rent
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ShowFilteredData;
