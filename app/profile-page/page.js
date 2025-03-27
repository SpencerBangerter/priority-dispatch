"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
// if we had the ability to call the API for a specific user via ID or something,
//  we could use the params to make this page dynamic, however, this is not posssible with randomuser.me
// so we are just going to use the page to display the contents from local storage
const ProfilePage = ({ params }) => {
  const profile = JSON.parse(localStorage.getItem("profile"));

  if (!profile) {
    return (
      <div>
        <h1>Profile Page</h1>
        <p>No profile found in local storage!</p>
        <Link href={"/members-page"}>
          <button className="p-2 hover:bg-blue-600 bg-blue-500 text-white cursor-pointer rounded">
            Please go back to the members page and select a profile.
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="flex justify-center  min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg my-6 rounded-lg p-6 w-4/5">
        <h1 className="text-2xl font-bold mb-4 text-center">Profile Page</h1>
        <div className="mb-4">
          <Image
            src={profile.picture}
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong className="font-semibold">Name:</strong> {profile.name}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong className="font-semibold">Email:</strong> {profile.email}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong className="font-semibold">Phone:</strong> {profile.phone}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong className="font-semibold">Address:</strong>{" "}
            {`${profile.location.street.number} ${profile.location.street.name}, ${profile.location.city}, ${profile.location.state} ${profile.location.postcode}`}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong className="font-semibold">Date of Birth:</strong>{" "}
            {new Date(profile.dob.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <Link href={"/members-page"} className="flex justify-center">
          <button className="w-80 p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back to Members Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
