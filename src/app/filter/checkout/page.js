"use client";
import Checkout from "@/components/Checkout/Checkout";
import Navbar from "@/components/Header/Navbar";
import { useSearchParams } from 'next/navigation';

export default function Checkouts() {
  const searchParams = useSearchParams();
  const price = searchParams.get('price');
  const name = searchParams.get('name');
  console.log(price,name)

  return (
    <main className="flex min-h-screen flex-col -z-0">
      {/* <Navbar /> */}
      <div>
        <Checkout price={price} name={name} />
      </div>
    </main>
  );
}
