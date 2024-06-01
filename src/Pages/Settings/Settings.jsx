"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeftStartOnRectangleIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { firebaseAuth } from "@/lib/firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import fetchBookings from "@/lib/firebase/fetchBookings";
import { Card } from "react-bootstrap";

const Settings = () => {
  const [bookings, setBookings] = useState([]);
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = firebaseAuth;
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user object from firebase:", user);
        setUserData(user);
      } else {
        console.log("error");
      }
    });

    // Cleanup function to unsubscribe from listener on unmount
    return unsubscribe;
  }, [auth]);

  const HandleSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log("user succsefully signed out");
        setTimeout(() => {
          setLoading(false);
          router.push("/signin");
        }, 2000);
      })
      .catch((e) => {
        console.log("Error occured when signed out", e);
      });
  };

  const handleFetchBookings = async () => {
    const user = auth.currentUser;
    if (user) {
      const bookingsData = await fetchBookings(user.uid);
      setBookings(bookingsData);
    } else {
      router.push({
        pathname: "/signin",
        query: { returnUrl: router.asPath },
      });
    }
  };

  console.log(bookings);
  return (
    <>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <div className=" sticky top-0 left-0 w-1/12 bg-orange-500 py-4 flex flex-col justify-between shadow-lg text-white">
          <div>
            <Link href={"/"}>
              <Image
                src="/logo.svg"
                alt="logo"
                width={118}
                height={18}
                className="object-contain"
              />
            </Link>
            <hr className="py-1 px-2 mt-2" />
            <div className="mt-5 items-center flex flex-col">
              <button
                className="flex flex-row justify-between bg-blue-400 rounded-btn py-2 px-1 hover:bg-blue-500  "
                onClick={handleFetchBookings}
              >
                <BellIcon width={20} height={20} />
                <p className="text-sm">Bookings</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-5">
              <UserCircleIcon width={40} height={40} />
            </div>
            <hr className="py-1 px-2 mt-2 w-full" />
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <ArrowLeftStartOnRectangleIcon width={20} height={20} />
              <button
                onClick={() => HandleSignOut()}
                className=" md:ml-4 text-sm text-center"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-11/12 bg-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Profile Details</h2>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Profile"
                className="rounded-full mr-4"
              />
              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  Upload Profile Photo
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
                <p className="text-gray-500 text-sm mt-2">
                  *Image size should be at least 320px big, and less than 500kb.
                  Allowed files: .png and .jpg.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">Username</label>
                <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                  {userData.displayName}
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                  {userData.email}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Change password</h2>
            <p className="text-gray-700 mb-4">Change your password.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Change Password
            </button>
          </div>

          {/* Bookings */}
          {bookings != "" ? (
            <div className="bg-orange-500 p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-bold mb-4">Bookings</h2>
              {bookings.length === 0 ? (
                <p>No bookings found.</p>
              ) : (
                <div>
                  {bookings.map((booking) => (
                    <Card key={booking.id}>
                      <Card.Body>
                        <Card.Title>{booking.carModel}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          From: {booking.pickUpDate} {`=>`} To:{" "}
                          {booking.dropOffDate}
                        </Card.Subtitle>
                        <Card.Text>
                          Total Price:Ksh. {booking.totalPrice}
                        </Card.Text>
                      </Card.Body>
                      <hr className="w-full" />
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <span className="loading loading-spinner text-white mb-4"></span>
            <p className="text-white">SignIn Out...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
