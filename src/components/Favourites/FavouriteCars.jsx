// components/FavoriteCars.js
"use client";

import { useSelector } from 'react-redux';
import cars from '../Data';

const FavoriteCars = () => {
  const likedModels = useSelector((state) => state.likedModels);

  const favoriteCars = cars.flatMap(car => 
    car.model.filter(model => likedModels[model.id])
  );
  if (favoriteCars.length === 0) {
    return <div>No favorite cars selected.</div>;
  }

  return (
    <div>
      <h2 className='text-center font-bold underline '>Favorite Cars</h2>
        {favoriteCars.map((model) => (
          <>
          <div key={model.id} className='flex flex-row justify-between items-center'>
            <div>
              <img src={model.imgUrl} alt={model.name} className='w-40 h-30 rounded-xl'/>
            </div>
            <div className='text-center'>
              <p className='font-lg font-bold'>{model.name}</p>
              <p className='font-lg font-bold'>Price: Ksh.{model.price}/hr</p>
              <p className='font-lg font-bold'>Year: {model.year}</p>
              <p className='font-lg font-bold'>Rating: {model.rate}</p>
            </div>  
          </div>
          <hr className='my-2' />
          </>
          
        ))}
        
    </div>
  );
};

export default FavoriteCars;
