import React from "react";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";
import Drawer from "./Drawer";

const BookingPage = () => {
  return (
    <div className="flex flex-row  gap-10 px-5 justify-center items-center mb-2">
      {/* TopLeft component */}
      <div className="w-2/5 mt-3 bg-white rounded-lg shadow-md px-4 py-4 border border-[#e8e8e8]  flex flex-col">
        <TopLeft />
      </div>

      {/* TopRight component */}
      <div className="w-2/5  bg-white rounded-lg shadow-md px-4 py-4 border border-[#e8e8e8] flex flex-col">
        <TopRight />
      </div>
    </div>
  );
};

export default BookingPage;
