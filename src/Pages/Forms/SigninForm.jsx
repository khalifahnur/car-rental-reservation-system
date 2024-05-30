"use client";

import React, { useState } from "react";
import Link from "next/link";
import {signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase/firebaseConfig";
import { useRouter } from 'next/navigation';
import { useAppContext } from "@/context";


export function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [navigation,setNavigation] = useState("");
  const router = useRouter();
  const auth = firebaseAuth;

  
  const{updateUser}= useAppContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); 
    setLoading(true); 

    if ( !email || !password) {
      setErrors({ general: "All fields are required" });
      setLoading(false);
      return;
    }

    try {
     await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential)=>{
        updateUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          userLoggedIn:true
        });
        setLoading(false);
        router.push("/");
      })
       
    } catch (error) {
      console.error("Error occurred during sign up:", error);
      setErrors({ general: error.message });
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg shadow-md py-5 px-5 ">
          <div className="space-y-1 flex flex-col justify-start">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-sm">
            Enter your details to sign in to your account
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2 flex flex-col mt-2">
              <label htmlFor="email" className="font-semibold font-lg">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="border border-[#e8e8e8] py-2 px-2 rounded-lg font-md"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              
            </div>

            <div className="space-y-2 flex flex-col mt-2">
              <label htmlFor="password" className="font-semibold font-lg">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-[#e8e8e8] py-2 px-2 rounded-lg font-sm"
              />
            </div>
          </div>
          {errors.general && (
          <div className="text-red-500 text-sm mt-2">{errors.general}</div>
        )}
          <footer className="flex flex-col mt-2 items-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          </footer>
        </div>
        <div className="mt-4 text-center text-sm">
        Don't have an account?
          <Link className="underline ml-2" href="signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}