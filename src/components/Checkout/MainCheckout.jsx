"use client";
import { useRouter } from 'next/router';
import Checkout from '../components/Checkout'; // Adjust the import path as needed

const MainCheckout = () => {
  const router = useRouter();
  const { price, name } = router.query;

  return (
    <div>
      <Checkout price={price} name={name} />
    </div>
  );
};

export default MainCheckout;
