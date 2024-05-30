"use client"
import React,{useEffect,} from "react";
import HomePage from "@/Pages/Home/HomePage";
import FooterSection from "@/components/Footer/FooterSection";
import Navbar from "@/components/Header/Navbar";
import { firebaseAuth } from "@/lib/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const auth = firebaseAuth;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user object from firebase:", user);
      } else {
        console.log("error");
      }
    });
  
    // Cleanup function to unsubscribe from listener on unmount
    return unsubscribe;
  }, [auth]);

  //const updateUser = (newUser) => setUser(newUser);
  return (
    <main className="flex min-h-screen flex-col -z-0 bg-[#f8f8f8]">
      <Navbar />
      <div >
        <HomePage />
      </div>
      <FooterSection />
    </main>
  );
}
