import React from 'react'
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
const SearchSection = () => {
  return (
    <div className="absolute translate -translate-x-1/2 -translate-y-1/2  bottom-50 left-1/2  ">
          <Link href={'/filter'} className="bg-[#e4e4e4] px-4 py-3 rounded md:w-[50vw] w-[70vw] flex flex-row justify-between items-center">
            <h5 className="text-[#000]">Search For Cars ...</h5>
            <AdjustmentsHorizontalIcon className="h-5 w-5 rounded" />
          </Link>
        </div>
  )
}

export default SearchSection