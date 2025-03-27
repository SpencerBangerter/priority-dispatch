import React from "react";
import { Modal } from "@mui/material";
import Image from "next/image";
function ProfileModal({ open, profile, closeHandler }) {
  return (
    <Modal open={open} onClose={closeHandler}>
      
      <div className="relative p-5 bg-white rounded-lg w-2/5 mx-auto mt-24 text-center">
      <button
          className="absolute top-5 left-5 px-3 py-2 font-bold bg-red-500 hover:bg-red-600 text-white rounded hover:cursor-pointer"
          onClick={closeHandler}
        >
          X
        </button>
        <Image
          width={100}
          height={100}
          src={profile.picture.large}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 mx-auto"
        />
        <h2 className="mb-2 text-xl font-bold">
          {profile.name.first} {profile.name.last}
        </h2>
        <p className="mb-1 font-bold text-gray-500">Address</p>
        <p className="mb-1 text-gray-500">
          {`${profile.location.street.number} ${profile.location.street.name}, ${profile.location.city}, ${profile.location.state} ${profile.location.postcode}`}
        </p>
        <br />
        <p className="mb-1 font-bold text-gray-500">Email</p>
        <p className="mb-1 text-gray-500">{profile.email}</p>
        <br />
        <p className="mb-1 font-bold text-gray-500">Date Of Birth</p>
        <p className="mb-1 text-gray-500">
          {new Date(profile.dob.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="mb-4 text-gray-500">{profile.phone}</p>
      
      </div>
    </Modal>
  );
}

export default ProfileModal;
